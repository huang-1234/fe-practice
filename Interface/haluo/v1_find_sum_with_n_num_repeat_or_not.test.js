/**
 * @file dfs function unit tests
 * @description 测试深度优先搜索函数的各种场景
 */

// Mock全局变量
let target, targetIdx, arraySort, ans, is_should_repeat;

// 被测函数
function dfs(startIdx, sum, sumArr = []) {
  if (sum === target) {
    ans.push([...sumArr])
    return;
  }

  for (let i = startIdx; i < targetIdx; i++) {
    const currentEle = arraySort[i];
    // 剪枝
    if (sum + arraySort[i] > target) {
      break;
    }
    if (i > startIdx && arraySort[i] === arraySort[i - 1]) {
      continue;
    }
    // 添加当前数字
    sumArr.push(currentEle)
    const nextIdx = is_should_repeat ? i : i + 1
    dfs(nextIdx, sum + currentEle, sumArr)
    // 回溯、撤销选择
    sumArr.pop()
  }
}

describe('DFS Function Tests', () => {

  beforeEach(() => {
    // 每个测试前重置全局变量
    ans = [];
  });

  /**
   * @test 基础功能测试 - 找到目标和的组合
   * @description 测试正常情况下能否找到正确的组合
   */
  it('should find correct combinations when sum equals target', () => {
    target = 7;
    targetIdx = 4;
    arraySort = [2, 3, 6, 7];
    is_should_repeat = false;

    dfs(0, 0, []);

    expect(ans).toEqual([[2, 2, 3], [7]]);
  });

  /**
   * @test 无解情况测试
   * @description 当没有组合能满足目标值时，结果应为空
   */
  it('should return empty array when no valid combinations exist', () => {
    target = 1;
    targetIdx = 3;
    arraySort = [2, 3, 5];
    is_should_repeat = false;

    dfs(0, 0, []);

    expect(ans).toEqual([]);
  });

  /**
   * @test 剪枝功能测试
   * @description 测试当当前和超过目标值时能否正确剪枝
   */
  it('should prune branches when sum exceeds target', () => {
    target = 5;
    targetIdx = 4;
    arraySort = [2, 3, 6, 8]; // 6和8都大于5，应该被剪枝
    is_should_repeat = false;

    dfs(0, 0, []);

    expect(ans).toEqual([[2, 3]]);
  });

  /**
   * @test 重复元素去重测试
   * @description 测试相同元素的去重逻辑
   */
  it('should handle duplicate elements correctly', () => {
    target = 6;
    targetIdx = 5;
    arraySort = [1, 1, 2, 2, 3]; // 包含重复元素
    is_should_repeat = false;

    dfs(0, 0, []);

    // 验证不会产生重复的组合
    expect(ans).toEqual([[1, 1, 2, 2], [1, 2, 3], [2, 2, 2], [3, 3]]);
  });

  /**
   * @test 允许重复使用元素测试
   * @description 测试当允许重复使用元素时的逻辑
   */
  it('should allow element repetition when is_should_repeat is true', () => {
    target = 6;
    targetIdx = 3;
    arraySort = [2, 3, 5];
    is_should_repeat = true; // 允许重复使用

    dfs(0, 0, []);

    expect(ans).toEqual([[2, 2, 2], [3, 3]]);
  });

  /**
   * @test 不允许重复使用元素测试
   * @description 测试当不允许重复使用元素时的逻辑
   */
  it('should not allow element repetition when is_should_repeat is false', () => {
    target = 5;
    targetIdx = 3;
    arraySort = [1, 2, 3];
    is_should_repeat = false; // 不允许重复使用

    dfs(0, 0, []);

    expect(ans).toEqual([[2, 3]]);
  });

  /**
   * @test 边界值测试 - 目标值为0
   * @description 测试目标值为0的特殊情况
   */
  it('should handle target value of 0', () => {
    target = 0;
    targetIdx = 3;
    arraySort = [1, 2, 3];
    is_should_repeat = false;

    dfs(0, 0, []);

    // 当目标值为0且初始sum为0时，应该直接找到一个空组合
    expect(ans).toEqual([[]]);
  });

  /**
   * @test 起始索引测试
   * @description 测试不同的起始索引对结果的影响
   */
  it('should respect start index parameter', () => {
    target = 5;
    targetIdx = 4;
    arraySort = [1, 2, 3, 4];
    is_should_repeat = false;
    ans = [];

    // 从索引1开始，跳过第一个元素1
    dfs(1, 0, []);

    expect(ans).toEqual([[2, 3]]);
  });

  /**
   * @test 大数值测试
   * @description 测试处理较大数值的情况
   */
  it('should handle large numbers correctly', () => {
    target = 100;
    targetIdx = 4;
    arraySort = [25, 50, 75, 100];
    is_should_repeat = false;

    dfs(0, 0, []);

    expect(ans).toEqual([[25, 75], [100]]);
  });

  /**
   * @test 空数组测试
   * @description 测试输入数组为空的情况
   */
  it('should handle empty array case', () => {
    target = 5;
    targetIdx = 0;
    arraySort = [];
    is_should_repeat = false;

    dfs(0, 0, []);

    expect(ans).toEqual([]);
  });

  /**
   * @test 单元素数组测试
   * @description 测试只有一个元素的数组
   */
  it('should handle single element array', () => {
    target = 5;
    targetIdx = 1;
    arraySort = [5];
    is_should_repeat = false;

    dfs(0, 0, []);

    expect(ans).toEqual([[5]]);
  });

  /**
   * @test 回溯功能测试
   * @description 验证回溯操作是否正确执行
   */
  it('should properly backtrack and restore state', () => {
    target = 4;
    targetIdx = 3;
    arraySort = [1, 2, 3];
    is_should_repeat = false;

    const initialSumArr = [];
    dfs(0, 0, initialSumArr);

    // 验证回溯后原始数组未被污染
    expect(initialSumArr).toEqual([]);
  });
});