const state = {
	user: JSON.parse(window.localStorage.getItem('user')),
	token: 'Bearer ' + window.localStorage.getItem('token'),
	pathImage: '/storage/image/',
	pathVideo: '/storage/video/'
}
export default state