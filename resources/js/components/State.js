const state = {
	user: JSON.parse(window.localStorage.getItem('user')),
	token: window.localStorage.getItem('token')
}
export default state