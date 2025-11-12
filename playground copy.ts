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
    // 直接修改原数组，而不是重新赋值引用
    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i];
    }
    console.log(nums);
    
    return arr.length;
};
// [0,0,1,1,1,1,2,3,3]

console.log(removeDuplicates([1,1,1,2,2,3]))



function removeDuplicates2(nums: number[]): number {
    const map: Map<number, number> = new Map
    nums.forEach(e=>{
        let currValue = map.get(e)
        if(currValue === undefined){
            map.set(e,1)
        }else{
            map.set(e,currValue + 1)
        } 
    })
    console.log(map)
    let total = 0
    let newArr:Array<number> = []
    map.forEach((v,k)=>{
        if(v>=2){
            total+=2
            newArr = newArr.concat([k,k])
        }else {
            total++
            newArr = newArr.concat([k])
        }
    })
    newArr.forEach((e,i)=>{
        nums[i] = e
    })
    return total
};