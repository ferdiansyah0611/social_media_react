import React from 'react'
import Modal from 'bootstrap/js/dist/modal'
import Mystate from '../components/State'
import Card from '../components/post/Card'
import {NavBar, SideRight, SideLeft} from './Template'

let IDModalStory = '', ModalStory = '', LoadStory = true;

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			APP_Data_Story: [
				{image: 'Screenshot (110).png'},
				{image: 'Screenshot (110).png'},
				{image: 'Screenshot (110).png'},
				{image: 'Screenshot (110).png'},
				{image: 'Screenshot (110).png'},
				{image: 'Screenshot (110).png'}
			],
			APP_Data_Post: [],

			APP_PostUpload_description: '',
			APP_PostUpload_image: '',
			APP_PostUpload_video: '',
			APP_PostUpload_privacy: '',

			APP_DataPost_Comment_comment: '',
			APP_DataPost_Comment_image: '',
			APP_DataPost_Comment_video: '',

			APP_Image_Story: '',

			LatestPaginate_Story: '',
			DefaultPage: 1
		}
		this.inputChange = this.inputChange.bind(this)
		this.inputFileChange = this.inputFileChange.bind(this)
		this.CreatePostData = this.CreatePostData.bind(this)
		
		this.LikePost = this.LikePost.bind(this)
		this.ClickStory = this.ClickStory.bind(this)
	}
	componentDidMount() {
		document.title = 'Home';
		this.GetStory();
		IDModalStory = document.getElementById('modal-story');
		ModalStory = new Modal(IDModalStory, {keyboard: false})
		/*alert('Latest Scroll :' + window.pageYOffset)
		alert('Max scroll :' + document.body.scrollHeight)*/
		/*window.addEventListener('scroll', e => {
			console.log(e)
		})*/
	}
	inputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    inputFileChange(event) {
        this.setState({[event.target.name]: event.target.files});
    }
    /*
	** Creating data post to database
    */
	async CreatePostData(event, $url = '/api/post-data', $method = 'post') {
		event.preventDefault();
		event.persist();
		event.target[4].disabled = true;
		Swal.fire({
            title: 'Are you sure ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, posted now!'
        })
        .then((result) => {
		    if (result.value) {
				let Form = new FormData()
				Form.append('description', this.state.APP_PostUpload_description)
				for(var i = 0; i < this.state.APP_PostUpload_image.length; i++) {
					Form.append(`image[${i}]`, this.state.APP_PostUpload_image[i])
				}
				for(var i = 0; i < this.state.APP_PostUpload_video.length; i++) {
					Form.append(`video[${i}]`, this.state.APP_PostUpload_video[i])
				}
				Form.append('privacy', this.state.APP_PostUpload_privacy)
				const PUSH = async () => {
					await axios({
						url: $url,
						method: $method,
						headers : {
			                'Authorization' : Mystate.token
			            },
			            data: Form
					}).then(value => {
						console.log(value)
						event.target[4].disabled = false;
				        Swal.fire('Success!', value.message, 'success')
					}).catch(error => {
						console.error(error)
						event.target[4].disabled = false;
					})
				}
				PUSH()
		    }else{
		    	event.target[4].disabled = false;
		    }
        })
	}
	/*
	** Getter data story
	*/
	async GetStory($url = '/api/story-data?page=' + this.state.DefaultPage, $method = 'get') {
		await axios({
			url: $url,
			method: $method,
			headers : {
                'Authorization' : Mystate.token
            }
		}).then(value => {
			LoadStory = false;
			let DataEach = value.data.data;
			this.setState(state => {
				return{ APP_Data_Story: DataEach }
			})
		}).catch(error => {
			console.error(error)
		})
	}
	/*
	** Getter data post append to home pages
	*/
	async GET_POSTED($url = '/api/post-data?page=' + this.state.DefaultPage, $method = 'get') {
		await axios({
			url: $url,
			method: $method,
			headers : {
                'Authorization' : Mystate.token
            }
		}).then(value => {
			let DataEach = value.data.data;
			this.setState(state => {
				return{ APP_Data_Post: DataEach, DefaultPage: this.state.DefaultPage + 1 }
			})
		}).catch(error => {
			console.error(error)
		})
	}
	/*
	** Getter data post append to home pages if clicked
	*/
	async GET_POSTED_CLICK(event, $url = '/api/post-data?page=' + this.state.DefaultPage, $method = 'get') {
		await axios({
			url: $url,
			method: $method,
			headers : {
                'Authorization' : Mystate.token
            }
		}).then(value => {
			let DataEach = value.data.data;
			this.setState(state => {
				return{
					APP_Data_Post: this.state.APP_Data_Post.concat(DataEach),
					DefaultPage: this.state.DefaultPage + 1 }
			})
		}).catch(error => {
			console.error(error)
		})
	}
	/**
	 * Event click like post
	 */
	async LikePost(event, $method = 'post') {
		let $data = event.target.dataset, $url = '/api/post-like', $like = '';
		if($data.like == true) {
			$like = 0;
		}
		if($data.like == false) {
			$like = 1;
		}
		await axios({
			url: $url,
			method: $method,
			headers : {
				'Authorization' : Mystate.token
			},
			data: {
				sc_post_data_id: $data,
				like: $like
			}
		}).then(value => {
			let DataEach = value.message;
		}).catch(error => {
			console.error(error)
		})
	}
	/*
	** Event click story
	*/
	async ClickStory(event) {
		let e = event.target.src
		this.setState(state => {
			return {APP_Image_Story: e}
		})
		IDModalStory.addEventListener('show.bs.modal', events => {
			IDModalStory.querySelector('img').setAttribute('src', e)
			IDModalStory.querySelector('img').setAttribute('alt', e)
		})
		ModalStory.show()
	}
	render() {
		const MODAL = {
			/*
			** Modal Story View
			*/
			StoryView: () => {
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
				                            <img className="img-fluid" />
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
			}
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
		                            {LoadStory ? (
		                            	<React.Fragment>
		                            	<div className="col-3 float-left" style={{backgroundColor: 'whitesmoke', margin: '5px', height: '179.53px'}}>
		                            		<div className="d-flex justify-content-center" style={{marginTop: '70px'}}>
												<div className="spinner-border text-primary" role="status">
    												<span className="sr-only">Loading...</span>
  												</div>
											</div>
										</div>
		                            	<div className="col-3 float-left" style={{backgroundColor: 'whitesmoke', margin: '5px', height: '179.53px'}}>
		                            		<div className="d-flex justify-content-center" style={{marginTop: '70px'}}>
												<div className="spinner-border text-primary" role="status">
    												<span className="sr-only">Loading...</span>
  												</div>
											</div>
										</div>
		                            	<div className="col-3 float-left" style={{backgroundColor: 'whitesmoke', margin: '5px', height: '179.53px'}}>
		                            		<div className="d-flex justify-content-center" style={{marginTop: '70px'}}>
												<div className="spinner-border text-primary" role="status">
    												<span className="sr-only">Loading...</span>
  												</div>
											</div>
										</div>
		                            	<div className="col-3 float-left" style={{backgroundColor: 'whitesmoke', margin: '5px', height: '179.53px'}}>
		                            		<div className="d-flex justify-content-center" style={{marginTop: '70px'}}>
												<div className="spinner-border text-primary" role="status">
    												<span className="sr-only">Loading...</span>
  												</div>
											</div>
										</div>
		                            	</React.Fragment>
		                            ):
		                            this.state.APP_Data_Story.map((val, key) => {
		                            	if(val.image) {
			                            	return (
			                            		<img onClick={this.ClickStory} key={key} src={Mystate.pathImage + val.image} alt={val.image} className="col-3 float-left" />
			                            	)
		                            	}
		                            	if(val.video) {
			                            	return (
			                            		<video onClick={this.ClickStory} key={key} className="col-3 float-left" controls>
			                            			<source src={Mystate.pathVideo + val.video} type="video/mp4" />
			                            		</video>
			                            	)
		                            	}
		                            })}
		                            {LoadStory ?
		                            	(
		                            		<React.Fragment>
		                            		<img onClick={this.ClickStory} src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" style={{filter: 'blur(5px)'}} />
		                            		<img onClick={this.ClickStory} src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" style={{filter: 'blur(5px)'}} />
		                            		<img onClick={this.ClickStory} src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" style={{filter: 'blur(5px)'}} />
		                            		<img onClick={this.ClickStory} src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" style={{filter: 'blur(5px)'}} />
		                            		</React.Fragment>
		                            	):
		                            	(
		                            		<React.Fragment>
		                            		<img onClick={this.ClickStory} src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" />
		                            		<img onClick={this.ClickStory} src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" />
		                            		<img onClick={this.ClickStory} src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" />
		                            		<img onClick={this.ClickStory} src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="image" className="col-3 float-left" />
		                            		</React.Fragment>
		                            	)
		                        	}
	                            </div>
	                            <div className="next-story rounded-circle shadow-sm">
	                                <span className="material-icons p-1">chevron_right</span>
	                            </div>
	                            <div className="previous-story rounded-circle shadow-sm">
	                                <span className="material-icons p-1">chevron_left</span>
	                            </div>
	                            <form onSubmit={this.CreatePostData}>
	                                <div className="input-group mb-1">
	                                    <select onChange={this.inputChange} name="APP_PostUpload_privacy" className="form-select form-select-sm" aria-label=".form-select-sm">
	                                        <option>Choose privacy...</option>
	                                        <option value="onlyme">Only me</option>
	                                        <option value="friends">Fiends</option>
	                                        <option value="public">Public</option>
	                                    </select>
	                                </div>
	                                <textarea onChange={this.inputChange} name="APP_PostUpload_description" className="form-control mt-2" placeholder="What do you think now ?" rows="4"></textarea>
	                                <div className="form-file form-file-sm mt-2">
	                                    <input onChange={this.inputFileChange} name="APP_PostUpload_image" type="file" className="form-file-input" id="image_upload_post" accept=".jpg,.png,.jpeg" multiple/>
	                                    <label className="form-file-label" htmlFor="image_upload_post">
	                                        <span className="form-file-text">Choose file image...</span>
	                                        <span className="form-file-button">Browse</span>
	                                    </label>
	                                </div>
	                                <div className="form-file form-file-sm mt-2">
	                                    <input onChange={this.inputFileChange} name="APP_PostUpload_video" type="file" className="form-file-input" id="video_upload_post" accept=".mp4" multiple/>
	                                    <label className="form-file-label" htmlFor="video_upload_post">
	                                        <span className="form-file-text">Choose file video...</span>
	                                        <span className="form-file-button">Browse</span>
	                                    </label>
	                                </div>
	                                <div className="dropdown-divider"></div>
	                                <button type="submit" className="btn btn-primary w-100" disabled={false}>Post now</button>
	                            </form>
	                        </div>
	                    </div>
						<Card url="/api/post-data" UrlLikeShow="/api/post-like" UrlLikePost="" UrlComment="/api/post-comment" UrlCommentUpload="/api/post-comment"/>
	                    <footer className="card bg-white mt-2 border-0 shadow-sm animate__animated animate__fadeInUp">
	                        <div className="card-body">
	                            <div className="row">
	                                <div className="col-12 col-sm-6 text-center text-sm-left">
	                                    <i className="far fa-copyright fs-20"></i>
	                                    <span className="ml-2 font-weight-bold">Copyright reserved 2020</span>
	                                </div>
	                                <div className="col-12 col-sm-6 text-center text-sm-right">Development by 
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
        	<MODAL.StoryView/>
			</React.Fragment>
		)
	}
}
export default Home;