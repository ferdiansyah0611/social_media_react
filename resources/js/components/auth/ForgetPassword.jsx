import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class ForgetPassword extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			email : ''
		}
		this.forgetPasswordRequest = this.forgetPasswordRequest.bind(this)
		this.forgetPasswordChange = this.forgetPasswordChange.bind(this)
	}
	forgetPasswordChange(event){
		this.setState({[event.target.name]: event.target.value})
	}
	async forgetPasswordRequest(event, $url = '/api/register', $method = 'post'){
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
			<div className="container mt-5 mb-3">
				<div className="col-md-6 offset-sm-0 offset-md-3">
					<div className="card shadow">
						<div className="card-body">
							<h5 className="text-center font-weight-bold mb-4">Forget Password</h5>
							<form>
								<div className="form-group">
									<input onChange={this.forgetPasswordChange} type="email" name="email" className="form-control" placeholder="Email" aria-label="email" minlength="3" maxlength="20" required/>
								</div>
								<button type="submit" className="btn btn-primary w-100">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ForgetPassword;