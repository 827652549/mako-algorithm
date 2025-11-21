# 55 跳跃游戏

## 第一次提交:
```ts
function canJump(nums: number[]): boolean {
  const resultArr = Array(nums.length).fill(null)
  resultArr[0] = true;
  for(let i = 0 ; i < nums.length && resultArr[i] === true; i++){
    const currE = nums[i];
    for(let j = 0 ; j <  currE; j ++){
      if(i+j+1 < nums.length){
        resultArr[i+j+1] = true;
      }
    }
  }
  return !!resultArr[nums.length-1]

};

console.log(canJump([2,3,1,1,4]))
```

通过将能通过的路线,存到数组中,最后看最后一位是否是可通过状态, O(n^2)

## 第二次提交
动态规划
```ts
function canJump(nums: number[]): boolean {
    const dp = []
    dp[0] = nums[0]
    for(let i = 1 ; i< nums.length ; i ++){
        if(dp[i - 1] < i){
            return false
        }
        dp[i] = Math.max(dp[i - 1], i + nums[i])
    }
    return true
};
```

`dp[i]`代表每一位能达到的最大位置, TC: O(n), SC:O(n)

## 第三次提交
动态规划+空间压缩

```ts
function canJump(nums: number[]): boolean {
    let k = nums[0]
    for(let i = 1 ; i< nums.length ; i ++){
        if(k < i){
            return false
        }
        k = Math.max(k, i + nums[i])
    }
    return true
};
```

转移方程里如果不用到历史变量, 只用`dp[i-1]` 固定个数到变量,则可以空间压缩,