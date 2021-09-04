#include <iostream>
#include <stdio.h>
using namespace std;
int main()
{
  int n, c;
  cin >> n >> c;
  // scanf("%d%d",n,c);
  while(n--){
    int num;
    cin >> num;
    // scanf("%d", num);
    int x = num / c;
    int y = num % c;
    int wordIndex = x + 65;
    cout << char(wordIndex) << y;
    // printf("%c%d", char(wordIndex), y);
  }
}