/*
 * @lc app=leetcode.cn id=223 lang=go
 *
 * [223] 矩形面积
 */

// @lc code=start
/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */

 func max(x1 int, x2 int) int{
  if x1 > x2 {
		return x1
	}
  return x2;
}
func min(x1 int, x2 int) int{
  if x1 < x2 {
		return x1;
	}
  return x2;
}
func computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2 int) int {
	area1 := (ax2 - ax1) * (ay2 - ay1)
	area2 := (bx2 - bx1) * (by2 - by1)
	overlapWidth := min(ax2, bx2) - max(ax1, bx1)
	overlapHeight := min(ay2, by2) - max(ay1, by1)
	overlapArea := max(overlapWidth, 0) * max(overlapHeight, 0)
	return area1 + area2 - overlapArea
}
// func computeArea(ax1 int, ay1 int, ax2 int, ay2 int, bx1 int, by1 int, bx2 int, by2 int) int {
//   area1 := (ax2 - ax1)*(ay2-ay1);
//   area2 := (bx2 - bx1)*(by2-by1);
//   cha := 0;
//   res := 0;
//   if by2 > ay1 && ax2 > bx1 {
//     cha = (min(ay2,by2) - max(ay1,by1)) * ( min(ax2,bx2) - max(ax1,bx1) )
//     res = area1 + area2 - cha;
//   }else if ay2 >= by2 && ay1 <= by1 && ax2 >= bx2 && ax1 <= bx1 {
//     res = area2;
//   }else if ay2 <= ay2 && ay1 >= by1 && ax2 <= bx2 && ax1 >= bx1 {
//     res = area1;
//   }
// 	res = area1 + area2
//   return res;
// }

// @lc code=end

