/* 
小明搭积木
时间限制： 3000MS
内存限制： 589824KB
题目描述：
小明喜欢搭积木。有一天，他用一些边长相同的正方体来搭积木。他搭了一排“高塔”，每一座高塔都是由若干个正方体积木一个一个向上累加搭成的。也就是说，每一座高塔都是一个1×1×h的长方体（假设正方体积木的边长为1）。一共有n座高塔，每座高塔的高度为hi。现在小明觉得有些塔搭的太高了，而有些又太矮了，所以他想推倒一些塔，使得剩下的塔中，最高的塔的高度小于等于最矮的塔的高度的两倍。但是这些塔都是小明辛辛苦苦搭成的，所以小明想推倒尽量少的塔来满足这个要求。你能写一个程序判断小明最少需要推倒多少塔吗？



输入描述
第一行有一个整数n，表示塔的数量。

第二行有n个整数，表示每一座塔的高度。

1≤n≤100000，1≤hi≤5000

输出描述
输出一个整数，表示小明最少推倒的塔的数量。


样例输入
5
10 50 100 30 20
样例输出
3

提示
至少删除3个数字才能保证最大数小于等于最小数的二倍。所以输出3。 */
#include <iostream>
#include <stdio.h>
#include <algorithm>
using namespace std;
int main(){
  int n;
  scanf("%d", n);
  int const intn = n;
  int arr[intn];
  for (int i = 0; i < intn;++i){
    scanf("%d", arr[i]);
  }
  sort(arr, arr + intn);
  int tow = arr[0] + arr[1];
  int index;
  for (int i = 0; i < intn;++i){
    if(arr[i]>tow){
      index = i;
      break;
    }

  }
  int ans = intn - index + 1;
  printf("%d", ans);
}