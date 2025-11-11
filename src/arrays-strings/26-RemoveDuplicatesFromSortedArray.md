# 26. Remove Duplicates from Sorted Array

## 第一次提交:

问题:
- 排序写错,脑子是升序, 手写成降序


## 第二次提交:
```ts
function removeDuplicates(nums: number[]): number {
    const set = new Set();
    for(let i = 0 ; i < nums.length ; i++){
        if(set.has(nums[i])){
            nums[i] = 101
        }else{
            set.add(nums[i]);
        }
    }
    nums.sort((a,b)=>(a-b));26.
    return set.size;
};
```

问题:
- 无

分析:
- 时间复杂度: O(n log n)
- 空间复杂度: O(n)

## 第三次提交:

```ts
function removeDuplicates(nums: number[]): number {
    if(nums.length === 1){
        return 1;
    }
    let sI = 0, fI = 1, k = 1;
    while(true){
        if(nums[fI] === nums[sI]){
            fI++;
        }else{
            sI++;
            nums[sI] = nums[fI];
            k++;
        }
        if(fI === nums.length){
            break;
        }
    }
    return k
};
```

问题:
- 无

分析:
- 时间复杂度: O(n)
- 空间复杂度: O(1)
双指针在已经排序好的数组中,O(n)就能找到做去重