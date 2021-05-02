#include <iostream>
// #include <string>
#include <cstring>
using namespace std;

int main() {
    char str1[] = "huangshuiqing";
    char str2[] = "google";
    char str3[strlen(str1)];
    cout << "strlen:" << str3 << ":" << strlen(str3) << endl;
    strcpy(str3, str1);
    cout << str3 << endl;
    cout << "strcat(str1,str2):" << strcat(str1, str2) << endl;
    cout << "strlen(str1):" << strlen(str1) << endl;
}
/*
// String类
int main() {
    string str1 = "huangshuiqing";
    string str2 = "google";
    string str3;
    int len;
    // 复制 str1 到 str3
    str3 = str1;
    cout << "str3 : " << str3 << endl;
    // 连接 str1 和 str2
    str3 = str1 + str2;
    cout << "str1 + str2 : " << str3 << endl;
    // 连接后，str3 的总长度
    len = str3.size();
    cout << "str3.size() :  " << len << endl;

    return 0;
}
 */
