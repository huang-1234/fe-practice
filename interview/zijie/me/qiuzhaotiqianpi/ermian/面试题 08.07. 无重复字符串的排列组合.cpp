#include<iostream>
#include<vector>
using namespace std;

class Solution {
    private List<String> list = new ArrayList<>();
    private StringBuilder path = new StringBuilder();
    private boolean[] used = new boolean[10];

    public String[] permutation(String S) {
        dfs(S);
        String[] res = new String[list.size()];
        for (int i = 0; i < list.size(); i++) {
            res[i] = list.get(i);
        }
        return res;
    }

    private void dfs(String S) {
        if (path.length() == S.length()) {
            list.add(new String(path.toString()));
            return;
        }
        for (int i = 0; i < S.length(); i++) {
            if (!used[i]) {
                path.append(S.charAt(i));
                used[i] = true;
                dfs(S);
                used[i] = false;
                path.deleteCharAt(path.length() - 1);
            }
        }
    }
}

class Solution2 {
private:
    vector<string> res;
    void dfs(string &s, int left){
        if( left==s.size() ){
          res.emplace_back(s);
        }
        for( int i=left; i<s.size(); ++i ){
            swap(s[i], s[left]);
            dfs(s, left + 1);
            swap(s[i], s[left]);
        }
    }
public:
    vector<string> permutation(string S) {
        res.clear();
        dfs(S, 0);
        return res;
    }
};

class Solution3 {
    int length;
    public String[] permutation(String str) {
        if (null == str || "" == str) {
            return null;
        }
        final char[] element = str.toCharArray();
        this.length = element.length;
        final List<String> combina = combina(element);

        return combina.toArray(new String[combina.size()]);
    }
     public List<String> combina(char[] element) {
        int index = 0;
        List<String> sbList = new ArrayList<>();
        while (index < length) {
            if (element[index] == 0) {
                index++;
                continue;
            }
            final char temp = element[index];
            element[index] = 0;
            final List<String> combina = combina(element);
            int i = 0;
            if (combina.isEmpty()) {
                final StringBuilder sb = new StringBuilder();
                sb.append(temp);
                sbList.add(sb.toString());
            }else {
                for (String str : combina) {
                    final StringBuilder sb = new StringBuilder();
                    sb.append(temp);
                    sb.append(str);
                    sbList.add(sb.toString());
                }
            }


            element[index] = temp;
            index++;
        }
        return sbList;
    }
}

int main(){

}