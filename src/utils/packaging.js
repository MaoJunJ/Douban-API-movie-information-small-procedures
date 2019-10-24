// 封装的接口
function universalInterface(obj) {
  var p = new Promise((resolve, reject) => {
    wx.request({
      url: obj.url,
      method: obj.method || "get",
      data: obj.data || {},
      header: obj.header || {},
      success: res => {
        resolve(res);
      },
      fail: err => {
        reject(err);
      }
    })
  })
  return p
}

// 暴露
export default universalInterface;