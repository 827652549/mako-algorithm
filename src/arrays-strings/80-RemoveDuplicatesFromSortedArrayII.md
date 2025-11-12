# 80. 删除有序数组中的重复项 II

## 第一次提交:
问题:
失败, 上来尝试用双指针写法,思路不清晰的基础上还写错了
## 第二次提交:
```ts
function removeDuplicates(nums: number[]): number {
    const map = new Map();
    nums.forEach(e => {
        if (!map.has(e)) {
            map.set(e, 0)
        }
        if (map.has(e) && map.get(e) < 2) {
            map.set(e, map.get(e) + 1);
        }
    })
    const arr = []
    Array.from(map.entries()).forEach(([k, v]) => {
        for (let i = 0; i < v; i++) {
            arr.push(k as unknown as never)
        }
    })
    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i];
    }    
    return arr.length;
};
console.log(removeDuplicates([1,1,2,2,9,3]))
```

问题: 
- nums = arr改变了引用, 导致判题失败
- 时间复杂度O(n), 空间复杂度O(n), 虽然AC,但是不符合题意in-place和O(1)的要求

## 第三次提交:

```typescript
function removeDuplicates(nums: number[]): number {
    function removeDuplicates(nums: number[]): number {
    if(nums.length <= 2){
        return 2;
    }
    let sI = 2, fI = 2;

    while(fI < nums.length){
        if(nums[sI - 2] === nums[fI]){
            fI++;
        }else{
            nums[sI] = nums[fI]
            sI++;
            fI++;
        }
    }
    return sI;
}
}
```
分析:
时间复杂度: O(n), 空间复杂度: O(1)