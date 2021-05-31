#include <cstring>
#include <iostream>
using namespace std;
int main() {
    // char s[1000];
    // for (char c : s) {
    //     cin >> c;
    // }
    string s = "sfsdgdsfs";
    char s2[20] = "asfsefs";
    for (int i = 0; i < strlen(s2); ++i) {
        cout << i << ":" << s2[i]<<endl;
    }
    // cout << s2;
    // cout << s << strlen(s);
}