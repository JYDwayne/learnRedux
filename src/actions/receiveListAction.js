export const RECEIVE_LIST = 'RECEIVE_LIST';

export receiveList = function (data) {
	return {
		type: RECEIVE_LIST,
		data: data
	}
}