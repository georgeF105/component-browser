var db = require('./db')

module.exports = function getAllPartInfo (id) {
	let partInfo = {}
	return Promise.all([
		db.part(id),
		db.subParts(id),
		db.parentParts(id)
	])
		.then((dataArr) => {
			partInfo.part = Object.assign({}, dataArr[0][0])
			partInfo.subParts = Object.assign({}, dataArr[1])
			partInfo.parentParts = Object.assign({}, dataArr[2])
			return partInfo
		})
		.catch((err) => {
			console.log('Error at getAllPartInfo:', error)
		})
}