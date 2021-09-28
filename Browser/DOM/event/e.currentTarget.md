

## 谈一谈 currentTarget

在本例中，事件的目标阶段即li，由于e.currentTarget始终指向添加监听事件的那个对象，即aLi[i]，也就是HTML中的li，而e.target指向触发事件监听的那个对象，也是li，因此e.target和e.currentTarget相等，同时也和this相等。

总结
因此不必记什么时候e.currentTarget和e.target相等，什么时候不等，理解两者的究竟指向的是谁即可。

e.target 指向触发事件监听的对象。
e.currentTarget 指向添加监听事件的对象。
参考
Difference between e.target and e.currentTarget

