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
import Notification from './../page/Notification'
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
                        <PrivateRoute path="/profile/:id" component={ViewProfile}></PrivateRoute>
                        <PrivateRoute path="/profile/:name" component={ViewPage}></PrivateRoute>
                        <PrivateRoute path="/notification">
                            <Notification />
                        </PrivateRoute>
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
