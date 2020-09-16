import React from "react";
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import Auth from './Auth'
import Login from './auth/Login'
import Register from './auth/Register'
import ForgetPassword from './auth/ForgetPassword'
import VerifiedEmail from './auth/VerifiedEmail'
import Home from './../page/Home'
import Chatting from './../page/Chatting'
import Notification from './../page/Notification'
import FriendsRequest from './../page/FriendsRequest'
import ViewProfile from './../page/user/View'
import ViewPage from './../page/page/View'

function PrivateRoute({ children, ...rest }) {
    return (
        <Route {...rest} render={({ location }) =>
     	Auth.isAuthentication ? (
     	  	children
     	) : (
     	    <Redirect
     	        to={{
     	          	pathname: "/login",
     	          	state: { from: location }
     	        }}
     	    />
     	)
        }/>
   	);
}

class Routing extends React.Component {
    constructor(props) {
        super(props)
    }
    UNSAFE_componentWillMount() {
        let queryload = document.querySelector('#load');
        queryload.style.position = 'fixed';
        queryload.style.backgroundColor = 'whitesmoke';
        queryload.style.zIndex = '99999';
        queryload.style.top = '0';
        queryload.style.left = '0';
        queryload.style.width = '100%';
        queryload.style.height = '100%';
        queryload.style.fontSize = '18px';
        document.body.style.overflow = 'hidden';
    }
    componentDidMount() {
        let queryload = document.querySelector('#load');
        setTimeout(function(){
            queryload.setAttribute('style', 'visibility: hidden;display: none;');
            document.body.style.overflow = 'auto';
        }, 1000)
    }
    render() {
		Auth.check();
		return (
    		<Router>
      			<div>
      			  	<Switch>
                        <Route exact path="/" component={Login}></Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/forget-password">
                            <ForgetPassword />
                        </Route>
      			  	  	<PrivateRoute path="/home">
      			  	    	<Home />
      			  	  	</PrivateRoute>
                        <PrivateRoute path="/chatting">
                            <Chatting />
                        </PrivateRoute>
                        <PrivateRoute path="/notification">
                            <Notification />
                        </PrivateRoute>
                        <PrivateRoute path="/friends/request">
                            <FriendsRequest />
                        </PrivateRoute>
                        <PrivateRoute path="/profile/:id" component={ViewProfile}></PrivateRoute>
                        <PrivateRoute path="/pages/:name" component={ViewPage}></PrivateRoute>
      			  	</Switch>
      			</div>
    		</Router>
		)
	}
}

ReactDOM.render(
    <Routing />,
    document.getElementById('app')
);
