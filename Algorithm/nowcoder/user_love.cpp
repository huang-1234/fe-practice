#include<iostream>
#include<stdio.h>
using namespace std;

int main(){
    const int number = 30000;
    int n; int arr[number];

    for(int g=0; g<40; g++){
      printf("%d",arr[g]);
    }

    scanf("%d",&n);
    for(int i=0; i<n; i++){
        scanf("%d", &arr[i]);
    }
    int q;  int qArr[number][number];
    scanf("%d",&q);
    for(int i=0; i<q; i++){
        for(int j=0; j<3; j++){
            scanf("%d",qArr[i][j]);
        }
    }
    for(int i=0; i<q; i++){
        int l=qArr[i][0], r = qArr[i][1], k = qArr[i][2];
        int res=0;
        for(int e=l; e<r; e++){
            if(arr[e] == k) res++;
        }
        printf("%d",res);
    }
}