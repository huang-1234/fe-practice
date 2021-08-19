#include<iostream>
using namespace std;

#define que_size 10000

int n=0;
int t=0;

int queen[que_size];

bool is_ok(int row){            //判断设置的皇后是否在同一行，同一列，或者同一斜线上
    for (int j=0;j<row;j++) {
        if (queen[row]==queen[j]||row-queen[row]==j-queen[j]||row+queen[row]==j+queen[j])
            return false;
    }
    return true;
}
void back_tracking(int row=0){  //算法函数，从第0行开始遍历
    if (row==n) {
      t ++;
    }//判断若遍历完成，就进行计数
    for (int col=0;col<n;col++) {//遍历棋盘每一列
        queen[row] = col;           //将皇后的位置记录在数组
        if (is_ok(row))             //判断皇后的位置是否有冲突
            back_tracking(row+1);   //递归，计算下一个皇后的位置
    }
}

int main(){

}