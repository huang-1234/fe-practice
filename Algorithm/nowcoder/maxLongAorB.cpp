#include <iostream>
#include <stdio.h>
using namespace std;

int main() {
    int a, b;
    while (cin >> a >> b) { // 注意 while 处理多个 case
        char str[a+1];
        cin.get(str,a+1);
        printf("%s",str);
    }
}
// 64 位输出请用 printf("%lld")