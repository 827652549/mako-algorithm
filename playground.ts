function myNew(fn: Function, ...args: any[]) {
  const obj = Object.create(fn.prototype)

  const r = fn.call(obj, ...args)
  if ((typeof r === 'object' && r !== null) || typeof r === 'function') {
    return r
  }
  return obj
}

function myInstanceof(target: object | null, fn: Function): boolean {
  let proto = target
  while (proto !== null) {
    if (proto === fn.prototype) return true
    proto = Reflect.getPrototypeOf(proto)
  }
  return false
}
