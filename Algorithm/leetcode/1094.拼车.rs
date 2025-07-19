/*
 * @lc app=leetcode.cn id=1094 lang=rust
 *
 * [1094] 拼车
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
impl Solution {
    pub fn car_pooling(trips: Vec<Vec<i32>>, capacity: i32) -> bool {
        let mut d = vec![0; 1001];
        for t in trips {
            let num = t[0];
            let from = t[1] as usize;
            let to = t[2] as usize;
            d[from] += num;
            d[to] -= num;
        }

        let mut s = 0;
        for v in d {
            s += v;
            if s > capacity {
                return false;
            }
        }
        true
    }
}

// @lc code=end
