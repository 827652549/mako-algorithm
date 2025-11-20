# 1930 长度为 3 的不同回文子序列

## 第一次提交:
超时, 虽然思路正确, 但是没有用好小写字母的约束条件,和通过条件判断减少循环.

## 第二次提交:
```ts
function countPalindromicSubsequence(s: string): number {
    const setCurrHistory = new Set();
    const set = new Set();
    for (let i = 0; i < s.length; i++) {
        const charL = s[i];
        if (setCurrHistory.has(charL)) {
            continue;
        }
        for (let j = 0; j < s.length - i - 1; j++) {
            const charR = s[s.length - 1 - j];
            if (charL === charR) {
                let countSet = new Set()
                for (let z = 0; z < s.length - 1 - j - i - 1 && countSet.size < 26; z++) {
                    if(countSet.has(s[i + z + 1])){
                        continue;
                    }
                    console.log(charL + s[i + z + 1] + charR, i + '-' + (i + z + 1) + '-' + (s.length - 1 - j), countSet.size)
                    set.add(charL + s[i + z + 1] + charR)
                    setCurrHistory.add(charL)
                    countSet.add(s[i + z + 1]);
                }
                break;
            }
        }
    }
    //console.log(set)
    return set.size;
};
```
经验: 
- 