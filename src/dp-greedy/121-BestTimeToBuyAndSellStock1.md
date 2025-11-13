# 121 买卖股票的最佳时机 I

## 第一次提交

```ts
function maxProfit(prices: number[]): number {
  const set: Set<number> = new Set()
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if(prices[j] - prices[i] >= 0){
        set.add(prices[j] - prices[i])
      }
    }
  }
  if(set.size === 0){
    return 0
  }else{
    return [ ...set ].sort((a, b) => b - a)[0]
  }
}
```

问题:
- 对for循环内外理解不够深刻,`let i = 0`代表从哪开始,`i < nums.length`代表最后一位截止. 似乎不用考虑循环几遍
- O(n^2) 的 TC,在leetcode上会超出时间限制
- 起始对于最后那个取最大值,完全就可以用Math.min/max来解决.

## 第二次修改

```ts
function maxProfit(prices: number[]): number {
  let currMin = Number.MAX_VALUE
  let currMaxRange = Number.MIN_SAFE_INTEGER
  for (const price of prices) {
    if (price < currMin){
      currMin = price
    }
    if (price - currMin > currMaxRange){
      currMaxRange = price - currMin
    }
  }
  return currMaxRange;}
```

分析: 在ai引导下, 使用了贪心算法, TC:O(n), SC:O(1)
问题: 但是还不够优雅

## 第三次提交

```ts
function maxProfit(prices: number[]): number {
  if (prices.length < 2) return 0;
  let currMinPrice = prices[0];
  let currMaxRange = 0;
  for (const price of prices) {
    currMinPrice = Math.min(currMinPrice, price);
    currMaxRange = Math.max(currMaxRange, price - currMinPrice);
  }
  return currMaxRange;
}
```

分析:
- 比较并赋值,可以用Math.min/max
- 边界条件一定要反复确认一次, 必须脑子清楚, `if (prices.length < 2) return 0;`当时就又写错了;