# 爬楼梯

## 第一次

```ts
function climbStairs(n: number): number {
  if (n === 2) return 2;
  if (n === 1) return 1;
  return climbStairs(n - 2) + climbStairs(n - 1)
};
```

分析: TC:O(2^n),动态规划经典题型, 想尽办法避免递归树里的重复计算而不占用外层作用域的空间

## 第二次

```ts
function climbStairs(n: number): number {
  const f = []
  f[1] = 1;
  f[2] = 2;
  for (let i = 3; i <= n; i++) {
    f[i] = f[i-1] + f[i-2];
  }
  return f[n]
};
```

分析: 如何想起来转移方程是关键.