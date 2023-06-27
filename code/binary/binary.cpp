int findLeft(vector<int>& nums, int target){
    int lo = 0, hi = nums.size() - 1;
    while(lo <= hi){
        int mid = lo + (hi - lo) / 2;
        if(nums[mid] == target)
            hi = mid - 1; //注意
        else if(nums[mid] > target)
            hi = mid - 1;
        else if(nums[mid] < target)
            lo = mid + 1;
    }

    if(lo >= nums.size() || nums[lo] != target) return -1;  //lo可能在合法区间之外（当任意nums[i] < target 均成立时），也可能nums数组中不存在target。
    return lo;
}

int findRight(vector<int>& nums, int target){
    int lo = 0, hi = nums.size() - 1;
    while(lo <= hi){
        int mid = lo + (hi - lo) / 2;
        if(nums[mid] == target)
            lo = mid + 1;
        else if(nums[mid] > target)
            hi = mid - 1;
        else if(nums[mid] < target)
            lo = mid + 1;
    }

    if(hi < 0 || nums[hi] != target) return -1;
    return hi;
}
