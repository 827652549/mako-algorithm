function removeDuplicates(nums: number[]): number {
    if (nums.length === 1) return 1;
    if (nums.length === 2) return 2;

    let sI = 0, fI = 1;
    let flag = true;
    while (true) {
        console.log(fI);
        
        if(fI === nums.length){
            break;
        }
    
        if (nums[sI] === nums[fI]) {
            if (flag) {
                fI++;
                sI++;
                flag = false;
                continue;
            } else {
                nums[fI] = 99999
                flag = true;
                fI++;
                sI++
                continue;
            }

        }else{
            if (nums[sI] === 99999) {
                nums[sI] = nums[fI]
                nums[fI] === 99999;
                fI++;
                sI++;
                flag = false;
                continue;
            }
        }
    }
    return sI;
};

// [0,0,1,1,1,1,2,3,3]

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));