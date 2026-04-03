// 📘 题目描述：
// 给定一个经过编码的字符串，返回其解码后的结果。编码规则为：k[encoded_string] 表示其中方括号内部的字符串重复 k 次。

// 💡 示例：
// 输入: "3[a2[c]]"
// 输出: "accaccacc"

// ⚙️ 测试用例：
// 1️⃣ "3[a2[c]]" → "accaccacc"
// 2️⃣ "2[ab]" → "abab"
// 3️⃣ "2[a3[b]]" → "abbbabbb"
// 4️⃣ "abc" → "abc"

// 1️⃣ "x3[a2[c]]" → "xaccaccacc"


function decode(str: string): string {
  if (str.indexOf('[') === -1) return str
  const m = Array.from(str.match(/^([a-z]*)(\d*)\[(.*)\]$/) || [])
  const prefix = m[1]
  const num = m[2] || '1'
  const subStr = m[3] || ''
  return prefix + decode(subStr).repeat(parseInt(num))
}


console.log(decode('3[a2[c]]'))
console.log(decode('2[ab]'))
console.log(decode("2[a3[b]]"))
console.log(decode('abc'))
// 1️⃣ "3[a2[c]]" → "accaccacc"
// 2️⃣ "2[ab]" → "abab"
// 3️⃣ "2[a3[b]]" → "abbbabbb"
// 4️⃣ "abc" → "abc"
