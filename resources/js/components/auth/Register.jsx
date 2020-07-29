import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class Register extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name : '',
			email : '',
			password : '',
			passwordconfirmed : '',
			born : '',
			gender : '',
			location : ''
		}
		this.registerRequest = this.registerRequest.bind(this)
		this.registerChange = this.registerChange.bind(this)
	}
	registerChange(event){
		this.setState({[event.target.name]: event.target.value})
	}
	async registerRequest(event, $url = '/api/register', $method = 'post'){
		event.preventDefault()
		await axios({
			url : $url,
			method : $method,
			data : {
				email : this.state.email,
				password : this.state.password,
				born : this.state.born,
				gender : this.state.gender,
				location : this.state.location
			}
		}).then(result => {
			console.log(result.data)
		}).catch(error => {
			console.error(error.message)
		})
	}
	render(){
		return (
			<div className="container mt-3 mb-3">
				<div className="col-md-6 offset-sm-0 offset-md-3">
					<div className="card shadow">
						<div className="card-body">
							<h5 className="text-center font-weight-bold mb-4">Register Account</h5>
							<form>
								<div className="form-group">
									<label for="name">Name</label>
									<input onChange={this.registerChange} type="text" name="name" className="form-control" placeholder="Name" aria-label="username" minlength="3" maxlength="20" required/>
								</div>
								<div className="form-group">
									<label for="email">Email</label>
									<input onChange={this.registerChange} type="email" name="email" className="form-control" placeholder="Email" aria-label="email" minlength="3" maxlength="20" required/>
								</div>
								<div className="form-group">
									<label for="password">Password</label>
									<input onChange={this.registerChange} type="password" name="password" className="form-control" placeholder="Password" aria-label="password" minlength="8" maxlength="20" autocomplete="off" required/>
								</div>
								<div className="form-group">
									<label for="verified-password">Verified Password</label>
									<input onChange={this.registerChange} type="password" name="passwordconfirmed" className="form-control" placeholder="Verified Password" aria-label="password-confirmed" minlength="8" maxlength="20" autocomplete="off" required/>
								</div>
								<div className="form-group">
									<label for="born">Born</label>
									<input onChange={this.registerChange} type="date" name="born" className="form-control" aria-label="born" value="2002/09/20" required/>
								</div>
								<div className="form-group">
									<label for="gender">Gender</label>
									<select onChange={this.registerChange} name="gender" className="form-control">
										<option>Select gender</option>
										<option value="male">Male</option>
										<option value="female">Female</option>
									</select>
								</div>
								<div className="form-group">
									<label for="location">Location</label>
									<input onChange={this.registerChange} type="text" name="location" className="form-control" placeholder="Location" aria-label="location" minlength="3" maxlength="50" required/>
								</div>
								<button type="submit" className="btn btn-primary w-100">Register</button>
								<p className="mt-3 mb-1 text-center">Have a account ? <a href="#" className="text-decoration-none">Login</a></p>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Register;