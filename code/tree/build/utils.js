
function initMap(nums) {
  const valToIndex = new Map();
  const len = nums.length;
  for (let i = 0;i < len;i++) {
    valToIndex.set(nums[i], i);
  }
  return valToIndex;
}

module.exports = {
  initMap
}