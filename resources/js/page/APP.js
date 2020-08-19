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

class lava {
    required() {
        L('.menu-overflow').attr('style', `height: auto;max-height: calc(${window.innerHeight}px - 46px);`)
        L('.form-search').on('submit', e => {
            e.preventDefault()
            L('.search-data').removeClass('d-none')
            L('.search-data').addClass('d-block')
            L('.opacity-search-none').addClass('opacity-search')
            L('.opacity-search-none').removeClass('opacity-search-none')
        })
        L('.close-search').on('click', e => {
            L('.search-data').removeClass('d-block')
            L('.search-data').addClass('d-none')
            L('.opacity-search').addClass('opacity-search-none')
            L('.opacity-search').removeClass('opacity-search')
        })
    }
    async stickyScroll($data = {}) {
        document.querySelectorAll($data.query).forEach((val, key) => {
            val.addEventListener('mousemove', function(e) {
                this.classList.add('overflow-auto')
            })
        })
        document.querySelectorAll($data.query).forEach((val, key) => {
            val.addEventListener('mouseleave', function(e) {
                this.classList.remove('overflow-auto')
            })
        })
    }
    theme($data = {}) {
        if ($data == 'dark') {
            document.body.classList.remove('bg-light')
            document.body.classList.add('bg-dark')
            document.querySelectorAll('.bg-white').forEach(v => {
                v.classList.remove('bg-white')
                v.classList.add('bg-dark')
            })
            document.querySelectorAll('.btn.btn-outline-light').forEach(v => {
                v.classList.remove('btn-outline-light')
                v.classList.add('btn-outline-primary')
            })
            document.querySelectorAll('.text-dark').forEach(v => {
                v.classList.remove('text-dark')
                v.classList.add('text-white')
            })
            document.querySelectorAll('nav.navbar div.col-12 div.dropdown a.nav-link span.text-primary').forEach(v => {
                v.classList.remove('text-primary')
                v.classList.add('text-white')
            })
            document.querySelectorAll('.parent-chat').forEach(v => {
                v.classList.remove('bg-white')
                v.classList.add('bg-gray')
            })
        }
        if ($data == 'light') {
            document.body.classList.remove('bg-dark')
            document.body.classList.add('bg-light')
            document.querySelectorAll('.bg-dark').forEach(v => {
                v.classList.remove('bg-dark')
                v.classList.add('bg-white')
            })
            document.querySelectorAll('.btn.btn-outline-primary').forEach(v => {
                v.classList.remove('btn-outline-primary')
                v.classList.add('btn-outline-light')
            })
            document.querySelectorAll('.text-white').forEach(v => {
                v.classList.remove('text-white')
                v.classList.add('text-dark')
            })
            document.querySelectorAll('nav.navbar div.col-12 div.dropdown a.nav-link span.text-white').forEach(v => {
                v.classList.remove('text-white')
                v.classList.add('text-primary')
            })
        }
    }
    async informationFixed($data = {}) {
        window.addEventListener('load', event => {
            var cover = document.querySelectorAll('.cover')[0].offsetHeight
            window.addEventListener('resize', event => {
                if (this.innerWidth < 924) {
                    document.querySelectorAll($data.visibility).forEach(val => {
                        val.style.visibility = 'hidden'
                    })
                }
            })
            window.addEventListener('scroll', event => {
                if (window.scrollY < cover + 23) {
                    document.querySelectorAll($data.visibility).forEach(val => {
                        val.style.visibility = 'visible'
                    })
                    L($data.instanceFixed).removeClass('d-block')
                    L($data.instanceFixed).addClass('d-none')
                    L($data.instanceFixed).removeClass('position-fixed')
                    document.querySelector($data.instanceFixed).style.zIndex = $data.zIndex_min
                    document.querySelector($data.instanceFixed).style.top = $data.top_min
                }
                if (window.scrollY > cover + 24) {
                    var _array = [];
                    if (window.innerWidth > 770) {
                        document.querySelectorAll($data.visibility).forEach(val => {
                            val.style.visibility = 'hidden'
                            _array = val.innerHTML
                        })
                    }
                    if (window.innerWidth < 769) {
                        document.querySelectorAll($data.visibility).forEach(val => {
                            val.style.visibility = 'visible'
                        })
                    }
                    document.querySelector($data.instanceFixed).innerHTML = _array
                    document.querySelector($data.instanceFixed).classList.remove('d-none')
                    document.querySelector($data.instanceFixed).classList.add('d-block')
                    document.querySelector($data.instanceFixed).classList.add('position-fixed')
                    document.querySelector($data.instanceFixed).classList.add('col-3')
                    document.querySelector($data.instanceFixed).style.zIndex = $data.zIndex_plus
                    document.querySelector($data.instanceFixed).style.top = $data.top_plus
                }
            })
        })
    }
    e() {
        return {
            onClick: ($data) => {
                document.querySelectorAll($data.query).forEach(v => {
                    v.addEventListener('click', event => {
                        $data.function(event, v)
                    })
                })
            },
            onHover: ($data) => {
                document.querySelectorAll($data.query).forEach(v => {
                    v.addEventListener('mousemove', event => {
                        $data.function(event, v)
                    })
                })
            },
            onRightClick: ($data) => {
                if (document.querySelectorAll($data.query)) {
                    document.querySelectorAll($data.query).forEach(v => {
                        v.addEventListener('contextmenu', event => {
                            event.preventDefault()
                            $data.function(event, v)
                        })
                    })
                }
            }
        }
    }
    chatPage($data = {}) {
        var _this = this;
        BalloonEditor.create(document.querySelector($data.ckeditorInit)).then(editor => {
            console.log(editor);
        }).catch(error => {
            console.error(error);
        });
        var chatTab = document.querySelector($data.listChatTab.query),
            clicked = document.querySelectorAll($data.listChatTab.onClick),
            closed = document.querySelector($data.listChatTab.clickClose)
        const rightClick = () => {
            _this.e().onRightClick({
                query: 'div.chat-message div.chat-me',
                function: (e) => {
                    var chatmenume = document.querySelector('.chatmenume');
                    chatmenume.classList.add('show')
                    chatmenume.style.left = 'calc(' + e.clientX + 'px - 160px)'
                    chatmenume.style.top = e.clientY + 'px'
                    document.body.addEventListener('click', e => {
                        chatmenume.classList.remove('show')
                    })
                }
            })
            _this.e().onRightClick({
                query: 'div.chat-message div.chat-friends',
                function: (e) => {
                    var chatmenufriends = document.querySelector('.chatmenufriends');
                    chatmenufriends.classList.add('show')
                    chatmenufriends.style.left = e.clientX + 'px'
                    chatmenufriends.style.top = e.clientY + 'px'
                    document.body.addEventListener('click', e => {
                        chatmenufriends.classList.remove('show')
                    })
                }
            })
            _this.e().onClick({
                query: $data.listChatTab.onClick,
                function: (e, value) => {
                    value.addEventListener('click', event => {
                        L($data.listChatTab.query).attr('style', `margin-left: 0; opacity: 1;visibility: visible`)
                        L($data.listChatTab.query).addClass('position-sticky')
                        value.style.marginLeft = '-100%'
                        closed.style.marginLeft = 0
                        closed.classList.add('bg-white', 'p-2')
                        L('.parent-chat').attr('style', 'z-index: -1;display: none;')
                        L('.card.chat div.card-footer').attr('style', 'display: none')
                        L('.profile-chat').removeClass('d-block')
                        L('.profile-chat').addClass('d-none')
                    })
                    closed.addEventListener('click', event => {
                        L($data.listChatTab.query).attr('style', `margin-left: -100%;opacity: 0;visibility: hidden`)
                        L($data.listChatTab.query).removeClass('position-sticky')
                        value.style.marginLeft = '0'
                        closed.style.marginLeft = '-100%'
                        closed.style.visibility = 'visible'
                        closed.classList.remove('bg-white', 'p-2')
                        L('.parent-chat').attr('style', 'z-index: 1;display: block;')
                        L('.card.chat div.card-footer').attr('style', 'display: block')
                        L('.profile-chat').addClass('d-block')
                    })
                }
            })
            _this.e().onRightClick({
                query: $data.listChatTab.query,
                function: (e, value) => {
                    L('.listnav').addClass('show')
                    L('.listnav').attr('style', `left:  ${e.clientX}px;top: ${e.clientY}px;transition: 0.2s all;`)
                    document.body.addEventListener('click', e => {
                        L('.listnav').removeClass('show')
                    })
                }
            })
        }
        rightClick()
    }
    notificationPage($data = {}) {
        var _this = this;
        _this.e().onRightClick({
            query: $data.notification.query,
            function: (e, value) => {
                L('.listnav').addClass('show')
                L('.listnav').attr('style', `left:  ${e.clientX}px;top: ${e.clientY}px;transition: 0.2s all;`)
                document.body.addEventListener('click', e => {
                    L('.listnav').removeClass('show')
                })
            }
        })
        _this.e().onHover({
            query: $data.notification.query,
            function: (e, value) => {
                e.preventDefault()
            }
        })
        L('.read-notification-all').on('click', e => {
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
                        Swal.fire(
                            'Readed!',
                            'Your notification has been read.',
                            'success'
                        )
                    }
                })
        })
        L('.remove-notification-all').on('click', e => {
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
                        Swal.fire(
                            'Removed!',
                            'Your notification has been remove.',
                            'success'
                        )
                    }
                })
        })
        L('.archive-notification-all').on('click', e => {
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
                        Swal.fire(
                            'Archived!',
                            'Your notification has been archived.',
                            'success'
                        )
                    }
                })
        })
    }
    indexPage() {
        var imgWidth = 154.5
        var arr = []
        L('.next-story').on('click', e => {
            var story = document.querySelector('.story').scrollLeft += imgWidth
        })
        L('.previous-story').on('click', e => {
            var story = document.querySelector('.story').scrollLeft -= imgWidth
            console.log(story)
        })
        L('.story img').on('click', e => {
            e.target.classList.forEach(v => {
                if (v == 'p-0') {
                    e.target.classList.remove('p-0')
                } else {
                    e.target.classList.add('p-0')
                }
            })
        })
    }
}
window.lavaInstance = new lava();
/*required*/
lavaInstance.stickyScroll({
    query: '.position-sticky.scroll'
})
export default lava;
