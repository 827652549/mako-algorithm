# 88. Merge Sorted Array

## 第一次提交:
```ts
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for(let i = m ; i < m+n ; i ++){
        nums1[i]= nums2[i - m];
    }
    nums1.sort((a,b)=>a-b)
};
```

问题:
- 在没有IDE的编辑器中,变量写错

分析:
- 时间复杂度: O(n log n)
- 空间复杂度: O(1)