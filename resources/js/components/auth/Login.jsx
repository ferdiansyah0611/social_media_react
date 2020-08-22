import React from 'react'
import axios from 'axios'
import Auth from '../Auth.js'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.loginRequest = this.loginRequest.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }
    inputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    async loginRequest(event, $url = '/api/login', $method = 'post') {
        event.preventDefault()
        await axios({
            url: $url,
            method: $method,
            data: {
                email: this.state.email,
                password: this.state.password
            }
        }).then(result => {
            window.localStorage.setItem('token', result.data.success.token);
            window.localStorage.setItem('user', JSON.stringify(result.data.user));
            Auth.isAuthentication = true;
            window.location.href = '/home';
        }).catch(error => {
            console.error(error.message)
        })
    }
    componentDidMount(){
        document.title = 'Login to app social media'
        document.body.classList.add('bg-primary');
    }
    render(){
        return (
            <div className="container mt-5" >
                   <div className="col-md-6 offset-sm-0 offset-md-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="text-center font-weight-bold mb-4">Login to Social Media</h5>
                            <form onSubmit={this.loginRequest}>
                                <input onChange={this.inputChange} value={this.state.email} type="email" name="email" className="form-control mt-2" placeholder="Email" minLength="3" maxLength="20" required />
                                <input onChange={this.inputChange} value={this.state.password} type="password" name="password" className="form-control mt-2" placeholder="Password" aria-label="password" minLength="8" maxLength="20" autoComplete="off" required />
                                <button type="submit" className="btn btn-primary w-100 mt-2">Login</button>
                                <p className="text-center mb-2 mt-2">Or with</p>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary mt-2 text-white">
                                        <i className="fab fa-facebook-square pr-2"></i> 
                                        <span className="font-weight-bold">Facebook</span>
                                    </button>
                                    <button type="submit" className="btn btn-info mt-2 text-white">
                                        <i className="fab fa-twitter-square pr-2"></i>
                                        <span className="font-weight-bold">Twitter</span>
                                    </button>
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
