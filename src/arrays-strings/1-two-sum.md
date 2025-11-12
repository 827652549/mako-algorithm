# 1.两数之和

## 第一次提交:
```ts
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        const copyArr = JSON.parse(JSON.stringify(nums));
        const tempA = copyArr[i]
        copyArr[i] = NaN
        for (let j = 0; j < nums.length; j++) {
            if (Number.isNaN(nums[j]) || j === i) {
                continue;
            }
            if (tempA + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
```
问题:
- 超出时间限制, 偶现
- 最后没有返回值, ts校验失败

分析:

### 为什么超出时间限制？

**主要原因：`JSON.parse(JSON.stringify(nums))` 在循环中执行**

1. **性能瓶颈：**
   - `JSON.stringify(nums)` 需要遍历整个数组并序列化为字符串，时间复杂度 O(n)
   - `JSON.parse()` 需要解析字符串并重建数组，时间复杂度 O(n)
   - 这两个操作在外层循环的**每次迭代**中都会执行
   - 虽然理论时间复杂度是 O(n²)，但常数因子**非常大**（序列化和反序列化非常慢）

2. **具体影响：**
   - 对于长度为 n 的数组，会执行 n 次深拷贝
   - 每次深拷贝需要 O(n) 时间
   - 总时间 ≈ n × n × (序列化开销 + 反序列化开销)
   - 当 n 较大时（如 10^4），这个开销会非常大

3. **逻辑问题：**
   - `copyArr[i] = NaN` 后，内层循环检查 `Number.isNaN(nums[j])` 没有意义（`nums[j]` 未被修改）
   - 应该直接检查 `j === i` 来跳过当前元素
   - 内层循环应该从 `i+1` 开始，避免重复检查

### 什么时候需要考虑超出时间限制？

1. **时间复杂度分析：**
   - LeetCode 通常限制时间在 1-2 秒内
   - 对于 O(n²) 算法，当 n > 10^4 时容易超时
   - 对于 O(n³) 算法，当 n > 500 时容易超时

2. **常见超时场景：**
   - 嵌套循环过多
   - 在循环中执行昂贵操作（如深拷贝、排序、字符串操作）
   - 递归没有记忆化（重复计算）
   - 使用低效的数据结构（如数组查找代替哈希表）

3. **优化思路：**
   - 使用哈希表（Map/Set）将查找从 O(n) 降到 O(1)
   - 避免在循环中进行深拷贝
   - 使用双指针技巧减少循环次数
   - 使用动态规划避免重复计算

### 优化后的代码：

**方法1：暴力法（优化版）**
```ts
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return []; // 确保有返回值
}
```
TC: O(n²), SC: O(1)

**方法2：哈希表（推荐）**
```ts
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
    }
    return [];
}
```
TC: O(n), SC: O(n)