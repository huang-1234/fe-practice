#include <iostream>
#include <chrono>
#include <vector>

using namespace std;

//求和函数，行优先
int sum_row_first(const vector<vector<int>> &data){
    int sum = 0;
    for(int i = 0; i < 1024; i++){
        for(int j = 0; j < 1024; j++){
            sum += data[i][j];
        }
    }
    return sum;
}
//求和函数，列优先
int sum_col_first(const vector<vector<int>> &data){
    int sum = 0;
    for(int j = 0; j < 1024; j++){
        for(int i = 0; i < 1024; i++){
            sum += data[i][j];
        }
    }
    return sum;
}

int main(){
    vector<vector<int>> data(1024,vector<int>(1024,0));
    //初始化二维数组
    for(int i=0;i < 1024; i++){
        for(int j=0; j < 1024; j++){
            data[i][j] = rand() % 10;
        }
    }

    chrono::steady_clock::time_point start_time = chrono::steady_clock::now();
    sum_row_first(data);  // 计算行优先求和函数耗时
    chrono::steady_clock::time_point stop_time = chrono::steady_clock::now();
    chrono::duration<double> time_span = chrono::duration_cast<chrono::microseconds>(stop_time - start_time);
    std::cout << "行优先耗时："<< time_span.count() << " ms" << endl;

    start_time = chrono::steady_clock::now();
    sum_col_first(data); //计算列优先求和函数耗时
    stop_time = chrono::steady_clock::now();
    time_span = chrono::duration_cast<chrono::microseconds>(stop_time - start_time);
    std::cout << "列优先耗时："<< time_span.count() << " ms" << endl;
}