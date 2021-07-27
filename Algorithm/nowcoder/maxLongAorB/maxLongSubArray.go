package main

/**
 *
 * @param arr int整型一维数组 the array
 * @return int整型
*/
func maxLength( arr []int ) int {
    // write code here
    res := 0
    s := make([]int, 100010)
    j := 0
    for i := 0; i < len(arr); i ++ {
        s[arr[i]] ++
        for j <= i && s[arr[i]] > 1 {
            s[arr[j]] --
            j ++
        }
        if i - j + 1 > res {
            res = i - j + 1;
        }
    }
    return res
}