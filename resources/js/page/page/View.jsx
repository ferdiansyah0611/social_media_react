import React from 'react'
import Modal from 'bootstrap/js/dist/modal'
import Mystate from '../../components/State'
import {SharePostModal, LikePostModal, CommentPostModal} from '../../components/post/Modal'
import {NavBar} from '../Template'
import Card from '../../components/post/Card'
import './View.css'

let ModalViewPhoto = ''

class View extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: props.match.params.name,
			APP_ModalPost_like: [],
			APP_ModalPost_comment: [],
			APP_Data_User: []
		}
	}
	componentDidMount() {
		document.title = 'View profile';
		ModalViewPhoto = new Modal(document.getElementById('modal-view-photo'), {keyboard: false})
		// var rellax = new Rellax('.rellax');
		this.InfoUser();
    	lavaInstance.informationFixed({
    		visibility : '.information',
    		instanceFixed : '#information-fixed',
    		top_plus : '60px',
    		top_min : '-500px',
    		zIndex_plus : '999',
    		zIndex_min : '-100',
    	})
	}
	async InfoUser() {
		await axios({
			url: `/api/user/${this.state.name}`,
			method: 'get',
			headers : {
                'Authorization' : Mystate.token
            }
		}).then(result => {
			let DataEach = result.data
			this.setState(state => {
				return {APP_Data_User: DataEach}
			})
		}).catch(error => {
			console.log(error)
		})
	}
	Click_ViewPhoto(event) {
		ModalViewPhoto.show()
	}
	render() {
		const MODAL = {
			ViewPhoto: () => {
				return (
					<div className="modal fade" id="modal-view-photo" tabIndex="-1" aria-labelledby="modal-like-post-Label" aria-hidden="true">
		    			<div className="modal-dialog modal-sm modal-dialog-centered" role="document">
		    				<div className="modal-content">
		    					<div className="modal-body">
		    						<img src="/media/noah-austin-8dgFesiqvPI-unsplash.jpg" alt="example" className="img-fluid" />
		    					</div>
		    				</div>
		    			</div>
		    		</div>
				)
			}
		}
		const DataUser = this.state.APP_Data_User.map((value, i) => {
			return (
				<div key={i} className="card-body pt-0">
					<p className="mb-0 mt-3 text-truncate">
						<i className="fas fa-envelope font-weight-bold mr-2 text-info"></i>
						<span className="fs-14">{value.email}</span>
					</p>
					<p className="mb-0 mt-3 text-truncate">
						<i className="fas fa-location-arrow font-weight-bold mr-2 text-danger"></i>
						<span className="fs-14">{value.languange}</span>
					</p>
					<p className="mb-0 mt-3 text-truncate">
						<i className="fab fa-facebook font-weight-bold mr-2 text-primary"></i>
						<span className="fs-14">Ferdi Ferdiansyah</span>
					</p>
					<p className="mb-0 mt-3 text-truncate">
						<i className="fab fa-twitter font-weight-bold mr-2 text-primary"></i>
						<span className="fs-14">@ferdi_LexSugar</span>
					</p>
					<p className="mb-0 mt-3 text-truncate">
						<i className="fab fa-whatsapp font-weight-bold mr-2 text-success"></i>
						<span className="fs-14">+6285966253416</span>
					</p>
				</div>
			)
		})
		return (
			<React.Fragment>
			<NavBar/>
			<div className="pl-3 pr-3 mt-70px">
	        	<div className="row">
	        		<div className="position-absolute col-5 col-sm-5 col-lg-3 col-xl-3 name-cover">
		        		<div className="card-body">
		        		{
		        			this.state.APP_Data_User.map((value, i) => {
		        				return (
		        					<React.Fragment key={i}>
		        					<img src={Mystate.pathImage + value.avatar} className="w-100 border-0 rounded-circle" alt={value.avatar} />
		        					<h5 className="card-title text-truncate text-center bg-white text-dark font-weight-bold mb-0 p-1 mt-1">{value.name}</h5>
		        					</React.Fragment>
		        				)
		        			})
		        		}
		        		</div>
	        		</div>
		        	<div className="col-12 cover">
		        		<img id="example" src="/media/kelly-repreza-vdsDBby6Tn4-unsplash.jpg" data-rellax-speed="-5" className="rellax img-fluid" alt="example" />
		        	</div>
		        	<div className="col-12 mt-4">
		        		<div className="row">
		        			<div className="col-sm-12 col-md-3 information">
		        				<div className="row">
		        					<div className="col-12">
				        				<div className="card border-0 shadow-sm">
				        					<div className="card-body pb-0">
						        				<h5>Information</h5>
				        					</div>
						        			<div className="dropdown-divider"></div>
						        			{DataUser}
						        		</div>
		        					</div>
		        				</div>
		        			</div>
		        			<div className="d-none" id="information-fixed"></div>
		        			<div className="col-sm-12 col-md-9 mt-1 mt-sm-1 mt-lg-0">
				        		<div className="card border-0 shadow-sm">
				        			<div className="card-body">
				        				<ul className="nav nav-tabs border-0 row mb-3" id="tab_view" role="tablist">
											<li className="nav-item col text-center" role="presentation">
											  	<a className="nav-link text-dark active" id="post-tab" data-toggle="tab" href="#post" role="tab" aria-controls="post" aria-selected="true">Post</a>
											</li>
											<li className="nav-item col text-center" role="presentation">
											  	<a className="nav-link text-dark" id="about-tab" data-toggle="tab" href="#about" role="tab" aria-controls="about" aria-selected="false">About</a>
											</li>
											<li className="nav-item col text-center" role="presentation">
											  	<a className="nav-link text-dark" id="photo-tab" data-toggle="tab" href="#photo" role="tab" aria-controls="photo" aria-selected="false">Photo</a>
											</li>
											<li className="nav-item col text-center" role="presentation">
											  	<a className="nav-link text-dark" id="video-tab" data-toggle="tab" href="#video" role="tab" aria-controls="video" aria-selected="false">Video</a>
											</li>
											<li className="nav-item col text-center offset-5 offset-sm-0" role="presentation">
											  	<a className="nav-link text-dark" id="friend-tab" data-toggle="tab" href="#friend" role="tab" aria-controls="friend" aria-selected="false">Friend</a>
											</li>
										</ul>
										<div className="tab-content" id="tab_viewContent">
										  	<div className="tab-pane fade show active" id="post" role="tabpanel" aria-labelledby="post-tab">
			                					<Card url="/api/page-data" urlLikeShow="/api/page-post-like" urlLikePost="" urlComment="/api/page-post-comment"/>
										  	</div>
										  	<div className="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">
										  		<div className="row">
										  			<h5>
										  				<span className="material-icons">notes</span>
										  				<span className="position-absolute ml-1">Biography</span>
										  			</h5>
										  			<p>Hallo this biography</p>
										  			<div className="dropdown-divider"></div>
										  			<h5>
										  				<span className="material-icons">shopping_bag</span>
										  				<span className="position-absolute ml-1">Work</span>
										  			</h5>
										  			<p>This work</p>
										  			<div className="dropdown-divider"></div>
										  			<h5>
										  				<span className="material-icons">school</span>
										  				<span className="position-absolute ml-1">Education</span>
										  			</h5>
										  			<p>This education</p>
										  			<div className="dropdown-divider"></div>
										  		</div>
										  	</div>
										  	<div className="tab-pane fade" id="photo" role="tabpanel" aria-labelledby="photo-tab">
										  		<div className="row mt-2">
										  			<img onClick={this.Click_ViewPhoto} src="/media/noah-austin-8dgFesiqvPI-unsplash.jpg" alt="example" className="col-sm-12 col-md-3 img-fluid mt-1 pointer" />
										  			<img onClick={this.Click_ViewPhoto} src="/media/noah-austin-8dgFesiqvPI-unsplash.jpg" alt="example" className="col-sm-12 col-md-3 img-fluid mt-1 pointer" />
										  			<img onClick={this.Click_ViewPhoto} src="/media/noah-austin-8dgFesiqvPI-unsplash.jpg" alt="example" className="col-sm-12 col-md-3 img-fluid mt-1 pointer" />
										  			<img onClick={this.Click_ViewPhoto} src="/media/noah-austin-8dgFesiqvPI-unsplash.jpg" alt="example" className="col-sm-12 col-md-3 img-fluid mt-1 pointer" />
										  		</div>
										  	</div>
										  	<div className="tab-pane fade" id="video" role="tabpanel" aria-labelledby="video-tab">
										  		<video className="col-12" buffered="true" controls={true}>
										  			<source src="/media/VID_53340831_082725_052.mp4" type="video/mp4"/>
										  			Your browser does not support the video tag.
										  		</video>
										  	</div>
										  	<div className="tab-pane fade" id="friend" role="tabpanel" aria-labelledby="friend-tab">
										  		<form className="mt-3 mb-3">
										  			<input type="search" name="search" className="form-control" placeholder="Search friends of 9999 people" />
										  		</form>
										  		<div className="row">
										  			<div className="col-3 border border-light mt-2">
										  				<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="img-fluid mt-1" />
										  				<p className="mt-2 mb-1 text-center text-truncate">Ferdiansyah</p>
										  				<p className="mb-0 text-truncate fs-14">
										  					<i className="fas fa-user-friends pr-1"></i>
										  					15 people
										  				</p>
										  				<p className="mb-1 text-truncate fs-14">
										  					<i className="fas fa-location-arrow pr-1"></i>
										  					United States
										  				</p>
										  				<button type="button" className="btn-sm w-100 btn-primary mb-1">Add friends</button>
										  				<button type="button" className="btn-sm w-100 btn-info">Check Profile</button>
										  			</div>
										  			<div className="col-3 border border-light mt-2">
										  				<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="img-fluid mt-1" />
										  				<p className="mt-2 mb-1 text-center text-truncate">Ferdiansyah</p>
										  				<p className="mb-0 text-truncate fs-14">
										  					<i className="fas fa-user-friends pr-1"></i>
										  					15 people
										  				</p>
										  				<p className="mb-1 text-truncate fs-14">
										  					<i className="fas fa-location-arrow pr-1"></i>
										  					United States
										  				</p>
										  				<button type="button" className="btn-sm w-100 btn-primary mb-1">Add friends</button>
										  				<button type="button" className="btn-sm w-100 btn-info">Check Profile</button>
										  			</div>
										  			<div className="col-3 border border-light mt-2">
										  				<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="img-fluid mt-1" />
										  				<p className="mt-2 mb-1 text-center text-truncate">Ferdiansyah</p>
										  				<p className="mb-0 text-truncate fs-14">
										  					<i className="fas fa-user-friends pr-1"></i>
										  					15 people
										  				</p>
										  				<p className="mb-1 text-truncate fs-14">
										  					<i className="fas fa-location-arrow pr-1"></i>
										  					United States
										  				</p>
										  				<button type="button" className="btn-sm w-100 btn-primary mb-1">Add friends</button>
										  				<button type="button" className="btn-sm w-100 btn-info">Check Profile</button>
										  			</div>
										  			<div className="col-3 border border-light mt-2">
										  				<img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="img-fluid mt-1" />
										  				<p className="mt-2 mb-1 text-center text-truncate">Ferdiansyah</p>
										  				<p className="mb-0 text-truncate fs-14">
										  					<i className="fas fa-user-friends pr-1"></i>
										  					15 people
										  				</p>
										  				<p className="mb-1 text-truncate fs-14">
										  					<i className="fas fa-location-arrow pr-1"></i>
										  					United States
										  				</p>
										  				<button type="button" className="btn-sm w-100 btn-primary mb-1">Add friends</button>
										  				<button type="button" className="btn-sm w-100 btn-info">Check Profile</button>
										  			</div>
										  		</div>
										  	</div>
										</div>
				        			</div>
				        		</div>
		        			</div>
		        		</div>
		        	</div>
		        </div>
	    	</div>
		    <MODAL.ViewPhoto/>
		    <LikePostModal apps={this.state.APP_ModalPost_like}/>
			<CommentPostModal apps={this.state.APP_ModalPost_comment}/>
			<SharePostModal/>
		</React.Fragment>
		)
	}
}

export default View;