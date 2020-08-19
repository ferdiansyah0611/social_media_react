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
        /*function AuthButton() {
            let history = useHistory();
            return Auth.isAuthentication ? (
                <p>Welcome!{" "}
                	<button onClick={() => {Auth.logout(() => history.push("/"));}}>Sign out</button>
    			</p>
            ) : (
                <p>You are not logged in.</p>
            );
        }
		function PublicPage() {
		    return <h3>Public</h3>;
		}*/
		Auth.check();
		return (
    		<Router>
      			<div>
      			  	{/*<AuthButton />
      			  	<ul>
      			  	  	<li>
      			  	  	  	<Link to="/public">Public Page</Link>
      			  	  	</li>
      			  	  	<li>
      			  	  	  	<Link to="/protected">Protected Page</Link>
      			  	  	</li>
      			  	</ul>*/}
      			  	<Switch>
      			  	  	{/*<Route path="/public">
      			  	    	<PublicPage />
      			  	  	</Route>*/}
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
      			  	  	{/*<PrivateRoute path="/protected">
      			  	    	<Home />
      			  	  	</PrivateRoute>*/}
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
