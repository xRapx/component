import * as request from '../axios/axiosRequest';

export const search = async (q, type = 'any') =>{
	try {
		const res = await request.get('exam path/...', {
			params:{
				q,
				type,
			},
		});
			return res.data;
	} catch (error) {
		console.log(error);
	}
}