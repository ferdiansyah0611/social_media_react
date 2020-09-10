import React, {Component} from 'react'

export class CommentPostModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: props.apps,
			UrlCommentUpload: props.UrlCommentUpload
		}
		this.inputChange = this.inputChange.bind(this)
		this.inputFileChange = this.inputFileChange.bind(this)
		this.CreateComment = this.CreateComment.bind(this)
	}
	inputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    inputFileChange(event) {
        this.setState({[event.target.name]: event.target.files});
    }
	/*
	** Creating comment order by post id
	*/
	async CreateComment(event, $method = 'post') {
		event.preventDefault()
		let $url = this.state.UrlCommentUpload, Form = new FormData()
		Form.append('APP_DataPost_Comment_comment', this.state.APP_DataPost_Comment_comment)
		for(var i = 0; i < this.state.APP_DataPost_Comment_image.length; i++) {
			Form.append(`image[${i}]`, this.state.APP_DataPost_Comment_image[i])
		}
		for(var i = 0; i < this.state.APP_DataPost_Comment_video.length; i++) {
			Form.append(`video[${i}]`, this.state.APP_DataPost_Comment_video[i])
		}
		await axios({
			url: $url,
			method: $method,
			headers : {
                'Authorization' : Mystate.token
            },
            data: Form
		}).then(value => {
			console.log(value)
		}).catch(error => {
			console.error(error)
		})
	}
	render() {
		const COMMENT = () => {
			if(this.state.data) {
				this.state.data.map((value, i) => {
			    	return (
				        <li className="mb-2">
				            <div className="row">
				                <div className="col-2">
				                    <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="rounded-circle img-fluid" />
				                </div>
				                <div className="col-10">
				                    <p className="h5 text-dark">Ferdiansyah</p>
				                    <p className="mb-2 text-dark">{value.comment}</p>
				                    <img src={'/storage/image/' + value.image} alt="example"/>
				                    <p className="mb-1 fs-12 text-dark">
				                        At {value.created_at}
				                    </p>
				                    <p>
				                        <button className="btn btn-light border-0">
				                            <i className="far fa-thumbs-up"></i> 2
				                        </button>
				                        <button className="btn btn-light border-0">
				                            <i className="far fa-comment"></i> 2
				                        </button>
				                    </p>
				                </div>
				            </div>
				        </li>
			    	)
			    })
			}
		}
		return (
		    <div className="modal fade" id="modal-comment-post" tabIndex="-1" aria-labelledby="modal-comment-post-Label" aria-hidden="true">
		        <div className="modal-dialog modal-lg modal-dialog-centered">
		            <div className="modal-content">
		                <div className="modal-header">
		                    <h5 className="modal-title" id="modal-comment-post-Label">View</h5>
		                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		                        <span aria-hidden="true">&times;</span>
		                    </button>
		                </div>
		                <div className="modal-body">
		                    <div className="row">
		                        <div className="col-12 col-sm-12 fs-15">
		                            <div className="position-sticky default p-1 text-dark">
		                                <p>Content in here</p>
		                                <div className="col-12">
		                                    <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="img-fluid" />
		                                </div>
		                            </div>
		                        </div>
		                        <div className="col-12 col-sm-12 p-1">
		                            <div className="position-sticky p-3 default shadow-sm overflow-y-auto mh-750px">
		                                <ul className="list-unstyled">
			                                {COMMENT()}
		                                </ul>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                <div className="modal-footer border-0">
		                    <div className="row">
		                        <div className="col-12 col-sm-10">
		                            <form onSubmit={this.CreateComment}>
		                                <textarea onChange={this.inputChange} name="APP_DataPost_Comment_comment" className="form-control mb-1 mh-300px" rows="3" placeholder="Type here to comment"></textarea>
		                                <div className="form-file form-file-sm mt-2">
	                                  			<input onChange={this.inputFileChange} name="APP_DataPost_Comment_image" type="file" className="form-file-input" id="image_upload_comment_post" accept=".jpg,.png,.jpeg" multiple/>
	                                  			<label className="form-file-label" htmlFor="image_upload_comment_post">
	                                  			    <span className="form-file-text">Choose file image...</span>
	                                  			    <span className="form-file-button">Browse</span>
	                                  			</label>
	                              			</div>
	                              			<div className="form-file form-file-sm mt-2">
	                                  			<input onChange={this.inputFileChange} name="APP_DataPost_Comment_video" type="file" className="form-file-input" id="video_upload_comment_post" accept=".mp4" multiple/>
	                                  			<label className="form-file-label" htmlFor="video_upload_comment_post">
	                                  			    <span className="form-file-text">Choose file video...</span>
	                                  			    <span className="form-file-button">Browse</span>
	                                  			</label>
	                              			</div>
		                            </form>
		                        </div>
		                        <div className="col-12 col-sm-2">
		                            <button className="btn btn-primary w-100 h-100">
		                                <span className="material-icons fs-30">send</span>
		                            </button>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		)
	}
}

export class LikePostModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: props.apps
		}
	}
	render() {
		const LIKE = () => {
			if(this.state.data) {
				this.state.data.map((value, i) => {
					console.log(value)
				})
			}
		}
		return (
			<div className="modal fade" id="modal-like-post" tabIndex="-1" aria-labelledby="modal-like-post-Label" aria-hidden="true">
				<div className="modal-dialog">
				    <div className="modal-content">
				        <div className="modal-header">
				            <h5 className="modal-title" id="modal-like-post-Label">1000 like</h5>
				            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				                <span aria-hidden="true">&times;</span>
				            </button>
				        </div>
				        <div className="modal-body">
				            <div className="row mb-4">
				                <div className="col">
				                    <ul className="list-unstyled">
				                        <li className="list-like-post mt-1">
				                            <div className="row">
				                                <div className="col-2">
				                                    <img src="./media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="img-fluid rounded-circle" style={{maxHeight: '60px'}} />
				                                </div>
				                                <div className="col-10 p-0">
				                                    <p className="mt-3">
				                                        <a href="/ferdiansyah" className="text-decoration-none text-dark">Ferdiansyah</a>
				                                    </p>
				                                </div>
				                            </div>
				                        </li>
				                    </ul>
				                </div>
				            </div>
				        </div>
				    </div>
				</div>
	    	</div>
		)
	}
}

export class SharePostModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: props.apps
		}
	}
	render() {
		return (
			<div className="modal fade" id="modal-share-post" tabIndex="-1" aria-labelledby="modal-share-post-Label" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
				    <div className="modal-content">
				        <div className="modal-header">
				            <h5 className="modal-title" id="modal-share-post-Label">Share to</h5>
				            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				                <span aria-hidden="true">&times;</span>
				            </button>
				        </div>
				        <div className="modal-body">
				            <div className="row text-center fs-30">
				                <div className="col">
				                    <a href="/social-media">
				                        <i className="fab fa-facebook"></i>
				                    </a>
				                </div>
				                <div className="col">
				                    <a href="/social-media">
				                        <i className="fab fa-twitter"></i>
				                    </a>
				                </div>
				                <div className="col">
				                    <a href="/social-media">
				                        <i className="fab fa-instagram"></i>
				                    </a>
				                </div>
				                <div className="col">
				                    <a href="/social-media">
				                        <i className="fab fa-pinterest"></i>
				                    </a>
				                </div>
				            </div>
				        </div>
				    </div>
				</div>
			</div>
		)
	}
}