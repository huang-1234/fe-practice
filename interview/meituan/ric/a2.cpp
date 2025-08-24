#include <iostream>
using namespace std;
int main()
{
  string s;
  cin >> s;
  int intn;
  cin >> intn;
  int const n = intn;
  int arr[n][3];
  for (int i = 0; i < 3;i++){
    for (int j = 0; j < n; j++){
      cin >> arr[j][i];
    }
  }
  while(intn--){
    for (int j = n-1; j >= 0; j--){
      int L = arr[j][0];
      int R = arr[j][1];
      int K = arr[j][2];
      for (int c = L; c <= R;c++){
        s[c] = s[c + K];
      }
    }
  }
  printf("%s", s);

}