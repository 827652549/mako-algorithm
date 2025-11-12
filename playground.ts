/**
 Do not return anything, modify nums in-place instead.

 |
 输入: nums = [1,2,3,4,5,6,7], k = 3
 输出: [5,6,7,1,2,3,4]


 */
function rotate(nums: number[], k: number): void {
  const newArr = nums.slice(nums.length - k).concat(nums.slice(0, nums.length - k))
  for (let i = 0; i < nums.length; i++) {
    nums[i] = newArr[i]
  }
}

console.log(rotate([ 1, 2, 3, 4, 5, 6, 7 ],3))