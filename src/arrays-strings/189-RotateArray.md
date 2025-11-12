# 189 Rotate Array

## 第一次提交

```ts
function rotate(nums: number[], k: number): void {
  const nK = k % nums.length;
  const newArr = nums.slice(nums.length - nK).concat(nums.slice(0, nums.length - nK))
  for (let i = 0; i < nums.length; i++) {
    nums[i] = newArr[i]
  }
}
```

问题:
- 过于相信tab补全,初始值错了都没注意到
- 没有考虑数组越界的情况, 需要k % nums.length

时间复杂度: O(n)
空间复杂度: O(n)

## 第二次提交
```ts

```

时间复杂度: 
空间负责度: 
