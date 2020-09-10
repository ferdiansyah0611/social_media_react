import React from 'react'
import {Link} from 'react-router-dom'
import Modal from 'bootstrap/js/dist/modal'
import Mystate from '../State'
import {SharePostModal, LikePostModal, CommentPostModal} from './Modal'

let ModalCommentPost = '', ModalLikePost = '', ModalSharePost = ''

class Card extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			url: props.url,
			urlLikeShow: props.UrlLikeShow,
			urlLikePost: props.UrlLikePost,
			urlComment: props.UrlComment,
			UrlCommentUpload: props.UrlCommentUpload,
			Data: [],
			DefaultPage: 1,

			APP_ModalPost_like: [],
			APP_ModalPost_comment: []
		}
		this.ReportUser = this.ReportUser.bind(this)
		this.BlockingUser = this.BlockingUser.bind(this)
		this.ClickModalPostLike = this.ClickModalPostLike.bind(this)
		this.LikePost = this.LikePost.bind(this)
		this.ClickModalPostComment = this.ClickModalPostComment.bind(this)
		this.Get_Posted_More = this.Get_Posted_More.bind(this)
	}
	componentDidMount() {
		this.loadedPost()
		ModalCommentPost = new Modal(document.getElementById('modal-comment-post'), {keyboard: false})
		ModalLikePost = new Modal(document.getElementById('modal-like-post'), {keyboard: false})
		ModalSharePost = new Modal(document.getElementById('modal-share-post'), {keyboard: false})
	}
	async ReportUser(event) {
		event.preventDefault();
		let e = event.target.dataset.id;
		Swal.fire({
            title: 'Are you sure ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, blocking now!',
        }).then((result) => {
		    if (result.value) {
		    	const reporting = async () => {
		    		let Form = new FormData()
		    		Form.append('report_user_id', e)
					await axios({
						url: '/api/user-report',
						method: 'post',
						headers: {
			                'Authorization' : Mystate.token
			            },
						data: Form
					}).then(value => {
						Swal.fire(
							'Success!',
							value.message,
							'success'
						)
					}).catch(error => {
						console.error(error)
					})
		    	}
		    	reporting();
		    }
		})
	}
	async BlockingUser(event) {
		event.preventDefault();
		let e = event;
		Swal.fire({
            title: 'Are you sure ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, blocking now!'
        })
        .then((result) => {
		    if (result.value) {
		    	const blocking = async () => {
		    		let Form = new FormData()
		    		Form.append('bloked_user_id', e.target.dataset.id)
					await axios({
						url: '/api/user-block',
						method: 'post',
						headers: {
			                'Authorization' : Mystate.token
			            },
						data: Form
					}).then(value => {
						Swal.fire('Success!',value.message, 'success')
					}).catch(error => {
						console.error(error)
					})
		    	}
		    	blocking();
		    }
		})
	}
	async loadedPost() {
		await axios({
			url: `${this.state.url}?page=${this.state.DefaultPage}`,
			method: 'get',
			headers : {
                'Authorization' : Mystate.token
            }
		}).then(value => {
			let DataEach = value.data.data;
			this.setState(state => {
				return{ Data: DataEach, DefaultPage: this.state.DefaultPage + 1 }
			})
		})
	}
	/*event listener*/
	async ClickModalPostLike(event, $method = 'get') {
		let $url = `${this.state.urlLikeShow}/${event.target.dataset.id}?page=1`;
		await axios({
			url: $url,
			method: $method,
			headers : {
                'Authorization' : Mystate.token
            }
		}).then(value => {
			let DataEach = value.data.data;
			this.setState(state => {
				return{ APP_ModalPost_like: DataEach }
			})
			ModalLikePost.show()
			console.log(DataEach)
		}).catch(error => {
			console.error(error)
		})
	}
	async LikePost(event, $method = 'post') {
		let $data = event.target.dataset, $url = this.state.urlLikePost, $like = '';
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
	async ClickModalPostComment(event, $method = 'get') {
		let $url = `${this.state.urlComment}/${event.target.dataset.id}?page=1`;
		await axios({
			url: $url,
			method: $method,
			headers : {
                'Authorization' : Mystate.token
            }
		}).then(value => {
			let DataEach = value.data.data;
			this.setState(state => {
				return{ APP_ModalPost_comment: DataEach }
			})
			ModalCommentPost.show()
		}).catch(error => {
			console.error(error)
		})
	}
	ClickSharePost() {
		ModalSharePost.show()
	}
	/*
	** Getter data post append to home pages if clicked
	*/
	async Get_Posted_More(event, $url = `${this.state.url}?page=` + this.state.DefaultPage, $method = 'get') {
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
					Data: this.state.Data.concat(DataEach),
					DefaultPage: this.state.DefaultPage + 1 }
			})
		}).catch(error => {
			console.error(error)
		})
	}
	/*rendering*/
	render() {
		let ImagePostCard = [], ConditionLike = [];
		const PostCard = this.state.Data.map((value, i) => {
			var ImageEach = () => {
				if(value.image) {
					ImagePostCard.push(JSON.parse(value.image))
					ConditionLike.push(false)
				}
			}
			ImageEach()
			return <div key={i} className="card bg-white mt-2 border-0 shadow-sm animate__animated animate__fadeInUp">
			    <div className="card-body">
			        <div className="row">
			            <div className="col-2 text-md-center">
			                <img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" className="rounded-circle avatar-post" alt="example" width="100%" />
			            </div>
			            <div className="col-5">
			                <p className="text-truncate mb-0">
			                    <Link to={'/profile/' + value.user_id} className="text-decoration-none text-dark">Ferdiansyah</Link>
			                </p>
			                <span className="p-0 text-truncate text-lowercase text-dark font-weight-light fs-13">{value.created_at}</span>
			            </div>
			            <div className="col-5">
			                <div className="dropdown dropleft float-right">
			                    <a className="btn btn-light rounded dropdown-toggle before-none" href="#" name="dropdownMenuLink3" id="dropdownMenuLink3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			                        <i className="fas fa-ellipsis-v"></i>
			                    </a>
			                    <div className="dropdown-menu dropdown-menu-right shadow border-0" aria-labelledby="dropdownMenuLink3">
			                        <a className="dropdown-item" href="#" data-id={value.id}>
			                            <span className="material-icons">save</span>
			                            <span className="position-absolute ml-1">Save link</span>
			                        </a>
			                        <a className="dropdown-item" href="#" data-id={value.id}>
			                            <span className="material-icons">remove_circle_outline</span>
			                            <span className="position-absolute ml-1">Hide post</span>
			                        </a>
			                        <a className="dropdown-item" href="#" data-id={value.id}>
			                            <span className="material-icons">person_remove</span>
			                            <span className="position-absolute ml-1">Unfollow</span>
			                        </a>
			                        <a className="dropdown-item" href="#" data-id={value.id}>
			                            <span className="material-icons">content_copy</span>
			                            <span className="position-absolute ml-1">Copy link</span>
			                        </a>
			                        <a onClick={this.ReportUser} className="dropdown-item" data-id={value.id}>
			                            <span className="material-icons">report</span>
			                            <span className="position-absolute ml-1">Report</span>
			                        </a>
			                    </div>
			                </div>
			            </div>
			            <div className="col-12 mt-1 text-dark fs-15">
			                {value.description}
			                <div className="row">
			                    {ImagePostCard[i].map((val, key) => {
				                    return (
				                    	<div key={key} className="col">
				                    		<img src={Mystate.pathImage + val} alt={val} className="img-fluid" />
				                    	</div>
				                    )
			                    })}
			                </div>
			            </div>
			        </div>
			    </div>
			    <div className="card-footer font-weight-light bg-transparent border-0">
			        <button onClick={this.ClickModalPostLike} data-id={value.id} type="button" className="text-dark btn border-0">1000 people like this post</button>
			        <div className="row">
			            <button onClick={this.LikePost} data-id={value.id} type="button" className="btn btn-outline-light text-dark border-0 col">
			                <i className="far fa-thumbs-up pl-1"></i>
			                1000
			            </button>
			            <button onClick={this.ClickModalPostComment} data-id={value.id} type="button" className="btn btn-outline-light text-dark border-0 col">
			                <i className="far fa-comment pl-1"></i>
			                10
			            </button>
			            <button onClick={this.ClickSharePost} type="button" className="btn btn-outline-light text-dark border-0 col">
			                <i className="far fa-share-square pl-1"></i>
			                10
			            </button>
			        </div>
			    </div>
			</div>
		})
		return (
			<React.Fragment>
				{PostCard}
				<div className="col-12 text-center mt-2">
	                <button onClick={this.Get_Posted_More} type="button" className="text-decoration-none text-dark font-weight-bold btn btn-light">Click to load 25 more data</button>
	            </div>
				<SharePostModal/>
				<LikePostModal apps={this.state.APP_ModalPost_like}/>
				<CommentPostModal apps={this.state.APP_ModalPost_comment} UrlCommentUpload={this.state.UrlCommentUpload}/>
			</React.Fragment>
		) 
	}
}

export default Card;