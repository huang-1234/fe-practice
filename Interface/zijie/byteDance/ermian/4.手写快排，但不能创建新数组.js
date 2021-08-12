/* 作者：故人不在束旧装
链接：https://www.nowcoder.com/discuss/701019?channel=-1&source_id=discuss_terminal_discuss_sim_nctrack&ncTraceId=695cd68c2fb5412faa6e64465ad9dea3.521.16284964527189838
来源：牛客网

解答:基础题，秒给答案。快排有两种写法，一种是交换比pivot大和pivot小的元素(不创建新数组)，一种是把比pivot小的数放进数组里，把比pivot大的数放进数组里。然后连接起来。(创建了数组保存变量)，以下给出交换的方案。 */
function Sort(arr){
  function partition(arr,left,right){
      let value = arr[left];
      let _left = left,_right = right;
      while(_left<_right){
          while(arr[_right]>=value&&_left<_right){
              _right--;
          }
          while(arr[_left]<=value&&_left<_right){
              _left++;
          }
          [arr[_right],arr[_left]] = [arr[_left],arr[_right]]
      }
      [arr[left],arr[_left]] = [arr[_left],arr[left]]
      return _left;
  }
  function quickSort(arr,left,right){
      if(left>=right) return ;
      let pivot = partition(arr,left,right);
      quickSort(arr,left,pivot-1);
      quickSort(arr,pivot+1,right);
  }
  quickSort(arr,0,arr.length-1);
  return arr;
}

/**
 * 换一种方式书写
 */
{
  function quickSort(arr, left, right) {
    const len = arr.length;
    let partitionIndex;
    left = typeof left != 'number' ? 0 : left;
    right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
      partitionIndex = partition(arr, left, right);
      quickSort(arr, left, partitionIndex - 1);
      quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
  }

  function partition(arr, left, right) {     // 分区操作
    const pivot = left;                      // 设定基准值（pivot）
    let index = pivot + 1;
    for (let i = index;i <= right;i++) {
      if (arr[i] < arr[pivot]) {
        swap(arr, i, index);
        index++;
      }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
  }

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }


  let waitingArr = [4, 5, 64, 4, 54, 56, 59, 64, 54, 4, 4, 45, 4]

  console.log(quickSort(waitingArr,1,5))
}