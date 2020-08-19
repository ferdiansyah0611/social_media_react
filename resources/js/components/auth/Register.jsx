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
		this.inputChange = this.inputChange.bind(this);
	}
	inputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
	componentDidMount(){
		document.title = 'Register social media'
        document.body.classList.add('bg-primary');
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
			<div className="container mt-5 mb-3">
				<div className="col-md-6 offset-sm-0 offset-md-3">
					<div className="card shadow">
						<div className="card-body">
							<h5 className="text-center font-weight-bold mb-4">Register Account</h5>
							<form onSubmit={this.registerRequest}>
								<div className="row">
									<div className="col">
										<input onChange={this.inputChange} type="text" name="name" className="form-control" placeholder="Name" aria-label="username" minLength="3" maxLength="20" required />
									</div>
									<div className="col">
										<input onChange={this.inputChange} type="email" name="email" className="form-control" placeholder="Email" aria-label="email" minLength="3" maxLength="20" required />
									</div>
								</div>
								<div className="row mt-2">
									<div className="col">
										<input onChange={this.inputChange} type="password" name="password" className="form-control" placeholder="Password" aria-label="password" minLength="8" maxLength="20" autoComplete="off" required />
									</div>
									<div className="col">
										<input onChange={this.inputChange} type="password" name="password-confirmed" className="form-control" placeholder="Verified Password" aria-label="password-confirmed" minLength="8" maxLength="20" autoComplete="off" required />
									</div>
								</div>
								<div className="form-group mt-2">
									<input onChange={this.inputChange} type="date" name="born" className="form-control" aria-label="born" required />
								</div>
								<div className="form-group mt-2">
									<select onChange={this.inputChange} className="form-select" aria-label="gender">
										<option>Select gender</option>
										<option value="male">Male</option>
										<option value="female">Female</option>
									</select>
								</div>
								<div className="form-group mt-2">
									<input onChange={this.inputChange} type="text" name="location" className="form-control" placeholder="Location" aria-label="location" minLength="3" maxLength="50" required />
								</div>
								<button type="submit" className="btn btn-primary w-100 mt-2">Register</button>
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