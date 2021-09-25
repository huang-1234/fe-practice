class Solution {
public:
    void sift_up(vector<vector<int>> &heap, int chlid){
        vector<int> val = heap[chlid];
        while (chlid >> 1 > 0 && val[1] < heap[chlid>>1][1]){
            heap[chlid] = heap[chlid>>1];
            chlid >>= 1;
          heap[chlid] = val;
        }
    }

    void sift_down(vector<vector<int>> &heap, int root, int k){
        vector<int> val = heap[root];
        while (root << 1 < k){
            int chlid = root << 1;
            // 注意这里位运算优先级要加括号
            if ((chlid|1) < k && heap[chlid|1][1] < heap[chlid][1]) chlid |= 1;
            if (heap[chlid][1] < val[1]){
                heap[root] = heap[chlid];
                root = chlid;
            }
            else break;
        }
        heap[root] = val;
    }

    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> stat;
        for (auto &num : nums) stat[num]++;
        vector<vector<int>> vec_stat;
        for (auto &item : stat) vec_stat.push_back({item.first, item.second});

        vector<vector<int>> heap;
        heap.push_back({0, 0});
        for (int i = 0; i < k; i++){
            heap.push_back(vec_stat[i]);
            sift_up(heap, heap.size()-1);
        }

        for (int i = k; i < vec_stat.size(); i++){
            if (vec_stat[i][1] > heap[1][1]){
                heap[1] = vec_stat[i];
                sift_down(heap, 1, k+1);
            }
        }

        vector<int> result;
        for (int i = 1; i < k+1; i++) result.push_back(heap[i][0]);
        return result;
    }
};