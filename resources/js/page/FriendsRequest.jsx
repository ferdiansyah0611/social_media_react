import React from 'react'
import {NavBar} from './Template'
import Mystate from '../components/State'

class FriendsRequest extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		document.title = '1 | Friends Request'
	}
	render() {
		return (
			<React.Fragment>
			<NavBar/>
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
    		    <div className="col-12 col-sm-8 offset-sm-2 col-xl-4 offset-xl-4">
            		<div className="card bg-white border-0 shadow-sm">
                		<div className="card-header bg-white">
                		    <h5 className="mb-0 font-weight-bold text-dark lt-space-2px">Friends Request 
                		        <span className="badge bg-danger">29</span>
                		    </h5>
                		</div>
                		<div className="card-body overflow-y-auto default mh-29em">
                		    <div className="row mt-1 mb-1">
                		        <div className="col">
                		            <ul className="list-unstyled mb-0 notification">
                		                <li className="animate__animated animate__backInLeft">
                		                    <div className="row">
                		                        <div className="col-2">
                		                            <img src="./src/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="img-fluid bg-white p-1 rounded-circle" />
                		                        </div>
                		                        <div className="col-10">
                		                            <p className="h5 mb-1 text-dark">Name 1 <span className="font-weight-normal float-right fs-12">07:00 12/08/2020</span></p>
                		                            <a className="mb-0 text-decoration-none text-dark fs-13">
                		                                Invite you to be friends.
                		                            </a>
                		                            <p>
                		                                <button type="button" className="btn btn-primary">Confirm</button>
                		                                <button type="button" className="btn btn-danger">Decline</button>
                		                            </p>
                		                        </div>
                		                    </div>
                		                </li>
                		            </ul>
                		        </div>
                		    </div>
                		</div>
                		<div className="card-footer bg-white">
                		    <div className="row">
                		        <div className="col">
                		            <button type="button" className="w-100 fs-13 btn btn-primary read-notification-all">Confirm all</button>
                		        </div>
                		        <div className="col">
                		            <button type="button" className="w-100 fs-13 btn btn-danger remove-notification-all">Decline all</button>
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

export default FriendsRequest;