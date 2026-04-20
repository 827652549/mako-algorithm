/** * 实现一个数组去重函数 unique
 * * * @example
 *  * [1,'1',1] -> [1,'1']
 * * [{a: 1}, {b: 1}, {a: 1}] -> [{a: 1}, {b: 1}]
 *  * [{a: 1, b: 2}, {b: 1}, {a: 1, b: 2}] -> [{a: 1, b: 2}, {b: 1}]
 * * [[1, {a: 1}], [2], [3], [1, {a: 1}]] -> [[1, {a: 1}], [2], [3]]
 * * [[1, {a: 1, b: 2}], [2], [3], [1, {b:2 ,a: 1}]] -> [[1, {a: 1, b: 2}], [2],
 */
type Base = number | string | Record<string, number>

function unique(arr: any[]) {
  const seen = new Set<string>()
  return arr.filter(e => {
    const key = _stand(e)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  function _stand(e: any): string {
    if (Array.isArray(e)) {
      return '[' + e.map(item => _stand(item)).join(',') + ']'
    } else if (e !== null && typeof e === 'object') {
      const entries = Object.keys(e).sort().map(k => `${JSON.stringify(k)}:${_stand(e[k])}`)
      return '{' + entries.join(',') + '}'
    } else {
      return JSON.stringify(e)
    }
  }
}

const tests = [
  { input: [ 1, '1', 1 ], expected: [ 1, '1' ] },
  { input: [ { a: 1 }, { b: 1 }, { a: 1 } ], expected: [ { a: 1 }, { b: 1 } ] },
  { input: [ { a: 1, b: 2 }, { b: 1 }, { a: 1, b: 2 } ], expected: [ { a: 1, b: 2 }, { b: 1 } ] },
  { input: [ [ 1, { a: 1 } ], [ 2 ], [ 3 ], [ 1, { a: 1 } ] ], expected: [ [ 1, { a: 1 } ], [ 2 ], [ 3 ] ] },
  {
    input: [ [ 1, { a: 1, b: 2 } ], [ 2 ], [ 3 ], [ 1, { b: 2, a: 1 } ] ],
    expected: [ [ 1, { a: 1, b: 2 } ], [ 2 ], [ 3 ] ],
  },
]

tests.forEach(({ input, expected }, i) => {
  const result = unique(input)
  console.log(`Test ${ i + 1 }:`, JSON.stringify(result) === JSON.stringify(expected) ? 'PASS' : 'FAIL')
})