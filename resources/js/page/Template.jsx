import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import './Home.css'
import lava from './APP'
import Mystate from '../components/State'

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.onLogOut = this.onLogOut.bind(this);
    }
    componentDidMount() {
        lavaInstance.theme('light')
        lavaInstance.required()
        lavaInstance.indexPage()

        var sidebar = document.querySelector('#sidebar')
		var opacitySidebar = document.querySelector('.opacity-sidebar')
		var ShowSidebar = document.querySelector('.sidebar-menu')
		var sidebarClose = document.querySelector('.sidebar-close')
		
		if (sidebar) {
		    sidebar.addEventListener('click', (event) => {
		        L('.sidebar-menu').addClass('shadow')
		        if (document.querySelector('#sidebar i').classList.contains('fa-bars')) {
		            L('#sidebar i').removeClass('fa-bars')
		            L('#sidebar i').addClass('fa-arrow-right')
		            // styling
		            ShowSidebar.style.opacity = 1
		            ShowSidebar.style.marginLeft = 'calc(100% - 300px)'
		            ShowSidebar.style.zIndex = 999999
		            ShowSidebar.style.visibility = 'visible'
		            document.querySelector('.sidebar-menu div').style.opacity = 1
		            opacitySidebar.style.marginLeft = 'calc(100% - 100%)'
		            opacitySidebar.style.zIndex = 99999
		            opacitySidebar.style.opacity = 0.5
		            opacitySidebar.style.display = 'block'
		        } else
		        if (document.querySelector('#sidebar i').classList.contains('fa-arrow-right')) {
		            L('#sidebar i').removeClass('fa-arrow-right')
		            L('#sidebar i').addClass('fa-bars')
		            L('.sidebar-menu').removeClass('shadow')
		            ShowSidebar.style.marginLeft = '100%'
		            ShowSidebar.style.zIndex = -11
		            ShowSidebar.style.visibility = 'hidden'
		            opacitySidebar.style.marginLeft = '100%'
		            opacitySidebar.style.zIndex = -10
		            opacitySidebar.style.display = 'none'
		        }
		    })
		}
    }
    onLogOut(event) {
        if (window.localStorage.getItem('token') && window.localStorage.getItem('user')) {
        	if(confirm('Do you want exit this application ?')) {
	        	window.localStorage.removeItem('token');
	        	window.localStorage.removeItem('user');
	        	window.location.href = '/';
        	}
        }
    }
    render() {
        return (
            <Fragment>
			<nav className="navbar navbar-light bg-white fixed-top shadow-sm pl-0 pl-md-5 pr-0 pr-md-5 d-none d-xl-block">
			    <div className="col-4 float-left d-none d-md-none d-xl-block">
			        <a href="#" className="float-left col-2 p-0 text-dark" title="Logo">
			            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 118 94" role="img">
			                <title>Bootstrap</title>
			                <path 
			                    fillRule="evenodd"
			                    clipRule="evenodd"
			                    d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
			                    fill="currentColor">
			                </path>
			            </svg>
			        </a>
			        <div className="col-9 float-left">
			            <form className="form-search">
			                <input type="search" name="search" aria-label="search" aria-describedby="icon-1" list="datalistOptions" className="form-control nav-search" placeholder="What do you search" />
			                <datalist id="datalistOptions">
			                    <option value="Friends 1"/>
			                    <option value="Friends 2"/>
			                    <option value="Friends 3"/>
			                    <option value="Friends 4"/>
			                    <option value="Friends 5"/>
			                </datalist>
			                <div className="opacity-search-none"></div>
			                <div className="position-fixed bg-white d-none col-10 offset-1 left-0 search-data" style={{top: '80px',zIndex: 99}}>
			                    <div className="card border-0 shadow-sm">
			                        <div className="card-header bg-white">
			                            <div className="row">
			                                <div className="col">
			                                    <h5 className="modal-title" id="modal-story-Label">Search : </h5>
			                                </div>
			                                <div className="col text-right">
			                                    <button type="button" className="close close-search" data-dismiss="modal" aria-label="Close">
			                                        <span aria-hidden="true">&times;</span>
			                                    </button>
			                                </div>
			                            </div>
			                        </div>
			                        <div className="card-body">
			                            <div className="row">
			                                <div className="col">
			                                    <div className="input-group mb-1">
			                                        <select className="form-select" aria-label=".form-select-sm">
			                                            <option>Choose time...</option>
			                                            <option value="">Latest</option>
			                                            <option value="Latest">Older</option>
			                                            <option value="">Random</option>
			                                        </select>
			                                    </div>
			                                </div>
			                                <div className="col">
			                                    <div className="input-group mb-1">
			                                        <select className="form-select" aria-label=".form-select-sm">
			                                            <option>Choose filtering...</option>
			                                            <option value="">People</option>
			                                            <option value="">Page</option>
			                                            <option value="">Group</option>
			                                        </select>
			                                    </div>
			                                </div>
			                            </div>
			                            <div className="mt-3">
			                                <div className="position-sticky default overflow-auto p-3" style={{maxHeight: '430px'}}>
			                                    <div className="row">
			                                        <div className="col-12">
			                                            <p className="h5 mb-0">People :</p>
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
			                                                <div className="col-12 text-center mt-2">
			                                                    <button type="button" className="text-decoration-none text-dark font-weight-bold btn btn-light">Click to load 15 more data</button>
			                                                </div>
			                                            </div>
			                                        </div>
			                                        <div className="dropdown-divider"></div>
			                                        <div className="col-12 mt-2">
			                                            <p className="h5 mb-0">Pages :</p>
			                                            <div className="row">
			                                                <div className="col-3 border border-light mt-2">
			                                                    <img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="img-fluid mt-1" />
			                                                    <p className="mt-2 mb-1 text-center text-truncate">Ferdiansyah</p>
			                                                    <p className="mb-0 text-truncate fs-14">
			                                                        <i className="fas fa-user-friends pr-1"></i>
			                                                        15 followers
			                                                    </p>
			                                                    <p className="mb-1 text-truncate fs-14">
			                                                        <i className="fas fa-location-arrow pr-1"></i>
			                                                        United States
			                                                    </p>
			                                                    <button type="button" className="btn-sm w-100 btn-primary mb-1">Follow</button>
			                                                    <button type="button" className="btn-sm w-100 btn-info">Check Pages</button>
			                                                </div>
			                                                <div className="col-12 text-center mt-2">
			                                                    <button type="button" className="text-decoration-none text-dark font-weight-bold btn btn-light">Click to load 15 more data</button>
			                                                </div>
			                                            </div>
			                                        </div>
			                                        <div className="dropdown-divider"></div>
			                                        <div className="col-12 mt-2">
			                                            <p className="h5 mb-0">Group :</p>
			                                            <div className="row">
			                                                <div className="col-3 border border-light mt-2">
			                                                    <img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="img-fluid mt-1" />
			                                                    <p className="mt-2 mb-1 text-center text-truncate">Laravel Indonesia 1</p>
			                                                    <p className="mb-0 text-truncate fs-14">
			                                                        <i className="fas fa-user-friends pr-1"></i>
			                                                        15 members
			                                                    </p>
			                                                    <p className="mb-1 text-truncate fs-14">
			                                                        <i className="fas fa-location-arrow pr-1"></i>
			                                                        United States
			                                                    </p>
			                                                    <button type="button" className="btn-sm w-100 btn-primary mb-1">Enter The Group</button>
			                                                    <button type="button" className="btn-sm w-100 btn-info">Check Group</button>
			                                                </div>
			                                                <div className="col-12 text-center mt-2">
			                                                    <button type="button" className="text-decoration-none text-dark font-weight-bold btn btn-light">Click to load 15 more data</button>
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </form>
			        </div>
			    </div>
			    <div className="col-12 col-md-12 col-xl-4 float-left text-center icon-24 p-0">
			        <div className="dropdown">
			        	<Link to="/home" className="nav-link d-none d-xl-inline-block active pb-0 text-center">
			        	    <span className="material-icons text-primary">web</span>
			        	</Link>
			            <a href="#" className="nav-link d-none d-xl-inline-block dropdown-toggle after-none pb-0 text-center" id="friends_request" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			                <span className="material-icons text-primary">people</span>
			                <span className="badge bg-danger position-absolute fs-12">2</span>
			            </a>
			            <div className="dropdown-menu mt-3 p-2 border-0 shadow bg-white" aria-labelledby="friends_request">
			                <div className="col-12">
			                    <ul className="list-unstyled position-sticky friend-request">
			                        <li className="pt-1">
			                            <div className="row">
			                                <div className="col-3">
			                                    <img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="img-fluid rounded-circle"/>
			                                </div>
			                                <div className="col-9">
			                                    <a href="/ferdiansyah" className="text-decoration-none text-dark">Ferdiansyah invite you to be friends</a>
			                                    <p>
			                                        <button className="btn-sm btn-primary border-0">Confirm</button>
			                                        <button className="btn-sm btn-danger border-0">Decline</button>
			                                    </p>
			                                </div>
			                            </div>
			                        </li>
			                        <li className="pt-1">
			                            <div className="row">
			                                <div className="col-3">
			                                    <img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="img-fluid rounded-circle"/>
			                                </div>
			                                <div className="col-9">
			                                    <a href="/ferdiansyah" className="text-decoration-none text-dark">Ferdiansyah invite you to be friends</a>
			                                    <p>
			                                        <button className="btn-sm btn-primary border-0">Confirm</button>
			                                        <button className="btn-sm btn-danger border-0">Decline</button>
			                                    </p>
			                                </div>
			                            </div>
			                        </li>
			                    </ul>
			                </div>
			            </div>
			            <Link to="/chat" className="nav-link d-none d-xl-inline-block pb-0 text-center">
			                <span className="material-icons text-primary">chat</span>
			            </Link>
			            <Link to="/notification" className="nav-link d-none d-xl-inline-block pb-0 text-center">
			                <span className="material-icons text-primary">notifications_none</span>
			            </Link>
			        </div>
			    </div>
			    <div className="col-4 float-left d-none d-md-none d-xl-block text-right">
			        <div className="dropdown dropdown-nav-right open">
			            <a href="#" className="dropdown-toggle text-decoration-none text-dark" id="dropdown_menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			                <img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="rounded-circle"/> Ferdiansyah
			            </a>
			            <div className="dropdown-menu mt-3 shadow border-0" aria-labelledby="dropdown_menu">
			                <a className="dropdown-item" href="./view-profile"><i className="fas fa-user mr-3"></i> Profile</a>
			                <a className="dropdown-item" href="./setting.php"><i className="fas fa-cog mr-3"></i> Setting</a>
			                <a className="dropdown-item pointer" onClick={this.onLogOut}><i className="fas fa-sign-out-alt mr-3"></i> Logout</a>
			            </div>
			        </div>
			    </div>
			</nav>
			<div className="fixed-top bg-white shadow-sm d-block d-xl-none">
			    <div className="row text-center">
			        <Link to="/home" className="nav-link fs-20 col active">
			            <i className="far fa-newspaper text-primary"></i>
			        </Link>
			        <Link to="/chat" className="nav-link fs-20 col">
			            <i className="far fa-comment-alt text-primary"></i>
			        </Link>
			        <Link to="/notification" className="nav-link fs-20 col">
			            <i className="far fa-bell text-primary"></i>
			        </Link>
			        <span href="#" className="nav-link fs-20 col pointer" id="sidebar">
			            <i className="fas fa-bars text-primary"></i>
			        </span>
			    </div>
    			<div className="opacity-sidebar"></div>
			    <div className="sidebar-menu bg-white">
			        <div className="col-12 h-100 p-0">
			            <div className="position-sticky overflow-y-auto default menu-overflow">
			                <ul className="list-unstyled ul-menu-mobile">
			                    <li>
			                        <div className="dropdown">
			                            <a href="#" className="nav-link text-dark dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
			                                <img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="profile" className="rounded-circle sidebar-profile" />
			                                <span className="font-weight-normal">Ferdiansyah</span>
			                            </a>
			                            <ul className="dropdown-menu shadow border-0 sidebar-profile-list" aria-labelledby="dropdownMenuLink">
			                                <li><a className="dropdown-item" href="./view-profile.php">Profile</a></li>
			                                <li><a className="dropdown-item" href="./setting.php">Setting</a></li>
			                                <li><a className="dropdown-item" onClick={this.onLogOut}>Logout</a></li>
			                            </ul>
			                        </div>
			                    </li>
			                    <li>
			                        <span data-target="#multiCollapseExample" className="nav-link text-dark" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="multiCollapseExample<?= $i;?>">
			                            <span className="material-icons fs-30">people_alt</span>
			                            <span className="position-absolute ml-14px mt-1">Pages</span>
			                        </span>
			                        <div className="collapse multi-collapse shadow-sm" id="multiCollapseExample">
			                            <ul className="list-unstyled menu-mobile-ul">
			                                <li>
			                                    <a href="" className="text-dark nav-link">
			                                        <span className="material-icons fs-30">people_alt</span>
			                                        <span className="text-decoration-none position-absolute ml-14px mt-1">Pages 1</span>
			                                    </a>
			                                </li>
			                                <li>
			                                    <a href="" className="text-dark nav-link">
			                                        <span className="material-icons fs-30">people_alt</span>
			                                        <span className="text-decoration-none position-absolute ml-14px mt-1">Pages 1</span>
			                                    </a>
			                                </li>
			                            </ul>
			                        </div>
			                    </li>
			                </ul>
			            </div>
			        </div>
			    </div>
			</div>
			</Fragment>
        )
    }
}

export class SideRight extends Component {
    constructor(props) {
        super(props)
        this.state = {
        	APP_Data_Page: [],
        	PageUrlLatest: '/api/page-data?page=1',
        }
        this.NextPage = this.NextPage.bind(this)
    }
    componentDidMount() {
    	this.GET_PAGE();
    	lavaInstance.stickyScroll({
    		query: '.position-sticky.scroll'
		});
    }
    async GET_PAGE($method = 'get') {
		await axios({
			url: this.state.PageUrlLatest,
			method: $method,
			headers : {
                'Authorization' : Mystate.token
            }
		}).then(value => {
			let DataEach = value.data.data, Base = value.data;
			this.setState(state => {
				return{ APP_Data_Page: DataEach, PageUrlLatest: Base.next_page_url }
			})
		}).catch(error => {
			console.error(error)
		})
	}
	async NextPage(event, $method = 'Get') {
		await axios({
			url: this.state.PageUrlLatest,
			method: $method,
			headers : {
                'Authorization' : Mystate.token
            }
		}).then(value => {
			let DataEach = value.data.data, Base = value.data;
			this.setState(state => {
				return{ APP_Data_Page: this.state.APP_Data_Page.concat(DataEach), PageUrlLatest: Base.next_page_url }
			})
		}).catch(error => {
			console.error(error)
		})
	}
    render() {
    	const PageDataList = this.state.APP_Data_Page.map((value, i) => {
    		return <Link key={i} to={`/pages/${value.name}`} className="nav-link p-3 text-dark text-decoration-none"><i className="fas fa-user pr-3"></i> {value.name}</Link>
		})
        return (
            <Fragment>
			<div className="position-fixed col-2 sideright">
			    <div className="position-sticky scroll animate__animated animate__backInRight">
			        <h6 className="p-3 text-dark">
			            <i className="fas fa-user pr-3"></i> My Pages
			        </h6>
			        {PageDataList}
			        <button onClick={this.NextPage} className="btn btn-light w-100 text-center">Show more page</button>
			    </div>
			</div>
			<div className="position-fixed col-1 sideright-el-2 right-0">
			    <div className="position-sticky scroll animate__animated animate__backInRight">
			        <ul className="list-unstyled list-online">
			            <li className="pt-2 pointer">
			                <img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="rounded-circle w-100" />
			            </li>
			        </ul>
			    </div>
			</div>
			</Fragment>
        )
    }
}

export class SideLeft extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
    	lavaInstance.stickyScroll({
    		query: '.position-sticky.scroll'
		})
    }
    render() {
        return (
            <div className="position-fixed col-3 animate__animated animate__backInLeft sideleft">
			    <div className="position-sticky scroll">
			        <a href="" className="nav-link text-dark text-decoration-none">
			            <img src="/media/steve-halama-T9A31lqrXnU-unsplash.jpg" alt="example" className="pr-1" width="50" /> 
			            <span>Ferdiansyah</span>
			        </a>
			        <a href="" className="nav-link text-dark text-decoration-none">
			            <span className="material-icons pr-2 pl-2 fs-30">people_alt</span>
			            <span className="position-absolute mt-1"> Friends</span>
			        </a>
			        <a href="" className="nav-link text-dark text-decoration-none">
			            <span className="material-icons pr-2 pl-2 fs-30">event</span>
			            <span className="position-absolute mt-1"> Events</span>
			        </a>
			        <a href="" className="nav-link text-dark text-decoration-none">
			            <span className="material-icons pr-2 pl-2 fs-30">read_more</span>
			            <span className="position-absolute mt-1"> View More</span>
			        </a>
			    </div>
			</div>
        )
    }
}
