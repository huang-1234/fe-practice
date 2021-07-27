/*
单调栈：AC 100%，时间复杂度O(n)
栈：记录当前的最小值和对应这一区间累积和
对于第i个数，判断其与栈顶元素的大小关系：
  a. 如果比栈顶元素大，累积和=元素值，压栈
  b. 否则，栈中元素不断出栈，并计算栈元素*以此元素为最小值的最大累计和，直到栈空或满足a条件
对于得到的单调栈，再用b中的策略处理一次即可。
*/

#include<iostream>
#include<algorithm>
#include<vector>
#include<stack>

struct prs {
    int val;
    int acc;
};

using namespace std;
int main(){
    int n;
    cin>>n;

    stack<prs> s1;
    prs ptmp;
    int maxval = 0, tmp = 0;

    for(int i = 0; i < n; i++) {
        cin>>ptmp.val;
        ptmp.acc = ptmp.val;
        if(i != 0 && ptmp.val <= s1.top().val) {
            tmp = 0;
            while(!s1.empty() && ptmp.val <= s1.top().val) {
                tmp = tmp + s1.top().acc;
                maxval = max(maxval, tmp*s1.top().val);
                s1.pop();
            }
            ptmp.acc = ptmp.acc + tmp;
        }
        s1.push(ptmp);
    }

    tmp = 0;
    while(!s1.empty()) {
        tmp = tmp + s1.top().acc;
        maxval = max(maxval, tmp*s1.top().val);
        s1.pop();
    }
    cout<<maxval<<endl;

    return 0;
}