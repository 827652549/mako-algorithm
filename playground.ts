function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
      for (let j = 0; j < prices.length - i -1; j++) {
        maxProfit = Math.max(maxProfit, prices[i+j+1] - prices[i]);
      }
  }
  return maxProfit;
}