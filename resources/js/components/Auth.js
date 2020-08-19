const Auth = {
    isAuthentication: false,
    login(cb) {
        if(window.localStorage.getItem('token')){
        	Auth.isAuthentication = true;
        }
        setTimeout(cb, 100);
    },
    check(){
    	if(window.localStorage.getItem('token')){
    		Auth.isAuthentication = true;
    	}
    },
    logout(cb) {
        Auth.isAuthentication = false;
        setTimeout(cb, 100);
    }
};
export default Auth;