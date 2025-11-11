function threeSum(nums) {
    var arrTotal = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            for (var x = j + 1; x < nums.length; x++) {
                if (nums[i] + nums[j] + nums[x] === 0) {
                    arrTotal.push([i, j, x]);
                }
            }
        }
    }
    return arrTotal;
}
;
//输入：nums = [-1,0,1,2,-1,-4]
//输出：[[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
