import React from 'react'
import {NavBar} from './Template'

class Notification extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<React.Fragment>
			<NavBar/>
			<div className="mt-5 pl-3 pr-3">
			    <div class="dropdown-menu mt-3 shadow border-0 listnav position-fixed transition-02s" aria-labelledby="dropdown_right">
			        <li>
			            <a class="dropdown-item" href="#">
			                <span class="material-icons">mark_email_read</span>
			                <span class="position-absolute ml-2">Read</span>
			            </a>
			        </li>
			        <li>
			            <a class="dropdown-item" href="#">
			                <span class="material-icons">archive</span>
			                <span class="position-absolute ml-2">Archive</span>
			            </a>
			        </li>
			        <li>
			            <a class="dropdown-item" href="#">
			                <span class="material-icons">delete</span>
			                <span class="position-absolute ml-2">Delete</span>
			            </a>
			        </li>
			    </div>
			    <div class="pl-3 pr-3 mt-70px">
			        <div class="col-12 col-sm-8 offset-sm-2 col-xl-6 offset-xl-3">
			            <div class="card bg-white border-0 shadow-sm">
			                <div class="card-header bg-white">
			                    <h5 class="mb-0 font-weight-bold text-dark lt-space-2px">Notification</h5>
			                </div>
			                <div class="card-body overflow-y-auto default mh-29em">
			                    <div class="row mt-1 mb-1">
			                        <div class="col">
			                            <ul class="list-unstyled mb-0 notification">
			                                    <li class="pointer animate__animated animate__backInLeft">
			                                        <div class="row">
			                                            <div class="col-2">
			                                                <img src="/media/process.png" alt="example" class="img-fluid bg-white p-1" />
			                                            </div>
			                                            <div class="col-10">
			                                                <p class="h5 mb-1 text-dark">System 
			                                                    <span class="font-weight-normal float-right fs-12">07:00 12/08/2020</span>
			                                                </p>
			                                                <a class="mb-0 text-decoration-none text-dark fs-13">
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
			                <div class="card-footer bg-white">
			                    <div class="row">
			                        <div class="col-6 col-sm-4">
			                            <button type="button" class="w-100 fs-13 btn btn-primary read-notification-all">Read all</button>
			                        </div>
			                        <div class="col-6 col-sm-4">
			                            <button type="button" class="w-100 fs-13 btn btn-danger remove-notification-all">Remove all</button>
			                        </div>
			                        <div class="col-12 col-sm-4 mt-2 mt-sm-0">
			                            <button type="button" class="w-100 fs-13 btn btn-light archive-notification-all">Archive all</button>
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