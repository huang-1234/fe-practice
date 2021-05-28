var maxUncrossedLines = function(nums1, nums2) {
    const len1 = nums1.length,len2=nums2.length;
    if(len1<1 || len2<1) return 0;
    const dp = new Array(len1+1).fill(0).map(()=>new Array(len2+1));
    let Max=0;
    for(let i=0;i<=len1;++i){
        let num1 = nums1[i];
        for(let j=0;j<=len2;++j){
            const num2 = nums2[j];
            if(num1===num2){
                dp[i+1][j+1] = dp[i][j] + 1;
            }else{
                dp[i+1][j+1] = Math.max(dp[i][j+1],dp[i+1][j]);
            }
        }
    }
    return dp[len1][len2];
};
const num1 = [2,1];
const num2 = [1,2,1,3,3,2];
let out = maxUncrossedLines(num1, num2)