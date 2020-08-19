import React from 'react'
import ReactDOM from 'react-dom'

import {NavBar, SideRight, SideLeft} from './Template'

class Home extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		document.title = 'Home';
	}
	render(){
		const Modal = () => {
			return (
				<div className="modal fade" id="modal-story" tabIndex="-1" aria-labelledby="modal-story-Label" aria-hidden="true">
			        <div className="modal-dialog modal-dialog-centered modal-lg">
			            <div className="modal-content">
			                <div className="modal-header">
			                    <h5 className="modal-title" id="modal-story-Label">Ferdiansyah</h5>
			                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			                        <span aria-hidden="true">&times;</span>
			                    </button>
			                </div>
			                <div className="modal-body">
			                    <div className="row">
			                        <div className="col-12 pb-2">
			                            <img src="./media/kelly-repreza-vdsDBby6Tn4-unsplash.jpg" alt="example" className="img-fluid" />
			                        </div>
			                        <div className="col-12">
			                            <div className="row">
			                                <div className="col-12 col-sm-10">
			                                    <form>
			                                        <textarea type="text" name="comment" placeholder="Type here to comment" className="form-control story-textarea"></textarea>
			                                    </form>
			                                </div>
			                                <div className="col-12 col-sm-2">
			                                    <button type="submit" className="btn btn-primary w-100 h-100">
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
			)
		};
		return (
			<React.Fragment>
			<NavBar/>
			<div className="mt-5 pl-3 pr-3">
	            <div className="row">
	                <div className="col-12 col-md-3 d-none d-xl-block p-0 mt-3">
	                    <SideLeft/>
	                </div>
	                <div className="col-12 col-md-10 col-xl-6 offset-md-1 offset-xl-0 mt-4 mt-md-0">
	                    <div className="card border-0 shadow-sm mt-2">
	                        <div className="card-body">
	                            <div className="story pb-2 bg-white">
	                                <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" data-toggle="modal" data-target="#modal-story" />
	                                <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" data-toggle="modal" data-target="#modal-story" />
	                                <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" data-toggle="modal" data-target="#modal-story" />
	                                <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" data-toggle="modal" data-target="#modal-story" />
	                                <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" data-toggle="modal" data-target="#modal-story" />
	                                <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" data-toggle="modal" data-target="#modal-story" />
	                                <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" data-toggle="modal" data-target="#modal-story" />
	                                <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" data-toggle="modal" data-target="#modal-story" />
	                                <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" data-toggle="modal" data-target="#modal-story" />
	                                <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" data-toggle="modal" data-target="#modal-story" />
	                                <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" data-toggle="modal" data-target="#modal-story" />
	                                <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" data-toggle="modal" data-target="#modal-story" />
	                                <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" data-toggle="modal" data-target="#modal-story" />
	                                <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" data-toggle="modal" data-target="#modal-story" />
	                                <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" data-toggle="modal" data-target="#modal-story" />
	                            </div>
	                            <div className="next-story rounded-circle shadow-sm">
	                                <span className="material-icons p-1">chevron_right</span>
	                            </div>
	                            <div className="previous-story rounded-circle shadow-sm">
	                                <span className="material-icons p-1">chevron_left</span>
	                            </div>
	                            <form>
	                                <div className="input-group mb-1">
	                                    <select className="form-select form-select-sm" aria-label=".form-select-sm">
	                                        <option>Choose privacy...</option>
	                                        <option value="">Only me</option>
	                                        <option value="">Fiends</option>
	                                        <option value="">Public</option>
	                                    </select>
	                                </div>
	                                <textarea className="form-control mt-2" placeholder="What do you think now ?" rows="4"></textarea>
	                                <div className="form-file form-file-sm mt-2">
	                                    <input type="file" className="form-file-input" id="image_upload_post" accept=".jpg,.png,.jpeg" multiple/>
	                                    <label className="form-file-label" htmlFor="image_upload_post">
	                                        <span className="form-file-text">Choose file image...</span>
	                                        <span className="form-file-button">Browse</span>
	                                    </label>
	                                </div>
	                                <div className="form-file form-file-sm mt-2">
	                                    <input type="file" className="form-file-input" id="video_upload_post" accept=".mp4" multiple/>
	                                    <label className="form-file-label" htmlFor="video_upload_post">
	                                        <span className="form-file-text">Choose file video...</span>
	                                        <span className="form-file-button">Browse</span>
	                                    </label>
	                                </div>
	                                <div className="dropdown-divider"></div>
	                                <button type="submit" className="btn btn-primary w-100">Post now</button>
	                            </form>
	                        </div>
	                    </div>
	                    <div className="card bg-white mt-2 border-0 shadow-sm animate__animated animate__fadeInUp">
	                        <div className="card-body">
	                            <div className="row">
	                                <div className="col-2 text-md-center">
	                                    <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" className="rounded-circle avatar-post" alt="example" width="100%" />
	                                </div>
	                                <div className="col-5">
	                                    <p className="text-truncate mb-0">
	                                        <a href="./ferdiansyah" className="text-decoration-none text-dark">Ferdiansyah</a>
	                                    </p>
	                                    <span className="p-0 text-truncate text-lowercase text-dark font-weight-light fs-13">12 Jam yg lalu</span>
	                                </div>
	                                <div className="col-5">
	                                    <div className="dropdown dropleft float-right">
	                                        <a className="btn btn-light rounded dropdown-toggle before-none" href="#" name="dropdownMenuLink3" id="dropdownMenuLink3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	                                            <i className="fas fa-ellipsis-v"></i>
	                                        </a>
	                                        <div className="dropdown-menu dropdown-menu-right shadow border-0" aria-labelledby="dropdownMenuLink3">
	                                            <a className="dropdown-item" href="#">
	                                                <span className="material-icons">save</span> 
	                                                <span className="position-absolute ml-1">Save link</span>
	                                            </a>
	                                            <a className="dropdown-item" href="#">
	                                                <span className="material-icons">remove_circle_outline</span>
	                                                <span className="position-absolute ml-1">Hide post</span>
	                                            </a>
	                                            <a className="dropdown-item" href="#">
	                                                <span className="material-icons">person_remove</span>
	                                                <span className="position-absolute ml-1">Unfollow</span>
	                                            </a>
	                                            <a className="dropdown-item" href="#">
	                                                <span className="material-icons">content_copy</span>
	                                                <span className="position-absolute ml-1">Copy link</span>
	                                            </a>
	                                            <a className="dropdown-item" href="#">
	                                                <span className="material-icons">report</span>
	                                                <span className="position-absolute ml-1">Report</span>
	                                            </a>
	                                        </div>
	                                    </div>
	                                </div>
	                                <div className="col-12 mt-1 text-dark fs-15">
	                                    Content in here
	                                    <div className="row">
	                                        <div className="col">
	                                            <img src="./media/kelly-repreza-vdsDBby6Tn4-unsplash.jpg" alt="example" className="img-fluid" />
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                        <div className="card-footer font-weight-light bg-transparent border-0">
	                            <button type="button" className="text-dark btn border-0" data-toggle="modal" data-target="#modal-like-post">1000 people like this post</button>
	                            <div className="row">
	                                <button type="button" className="btn btn-outline-light text-dark border-0 col">
	                                    <i className="far fa-thumbs-up pl-1"></i>
	                                    1000
	                                </button>
	                                <button type="button" className="btn btn-outline-light text-dark border-0 col" data-toggle="modal" data-target="#modal-comment-post">
	                                    <i className="far fa-comment pl-1"></i>
	                                    10
	                                </button>
	                                <button type="button" className="btn btn-outline-light text-dark border-0 col" data-toggle="modal" data-target="#modal-share-post">
	                                    <i className="far fa-share-square pl-1"></i>
	                                    10
	                                </button>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="card bg-white mt-2 border-0 shadow-sm animate__animated animate__fadeInUp">
	                        <div className="card-body">
	                            <div className="row">
	                                <div className="col-2 text-md-center">
	                                    <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="rounded-circle avatar-post" width="100%" />
	                                </div>
	                                <div className="col-5">
	                                    <p className="text-truncate mb-0">
	                                        <a href="./ferdiansyah" className="text-decoration-none text-dark">Ferdiansyah</a>
	                                    </p>
	                                    <span className="p-0 text-truncate text-lowercase text-dark font-weight-light fs-13">12 Jam yg lalu</span>
	                                </div>
	                                <div className="col-5">
	                                    <div className="dropdown dropleft float-right">
	                                        <a className="btn btn-light rounded dropdown-toggle before-none" href="#" name="dropdownMenuLink3" id="dropdownMenuLink3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	                                            <i className="fas fa-ellipsis-v"></i>
	                                        </a>
	                                        <div className="dropdown-menu dropdown-menu-right shadow border-0" aria-labelledby="dropdownMenuLink3">
	                                            <a className="dropdown-item" href="#">
	                                                <span className="material-icons">save</span> 
	                                                <span className="position-absolute ml-1">Save link</span>
	                                            </a>
	                                            <a className="dropdown-item" href="#">
	                                                <span className="material-icons">remove_circle_outline</span>
	                                                <span className="position-absolute ml-1">Hide post</span>
	                                            </a>
	                                            <a className="dropdown-item" href="#">
	                                                <span className="material-icons">person_remove</span>
	                                                <span className="position-absolute ml-1">Unfollow</span>
	                                            </a>
	                                            <a className="dropdown-item" href="#">
	                                                <span className="material-icons">content_copy</span>
	                                                <span className="position-absolute ml-1">Copy link</span>
	                                            </a>
	                                            <a className="dropdown-item" href="#">
	                                                <span className="material-icons">report</span>
	                                                <span className="position-absolute ml-1">Report</span>
	                                            </a>
	                                        </div>
	                                    </div>
	                                </div>
	                                <div className="col-12 mt-1 text-dark fs-15">
	                                    Content in here
	                                    <div className="row">
	                                        <div className="col">
	                                            <img src="./media/kelly-repreza-vdsDBby6Tn4-unsplash.jpg" alt="example" className="img-fluid" />
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                        <div className="card-footer font-weight-light bg-transparent border-0">
	                            <button type="button" className="text-dark btn border-0" data-toggle="modal" data-target="#modal-like-post">1000 people like this post</button>
	                            <div className="row">
	                                <button type="button" className="btn btn-outline-light text-dark border-0 col">
	                                    <i className="far fa-thumbs-up pl-1"></i>
	                                    1000
	                                </button>
	                                <button type="button" className="btn btn-outline-light text-dark border-0 col" data-toggle="modal" data-target="#modal-comment-post">
	                                    <i className="far fa-comment pl-1"></i>
	                                    10
	                                </button>
	                                <button type="button" className="btn btn-outline-light text-dark border-0 col" data-toggle="modal" data-target="#modal-share-post">
	                                    <i className="far fa-share-square pl-1"></i>
	                                    10
	                                </button>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="col-12 text-center mt-2">
	                        <button type="button" className="text-decoration-none text-dark font-weight-bold btn btn-light">Click to load 15 more data</button>
	                    </div>
	                    <footer className="card bg-white mt-2 border-0 shadow-sm animate__animated animate__fadeInUp">
	                        <div className="card-body">
	                            <div className="row">
	                                <div className="col-12 col-sm-6 text-center text-sm-left">
	                                    <i className="far fa-copyright fs-20"></i>
	                                    <span className="ml-2 font-weight-bold">Copyright reserved 2020</span>
	                                </div>
	                                <div className="col-12 col-sm-6 text-center text-sm-right">Design by 
	                                    <a target="blank" href="https://github.com/ferdiansyah0611" className="font-weight-bold text-decoration-none ml-1">
	                                        <span>Ferdiansyah</span>
	                                    </a>
	                                </div>
	                            </div>
	                        </div>
	                    </footer>
	                </div>
	                <div className="mt-3 col-12 col-md-3 d-none d-xl-block">
	                    <div className="row">
	                    <SideRight/>
	                    </div>
	                </div>
	            </div>
        	</div>
        	<Modal/>
			</React.Fragment>
		)
	}
}
export default Home;