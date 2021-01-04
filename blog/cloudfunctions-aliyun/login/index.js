'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//the client param -- event
	console.log('event : ', event)
	const collection  = db.collection('uni-id-users')
	let user = await collection.where({
		username:event.username,
		password:event.password
	}).get()
	if(user.affectedDocs < 1){
		return {
			code: -1,
			msg:'wrong username or password'
		}
	}else {
		return {
			code:0,
			msg:'success'
		}
	}
};
