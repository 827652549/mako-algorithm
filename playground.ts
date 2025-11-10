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
                return [tempA, nums[j]]
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))