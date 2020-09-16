import React from 'react'
import {NavBar} from './Template'
import Mystate from '../components/State'
import lava from './APP'

let Load = true

class Notification extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			APP_Notification: [],
			DefaultPage: 1
		}
		this.ReadAll = this.ReadAll.bind(this)
		this.RemoveAll = this.RemoveAll.bind(this)
		this.ArchiveAll = this.ArchiveAll.bind(this)
	}
	componentDidMount() {
		document.title = '1 | My Notification'
		this.GetNotification();
		lavaInstance.notificationPage({
            notification: {
                query: '.notification li',
                dropdown: ''
            }
        })
	}
	componentWillUnmount() {
		Load = true
	}
	async GetNotification() {
		await axios({
			url: '/api/user-notification',
			method: 'get',
			headers: {
			    'Authorization' : Mystate.token
			},
		}).then(value => {
			let DataEach = value.data.data;
			Load = false;
			this.setState(state => {
				return{ APP_Notification: DataEach, DefaultPage: this.state.DefaultPage + 1 }
			})
		}).catch(error => {
			console.error(error)
		})
	}
	ReadAll(event) {
		event.persist();
		event.target.disabled = true;
		Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, read all!'
        })
        .then((result) => {
            if (result.value) {
            	const read = async () => {
            		await axios({
            			url: '/api/user-notification/all/read',
            			method: 'get',
            			headers: {
			                'Authorization' : Mystate.token
			            },
            		}).then(value => {
		                Swal.fire(
		                    'Readed!',
		                    value.message,
		                    'success'
		                )
		                event.target.disabled = false;
            		}).catch(error => {
            			Swal.fire(
		                    'Error!',
		                    "Your notification can't be readed.",
		                    'error'
		                )
		                event.target.disabled = false;
            		})
            	}
            	read();
            }
        })
	}
	RemoveAll(event) {
		event.persist();
		event.target.disabled = true;
		Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to recover this notification!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove all!'
        })
        .then((result) => {
            if (result.value) {
            	const remove = async () => {
            		await axios({
            			url: '/api/user-notification/all/remove',
            			method: 'get',
            			headers: {
			                'Authorization' : Mystate.token
			            },
            		}).then(value => {
		                Swal.fire(
		                    'Readed!',
		                    value.message,
		                    'success'
		                )
		                event.target.disabled = false;
            		}).catch(error => {
            			Swal.fire(
		                    'Error!',
		                    "Your notification can't be readed.",
		                    'error'
		                )
		                event.target.disabled = false;
            		})
            	}
            	remove();
            }
        })
	}
	ArchiveAll(event) {
		event.persist();
		event.target.disabled = true;
		Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, archived all!'
        })
        .then((result) => {
            if (result.value) {
            	const archive = async () => {
            		await axios({
            			url: '/api/user-notification/all/archive',
            			method: 'get',
            			headers: {
			                'Authorization' : Mystate.token
			            },
            		}).then(value => {
		                Swal.fire(
		                    'Readed!',
		                    value.message,
		                    'success'
		                )
		                event.target.disabled = false;
            		}).catch(error => {
            			Swal.fire(
		                    'Error!',
		                    "Your notification can't be archived.",
		                    'error'
		                )
		                event.target.disabled = false;
            		})
            	}
            	archive();
            }
        })
	}
	render() {
		return (
			<React.Fragment>
			<NavBar/>
			<div className="mt-5 pl-3 pr-3">
			    <div className="dropdown-menu mt-3 shadow border-0 listnav position-fixed transition-02s" aria-labelledby="dropdown_right">
			        <li>
			            <a className="dropdown-item" href="#">
			                <span className="material-icons">mark_email_read</span>
			                <span className="position-absolute ml-2">Read</span>
			            </a>
			        </li>
			        <li>
			            <a className="dropdown-item" href="#">
			                <span className="material-icons">archive</span>
			                <span className="position-absolute ml-2">Archive</span>
			            </a>
			        </li>
			        <li>
			            <a className="dropdown-item" href="#">
			                <span className="material-icons">delete</span>
			                <span className="position-absolute ml-2">Delete</span>
			            </a>
			        </li>
			    </div>
			    <div className="pl-3 pr-3 mt-70px">
			        <div className="col-12 col-sm-8 offset-sm-2 col-xl-6 offset-xl-3">
			            <div className="card bg-white border-0 shadow-sm">
			                <div className="card-header bg-white">
			                    <h5 className="mb-0 font-weight-bold text-dark lt-space-2px">Notification</h5>
			                </div>
			                <div className="card-body overflow-y-auto default mh-29em">
			                    <div className="row mt-1 mb-1">
			                    {Load ? (
											<div className="d-flex justify-content-center">
												<div className="spinner-grow text-dark" role="status">
    												<span className="sr-only">Loading...</span>
  												</div>
											</div>
									): false
								}
			                        <div className="col">
			                            <ul className="list-unstyled mb-0 notification">
			                            {
			                            	this.state.APP_Notification.map(data => {
			                            		return (
			                            			<li className="pointer animate__animated animate__backInLeft">
			                                    		<div className="row">
			                                    		    <div className="col-2">
			                                    		        <img src="/media/process.png" alt="example" className="img-fluid bg-white p-1" />
			                                    		    </div>
			                                    		    <div className="col-10">
			                                    		        <p className="h5 mb-1 text-dark">System 
			                                    		            <span className="font-weight-normal float-right fs-12">{data.created_at}</span>
			                                    		        </p>
			                                    		        <a className="mb-0 text-decoration-none text-dark fs-13">
			                                    		            {data.message}
			                                    		        </a>
			                                    		    </div>
			                                    		</div>
			                                		</li>
			                            		)
			                            	})
			                            }
			                                <li className="pointer animate__animated animate__backInLeft">
			                                    <div className="row">
			                                        <div className="col-2">
			                                            <img src="/media/process.png" alt="example" className="img-fluid bg-white p-1" />
			                                        </div>
			                                        <div className="col-10">
			                                            <p className="h5 mb-1 text-dark">System 
			                                                <span className="font-weight-normal float-right fs-12">07:00 12/08/2020</span>
			                                            </p>
			                                            <a className="mb-0 text-decoration-none text-dark fs-13">
			                                                Safina has like your postSafina has like your postSafina has like your post
			                                                Safina has like your postSafina has like your postSafina has like your post
			                                            </a>
			                                        </div>
			                                    </div>
			                                </li>
			                            </ul>
			                        </div>
			                    </div>
			                </div>
			                <div className="card-footer bg-white">
			                    <div className="row">
			                        <div className="col-6 col-sm-4">
			                            <button onClick={this.ReadAll} type="button" className="w-100 fs-13 btn btn-primary read-notification-all">Read all</button>
			                        </div>
			                        <div className="col-6 col-sm-4">
			                            <button onClick={this.RemoveAll} type="button" className="w-100 fs-13 btn btn-danger remove-notification-all">Remove all</button>
			                        </div>
			                        <div className="col-12 col-sm-4 mt-2 mt-sm-0">
			                            <button onClick={this.ArchiveAll} type="button" className="w-100 fs-13 btn btn-light archive-notification-all">Archive all</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
			</React.Fragment>
		)
	}
}

export default Notification;