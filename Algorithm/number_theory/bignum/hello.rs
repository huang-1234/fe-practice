impl Solution {
    pub fn car_pooling(trips: Vec<Vec<i32>>, capacity: i32) -> bool {
        let mut d = vec![0; 1001]; // 创建差分数组（0~1000共1001个站点）
        for t in trips {
            let num = t[0];
            // 将上车地点转换为 usize（确保索引类型正确）
            let from = t[1] as usize; // 主要修正点
            let to = t[2] as usize; // 这里已经正确使用了 usize
            d[from] += num; // 在from站点上车
            d[to] -= num; // 在to站点下车（离开）
        }

        let mut current_passengers = 0; // 当前车上乘客数
        for &count in d.iter() {
            // 遍历所有站点
            current_passengers += count;
            // 超载检查
            if current_passengers > capacity {
                return false;
            }
        }
        true
    }
}
fn main() {
    let solution = Solution::new();
    println!("Hello, world!", solution.carPooling(vec![[2,1,5],[3,3,7]], 4));
}
