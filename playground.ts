// Promise.all()// 所有成功算成功, 任意失败直接失败
// Promise.allSettled()// 只看结果, 收集所有成功和失败结束后的结果
// Promise.any()// 除非全部失败, 否在返回最快的成功的
// Promise.race()// 返回最快的那个, 可以成功或失败
//


function myAny(ps: Promise<unknown>[]) {
  const reasonArr = Array(ps.length)
  let count = 0
  return new Promise((resolve, reject) => {
    if (ps.length === 0) reject(new AggregateError([]))
    for (let i = 0; i < ps.length; i++) {
      ps[i].then(value => {
        resolve(value)
      }).catch(reason => {
        reasonArr[i] = reason
        count++
        if (count === ps.length) {
          reject(new AggregateError(reasonArr))
        }
      })
    }
  })
}
//
myAny(Array(5).fill(Promise.reject(23))).catch(r=>{
  console.log(r)
})
