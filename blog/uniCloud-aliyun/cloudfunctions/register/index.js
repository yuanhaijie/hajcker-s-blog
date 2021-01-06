'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const collection = db.collection('uni-id-users')
	let res = await collection.add({
		username: event.username,
		password: event.password,
		gender: event.gender,
		avatar: event.avatar
	})
	//返回数据给客户端
	return res
};
