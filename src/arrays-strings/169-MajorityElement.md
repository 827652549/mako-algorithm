# 169 多数元素

## 第一次提交

```ts
function majorityElement(nums: number[]): number {
  const map: Map<number, number> = new Map()
  let currMaxK: number = NaN
  let currMaxV: number = Number.MIN_SAFE_INTEGER
  nums.forEach(e => {
    if (!map.has(e)) {
      map.set(e, 0)
    }
    const nextV = map.get(e) ?? 1
    if (nextV > currMaxV) {
      currMaxV = nextV
      currMaxK = e
    }
    map.set(e, nextV)
  })

  return currMaxK
}

```

问题:
- 要注意初始化和赋值问题,虽然在题目中不影响,但是要养成好习惯.

时间复杂度: O(n)
空间负责度: O(n)

## 第二次提交

```ts
function majorityElement(nums: number[]): number {
  if (nums.length <= 2) return nums[0]
  let candidate = NaN, count = 0
  for (const e of nums) {
    if (count === 0) {
      candidate = e
    }

    if (e === candidate) {
      count++
    } else {
      count--
    }
  }
  return candidate
}
```

分析:
- 多数投票算法, O(1)空间复杂度, 非常妙.利用了数学原理: 多数元素的数量超过数组长度的一半, 互相抵消后留下的就是最大的.
- 不过条件比较苛刻, 作了解

TC:O(n)
SC:O(1)