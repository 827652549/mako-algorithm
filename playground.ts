/*
async function getImage(url)实现获取图片url宽高的函数,
return {img:’blob img url’,width,height}
*/

async function getImage(url) {
  const blob = await fetch(url).then(v => v.blob())
  const blobUrl = URL.createObjectURL(blob)

  const { width, height } = await new Promise<{ width: number; height: number }>((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight })
    }
    img.onerror = reject
    img.src = blobUrl
  })

  return {
    img: blobUrl, width, height, cleanFn: () => {
      URL.revokeObjectURL(blobUrl)
    },
  }

}

getImage('https://pub-9e42f90c779f49ff9903aa25b31045cc.r2.dev/images/2025/11/19/ws2_1763562456785_vs48aq3o6h.png').then(console.log)