// 输入：[7,1,5,3,6,4]
// 输出：5
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

console.log(maxProfit([ 7, 1, 5, 3, 6, 4 ]))
console.log(maxProfit([ 7, 6, 4, 3, 1 ]))
console.log(maxProfit([ 1, 2 ]))