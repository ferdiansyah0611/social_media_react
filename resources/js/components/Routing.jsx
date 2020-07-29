import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom'

import ForgetPassword from '../auth/ForgetPassword'
import Login from '../auth/Login'
import Register from '../auth/Register'
import VerifiedEmail from '../auth/VerifiedEmail'
import Home from './../page/Home'

const fakeAuth = {
  	isAuthenticated: false,
  	authenticate(cb){
  		if(window.localStorage.getItem('token')){
  			var token = window.localStorage.getItem('token')
  			fakeAuth.isAuthenticated = true
  		}
  	},
  	signout(cb){
  		if(window.localStorage.getItem('token')){
  			window.localStorage.removeItem('token')
  	  		fakeAuth.isAuthenticated = false;
  		}
  	}
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

class Routing extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<React.Fragment>
				<Router>
					<Switch>
						<Route path="/register">
							<Register />
						</Route>
						<Route path="/verified-email">
							<VerifiedEmail />
						</Route>
						<Route path="/forget-password">
							<ForgetPassword />
						</Route>
						<Route path="/">
							<Login />
						</Route>
						<PrivateRoute path="/admin">
							
						</PrivateRoute>
						<PrivateRoute path="/home">
							<Home />
						</PrivateRoute>
					</Switch>
				</Router>
			</React.Fragment>
		)
	}
}

export default Routing;

if (document.getElementById('app')) {
    ReactDOM.render(<Routing />, document.getElementById('app'));
}