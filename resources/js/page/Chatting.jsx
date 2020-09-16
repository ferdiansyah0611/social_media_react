import React from 'react'
import Mystate from '../components/State'
import {NavBar, SideRight, SideLeft} from './Template'
import './Chatting.css'

class Chatting extends React.Component{
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentDidMount() {
		document.title = 'My Chatting';
	}
	render() {
		return (
			<React.Fragment>
			<NavBar/>
			{/*<!-- list profile right click -->*/}
			<div className="dropdown-menu mt-3 shadow border-0 listnav position-fixed transition-02s" aria-labelledby="dropdown_right">
        	    <li>
	    	        <a className="dropdown-item" href="#">
	    	        	<span className="material-icons">person</span>
	    	        	<span className="position-absolute ml-2">Check Profile</span>
	    	        </a>
        	    </li>
        	    <li>
	    	        <a className="dropdown-item" href="#">
	    	        	<span className="material-icons">archive</span>
	    	        	<span className="position-absolute ml-2">Archive Chat</span>
	    	        </a>
        	    </li>
        	    <li>
	    	        <a className="dropdown-item" href="#">
	    	        	<span className="material-icons">delete</span>
	    	        	<span className="position-absolute ml-2">Delete Chat</span>
	    	    	</a>
        	    </li>
        	</div>
        	{/*<!-- chat message right click -->*/}
			<div className="dropdown-menu mt-3 shadow border-0 chatmenume position-fixed transition-02s" aria-labelledby="dropdown_right">
        	    <li>
	    	        <a className="dropdown-item" href="#">
	    	        	<span className="material-icons">person</span>
	    	        	<span className="position-absolute ml-2">Check Profile</span>
	    	        </a>
        	    </li>
        	    <li>
	    	        <a className="dropdown-item" href="#">
	    	        	<span className="material-icons">archive</span>
	    	        	<span className="position-absolute ml-2">Archive Chat</span>
	    	        </a>
        	    </li>
        	    <li>
	    	        <a className="dropdown-item" href="#">
	    	        	<span className="material-icons">delete</span>
	    	        	<span className="position-absolute ml-2">Delete Chat</span>
	    	    	</a>
        	    </li>
        	</div>
        	{/*<!-- chat message right click -->*/}
			<div className="dropdown-menu mt-3 shadow border-0 chatmenufriends position-fixed transition-02s" aria-labelledby="dropdown_right">
	            <li>
		            <a className="dropdown-item" href="#">
		            	<span className="material-icons">person</span>
		            	<span className="position-absolute ml-2">Check Profile</span>
		            </a>
	            </li>
	            <li>
		            <a className="dropdown-item" href="#">
		            	<span className="material-icons">archive</span>
		            	<span className="position-absolute ml-2">Archive Chat</span>
		            </a>
	            </li>
	            <li>
		            <a className="dropdown-item" href="#">
		            	<span className="material-icons">delete</span>
		            	<span className="position-absolute ml-2">Delete Chat</span>
		        	</a>
	            </li>
	        </div>
			<div className="pl-3 pr-3 mt-70px">
				<div id="clickMenuTab" className="position-fixed shadow bg-light p-3 pointer d-block d-sm-none">
					<span className="material-icons text-primary">people</span>
				</div>
				<div id="closeMenuTab" className="position-fixed shadow p-3 pointer">
					<span className="material-icons">close</span>
				</div>
		        <div className="row">
		        	<div className="col-12 p-0">
		        		<div className="card chat border-0">
		        			<div className="card-body pr-0 pl-0 pt-0 pb-0">
		        				<div className="row">
			        				<div className="col-sm-3 col-xl-3 col-lg-3 col-md-3 d-none d-sm-block bg-white shadow-sm">
						        		<form id="search-contact">
						        			<input type="search" name="search" className="form-control mb-1 rounded-lg mt-2 ml-1 border-0" placeholder="Search contact, chat and more..." />
						        		</form>
			        				</div>
			        				<div className="col-12 col-sm-9 col-xl-9 col-lg-9 col-md-9 position-xs-absolute p-2 bg-white shadow-sm profile-chat">
			        					<div className="row">
			        						<div className="col">
			        							<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" className="rounded-circle float-left" width="50px" height="40px" />
			        							<span className="ml-3 float-left mt-2 text-dark pointer">Ferdiansyah</span>
			        							<div className="dropdown position-absolute top-0 right-0">
			        								<a className="dropdown-toggle after-none" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false" style={{marginRight: '20px',fontSize: '37px'}}>
			        									<span className="material-icons">more_vert</span>
			        								</a>
	  												<ul className="dropdown-menu shadow border-0 mt-3 ml-min-160px" aria-labelledby="dropdownMenuLink">
	  												  <li>
												            <a className="dropdown-item" href="#">
												            	<span className="material-icons">person</span>
												            	<span className="position-absolute ml-2">Check Profile</span>
												            </a>
											            </li>
											            <li>
												            <a className="dropdown-item" href="#">
												            	<span className="material-icons">archive</span>
												            	<span className="position-absolute ml-2">Archive Chat</span>
												            </a>
											            </li>
											            <li>
												            <a className="dropdown-item" href="#">
												            	<span className="material-icons">delete</span>
												            	<span className="position-absolute ml-2">Delete Chat</span>
												        	</a>
											            </li>
	  												</ul>
			        							</div>
			        						</div>
			        					</div>
			        				</div>
		        				</div>
		        				<div className="position-sticky default overflow-y-auto col-12 col-sm-3 col-xl-3 col-lg-3 col-md-3 float-left bg-white maxH-35em d-sm-block">
					        		<ul className="nav nav-tabs d-block border-0 p-0" id="tabChat" role="tablist">
				  						<li className="nav-item" role="presentation">
				  						  	<a className="nav-link text-truncate text-dark active" id="friends-1-tab" data-toggle="tab" href="#friends-1" role="tab" aria-controls="friends-1" aria-selected="true">
				  						  		<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="rounded-circle img-fluid col-2" />
				  						  		<span>Friends 1</span>
				  						  		<span className="badge bg-info text-white position-absolute right-17 top-17">3</span>
				  						  	</a>
				  						</li>
				  						<li className="nav-item" role="presentation">
				  						  	<a className="nav-link text-truncate text-dark" id="friends-2-tab" data-toggle="tab" href="#friends-2" role="tab" aria-controls="friends-2" aria-selected="false">
				  						  		<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="rounded-circle img-fluid col-2" />
				  						  		<span>Friends 2</span>
				  						  	</a>
				  						</li>
				  						<li className="nav-item" role="presentation">
				  						  	<a className="nav-link text-truncate text-dark" id="fiends-3-tab" data-toggle="tab" href="#fiends-3" role="tab" aria-controls="fiends-3" aria-selected="false">
				  						  		<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="rounded-circle img-fluid col-2" />
				  						  		<span>Friends 3</span>
				  						  	</a>
				  						</li>
				  						<li className="nav-item" role="presentation">
				  						  	<a className="nav-link text-truncate text-dark" id="friends-2-tab" data-toggle="tab" href="#friends-2" role="tab" aria-controls="friends-2" aria-selected="false">
				  						  		<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="rounded-circle img-fluid col-2" />
				  						  		<span>Friends 2</span>
				  						  	</a>
				  						</li>
				  						<li className="nav-item" role="presentation">
				  						  	<a className="nav-link text-truncate text-dark" id="fiends-3-tab" data-toggle="tab" href="#fiends-3" role="tab" aria-controls="fiends-3" aria-selected="false">
				  						  		<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="rounded-circle img-fluid col-2" />
				  						  		<span>Friends 3</span>
				  						  	</a>
				  						</li>
				  						<li className="nav-item" role="presentation">
				  						  	<a className="nav-link text-truncate text-dark" id="friends-2-tab" data-toggle="tab" href="#friends-2" role="tab" aria-controls="friends-2" aria-selected="false">
				  						  		<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="rounded-circle img-fluid col-2" />
				  						  		<span>Friends 2</span>
				  						  	</a>
				  						</li>
				  						<li className="nav-item" role="presentation">
				  						  	<a className="nav-link text-truncate text-dark" id="fiends-3-tab" data-toggle="tab" href="#fiends-3" role="tab" aria-controls="fiends-3" aria-selected="false">
				  						  		<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="rounded-circle img-fluid col-2" />
				  						  		<span>Friends 3</span>
				  						  	</a>
				  						</li>
				  						<li className="nav-item" role="presentation">
				  						  	<a className="nav-link text-truncate text-dark" id="friends-2-tab" data-toggle="tab" href="#friends-2" role="tab" aria-controls="friends-2" aria-selected="false">
				  						  		<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="rounded-circle img-fluid col-2" />
				  						  		<span>Friends 2</span>
				  						  	</a>
				  						</li>
				  						<li className="nav-item" role="presentation">
				  						  	<a className="nav-link text-truncate text-dark" id="fiends-3-tab" data-toggle="tab" href="#fiends-3" role="tab" aria-controls="fiends-3" aria-selected="false">
				  						  		<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="rounded-circle img-fluid col-2" />
				  						  		<span>Friends 3</span>
				  						  	</a>
				  						</li>
				  						<li className="nav-item" role="presentation">
				  						  	<a className="nav-link text-truncate text-dark" id="friends-2-tab" data-toggle="tab" href="#friends-2" role="tab" aria-controls="friends-2" aria-selected="false">
				  						  		<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="rounded-circle img-fluid col-2" />
				  						  		<span>Friends 2</span>
				  						  	</a>
				  						</li>
				  						<li className="nav-item" role="presentation">
				  						  	<a className="nav-link text-truncate text-dark" id="fiends-3-tab" data-toggle="tab" href="#fiends-3" role="tab" aria-controls="fiends-3" aria-selected="false">
				  						  		<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="rounded-circle img-fluid col-2" />
				  						  		<span>Friends 3</span>
				  						  	</a>
				  						</li>
				  						<li className="nav-item" role="presentation">
				  						  	<a className="nav-link text-truncate text-dark" id="friends-2-tab" data-toggle="tab" href="#friends-2" role="tab" aria-controls="friends-2" aria-selected="false">
				  						  		<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="rounded-circle img-fluid col-2" />
				  						  		<span>Friends 2</span>
				  						  	</a>
				  						</li>
				  						<li className="nav-item" role="presentation">
				  						  	<a className="nav-link text-truncate text-dark" id="fiends-3-tab" data-toggle="tab" href="#fiends-3" role="tab" aria-controls="fiends-3" aria-selected="false">
				  						  		<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="rounded-circle img-fluid col-2" />
				  						  		<span>Friends 3</span>
				  						  	</a>
				  						</li>
									</ul>
		        				</div>
		        				<div className="position-sticky default overflow-y-auto col-12 col-sm-9 col-xl-9 col-lg-9 col-md-9 float-left pl-1 maxH-28em parent-chat bg-white bg-gradient">
									<div className="tab-content col-12" id="tabChatContent">
									  	<div className="tab-pane fade show active" id="friends-1" role="tabpanel" aria-labelledby="friends-1-tab">
									  		<div className="container mt-sm-3 top-4n5-em">
									  			<div className="row">
									  				<div className="col-12">
									  					<div className="float-right">
									  						<div className="row">
									  							<div className="chat-message">
									  								<div className="chat-me bg-primary bg-gradient text-light p-2 shadow-sm">
									  									<p className="mb-0 fs-15 text-white">Hello my friends</p>
									  								</div>
									  								<p className="fs-12 mt-1 text-dark float-right">15:00 05-08-2020</p>
									  							</div>
									  						</div>
									  					</div>
									  				</div>
									  				<div className="col-12">
									  					<div className="float-right">
									  						<div className="row">
									  							<div className="chat-message">
									  								<div className="chat-me bg-primary bg-gradient text-light p-2 shadow-sm">
									  									<p className="mb-0 fs-15 text-white">Hello my friends</p>
									  								</div>
									  								<p className="fs-12 mt-1 text-dark float-right">15:00 05-08-2020</p>
									  							</div>
									  						</div>
									  					</div>
									  				</div>
									  				<div className="col-12">
									  					<div className="float-left">
									  						<div className="row">
									  							<div className="chat-message">
									  								<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="img-fluid col-6" />
									  								<p className="fs-12 mt-1">15:00 05-08-2020</p>
									  							</div>
									  						</div>
									  					</div>
									  				</div>
									  			</div>
									  		</div>
									  	</div>
									  	<div className="tab-pane fade" id="friends-2" role="tabpanel" aria-labelledby="friends-2-tab">2...</div>
									  	<div className="tab-pane fade" id="fiends-3" role="tabpanel" aria-labelledby="fiends-3-tab">3...</div>
									</div>
		        				</div>
		        			</div>
		        			<div className="card-footer bg-white text-light">
		        				<div className="row">
									<div id="editor" className="col-12 col-sm-10 text-dark mh-94px">Message..</div>
		        					<div className="col-12 col-sm-2 mt-2 mt-sm-0">
		        						<div className="row">
		        							<div className="col-12">
				        						<div className="form-file">
			  										<input type="file" className="form-file-input" id="customFile"/>
			  										<label className="form-file-label" htmlFor="customFile">
			    										<span className="form-file-button w-100">
			    											<span className="material-icons">attachment</span>
			    											<span className="position-absolute">Attach</span>
														</span>
			  										</label>
												</div>
		        							</div>
		        							<div className="col mt-2">
				        						<button type="button" className="btn-sm btn-primary w-100 pd-10">
				        							<span className="material-icons">send</span>
				        						</button>
				        					</div>
		        						</div>
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

export default Chatting;