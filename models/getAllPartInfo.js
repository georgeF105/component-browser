var db = require('./db')

module.exports = function getAllPartInfo (id) {
  var partInfo = {}
  return Promise.all([
    db.part(id),
    db.subParts(id),
    db.parentParts(id)
  ])
    .then((dataArr) => {
      partInfo.part = Object.assign({}, dataArr[0][0])
      partInfo.subParts = dataArr[1]
      partInfo.parentParts = dataArr[2]
      return partInfo
    })
    .catch((err) => {
      console.log('Error at getAllPartInfo:', err)
    })
}
