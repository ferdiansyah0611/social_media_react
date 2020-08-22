const state = {
	user: JSON.parse(window.localStorage.getItem('user')),
	token: 'Bearer ' + window.localStorage.getItem('token')
}
export default state