class Solution {
public:
    int threeMidIndex(vector<int>& nums,int l,int r){
        if(l+1>=r){
            return l;
        }
        int mid=(l+r)/2;
        if(to_string(nums[l])+to_string(nums[mid])>to_string(nums[mid])+to_string(nums[l])){
            swap(nums[l],nums[mid]);
        }
        if(to_string(nums[l])+to_string(nums[r])>to_string(nums[r])+to_string(nums[l])){
            swap(nums[l],nums[r]);
        }
        if(to_string(nums[mid])+to_string(nums[r])>to_string(nums[mid])+to_string(nums[r])){
            swap(nums[mid],nums[r]);
        }
        return mid;
    }
    void quickSort(vector<int>& nums,int l,int r){
        if(l>=r){
            return;
        }
        swap(nums[l],nums[threeMidIndex(nums,l,r)]);
        int i=l,j=r;
        while(i<j){
            while(i<j&&to_string(nums[j])+to_string(nums[l])<=to_string(nums[l])+to_string(nums[j])){ --j; }
            while(i<j&&to_string(nums[i])+to_string(nums[l])>=to_string(nums[l])+to_string(nums[i])){ ++i; }
            swap(nums[i],nums[j]);
        }
        swap(nums[i],nums[l]);
        quickSort(nums,l,i-1);
        quickSort(nums,i+1,r);
    }
    string largestNumber(vector<int>& nums) {
        if(nums.size()<1){
            return "";
        }
        quickSort(nums, 0, nums.size()-1);
        string ans="";
        if(!nums[0]){
            return "0";
        }
        for(auto n:nums){
            ans+=to_string(n);
        }
        return ans;
    }
};