import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class Login extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			email : '',
			password : ''
		}
		this.loginRequest = this.loginRequest.bind(this)
		this.loginChange = this.loginChange.bind(this)
	}
	componentDidMount(){}
	loginChange(event){
		this.setState({[event.target.name]: event.target.value})
	}
	async loginRequest(event, $url = '/api/login', $method = 'post'){
		event.preventDefault()
		await axios({
			url : $url,
			method : $method,
			data : {
				email : this.state.email,
				password : this.state.password
			}
		}).then(result => {
			console.log(result.data)
		}).catch(error => {
			console.error(error.message)
		})
	}
	render(){
		return (
			<div className="container mt-5">
				<div className="col-md-6 offset-sm-0 offset-md-3">
					<div className="card shadow">
						<div className="card-body">
							<h5 className="text-center font-weight-bold mb-4">Login to Social Media</h5>
							<form onSubmit={this.loginRequest}>
								<div className="form-group">
									<input onChange={this.loginChange} type="text" name="name" className="form-control" placeholder="Name" aria-label="username" minlength="3" maxlength="20" required/>
								</div>
								<div className="form-group">
									<input onChange={this.loginChange} type="password" name="password" className="form-control" placeholder="Password" aria-label="password" minlength="8" maxlength="20" autocomplete="off" required/>
								</div>
								<button type="submit" className="btn btn-primary w-100">Login</button>
								<p className="text-center mb-1 mt-1">Or with</p>
								<div className="text-center">
									
								<button type="button" className="btn btn-primary mt-2"><i className="fab fa-facebook-square"></i> <span className="font-weight-bold">Facebook</span></button>
								<button type="button" className="btn btn-info mt-2"><i className="fab fa-twitter-square"></i> <span className="font-weight-bold">Twitter</span></button>
								</div>
								<p className="mt-3 mb-1 text-center">Dont have a account ? <a href="#" className="text-decoration-none">Register</a></p>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;