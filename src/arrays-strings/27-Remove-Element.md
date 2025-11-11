# 27. Remove Element

## 第一次提交:

问题:
- 读题粗心, k的含义理解错误

## 第二次提交:
```ts
function removeElement(nums: number[], val: number): number {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums[i] = -1
        } else{
            k++;
        }
    }
    nums.sort((a, b) => (b - a))
    return k;
};
```
问题:
- 无

分析:
- 时间复杂度: O(n log n)
- 空间复杂度: O(1)