function threeSum(nums: number[]): number[][] {
    const arrTotal: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let x = j + 1; x < nums.length; x++) {
                if (nums[i] + nums[j] + nums[x] === 0) {
                    arrTotal.push([nums[i], nums[j], nums[x]]);
                }
            }
        }

    }
    const set = new Set<string>()
    arrTotal.forEach(element => {
        set.add(element.sort((a, b) => a - b).join('@'));
    });
    return [...set].map((e: string) => e.split('@').map(e => parseInt(e, 10)));
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
