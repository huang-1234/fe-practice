export let requestHostCallback; // 类似requestIdleCallback
export let cancelHostCallback; // 类似cancelIdleCallback
export let requestHostTimeout; // 非dom环境的实现
export let cancelHostTimeout;  // 取消requestHostTimeout
export let shouldYieldToHost;  // 判断任务是否超时,需要被打断
export let requestPaint; //
export let getCurrentTime; // 获取当前时间
export let forceFrameRate; // 根据fps计算帧时间
// 非dom环境
if (typeof window === 'undefined' || typeof MessageChannel !== 'function') {
	let _callback = null; // 正在执行的回调
  let _timeoutID = null;
  const _flushCallback = function() {
    // 如果回调存在则执行，
    if (_callback !== null) {
      try {
        const currentTime = getCurrentTime();
        const hasRemainingTime = true;
        // hasRemainingTime 类似deadline.didTimeout
        _callback(hasRemainingTime, currentTime);
        _callback = null;
      } catch (e) {
        setTimeout(_flushCallback, 0);
        throw e;
      }
    }
  };

  // ...

  requestHostCallback = function(cb) {
    // 若_callback存在，表示当下有任务再继续，
    if (_callback !== null) {
      // setTimeout的第三个参数可以延后执行任务。
      setTimeout(requestHostCallback, 0, cb);
    } else {
      // 否则直接执行。
      _callback = cb;
      setTimeout(_flushCallback, 0);
    }
  };
  cancelHostCallback = function() {
    _callback = null;
  };
  requestHostTimeout = function(cb, ms) {
    _timeoutID = setTimeout(cb, ms);
  };
  cancelHostTimeout = function() {
    clearTimeout(_timeoutID);
  };
  shouldYieldToHost = function() {
    return false;
  };
  requestPaint = forceFrameRate = function() {};
} else {
  // 一大堆的浏览器方法的判断，有performance， requestAnimationFrame， cancelAnimationFrame
  // ...
  const performWorkUntilDeadline = () => {
    if (scheduledHostCallback !== null) {
      const currentTime = getCurrentTime();
      // yieldInterval每帧的时间，deadline为最终期限时间
      deadline = currentTime + yieldInterval;
      const hasTimeRemaining = true;
      try {
        const hasMoreWork = scheduledHostCallback(
          hasTimeRemaining,
          currentTime,
        );
        if (!hasMoreWork) {
          isMessageLoopRunning = false;
          scheduledHostCallback = null;
        } else {
          // 如果有更多的工作，就把下一个消息事件安排在前一个消息事件的最后
          port.postMessage(null);
        }
      } catch (error) {
        // 如果调度任务抛出，则退出当前浏览器任务，以便观察错误。
        port.postMessage(null);
        throw error;
      }
    } else {
      isMessageLoopRunning = false;
    }
    needsPaint = false;
  };

  const channel = new MessageChannel();
  const port = channel.port2;
  channel.port1.onmessage = performWorkUntilDeadline;

  requestHostCallback = function(callback) {
    scheduledHostCallback = callback;
    if (!isMessageLoopRunning) {
        isMessageLoopRunning = true;
        port.postMessage(null);
    }
	};

}
