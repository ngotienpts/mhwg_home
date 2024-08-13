document.addEventListener("DOMContentLoaded", function () {
    // Tập hợp tất cả các phần tử cần sử dụng
    const bodyContainer = document.querySelector('body')
    const backTop = document.querySelector("#back-top");
    const stickyHeaderPC = document.querySelector(".js__stickyHeader");
    const video169s = document.querySelectorAll(".js__video169");
    // search
    const searchContainer = document.querySelector(".js__searchContainer")
    // show sub menu
    const dropdownSubMenu = document.querySelectorAll(".js__dropDown");
    const subMenu = document.querySelector(".js__clickShowMenuMb");

    // popup
    const popupVideo = document.querySelector('.js__popupVideo')
    const showPopupVideo = document.querySelector('.js__showPopupVideo')
    const popupInfoContainers = document.querySelectorAll('.js__showPopupInfoContainer')


    const popupSearch = document.querySelector('.js__popupSearch')
    const showPopupSearch = document.querySelector('.js__showPopupSearch')


    // slide
    const fiveSlides = document.querySelectorAll(".js__fiveSlidesContainer");
    const fourSlides = document.querySelectorAll(".js__fourSlidesContainer");


    // Xử lý sự kiện khi nhấn nút "back to top"
    function handleBackTop() {
        if(!backTop) return;
        
        backTop.onclick = function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };
        
    }

    // Sử lý sự kiện show popup video
    function handlePopupVideo() {
        if(!popupVideo || !showPopupVideo) return

        var closePopup = popupVideo.querySelector('.js__closePopup')
        

        showPopupVideo.onclick = function() {
            popupVideo.classList.add('active')
        }
        
        closePopup.onclick = function() {
            var iframe = document.getElementById("videoFrame");
            var videoSrc = iframe.src;
            iframe.src = "";
            iframe.src = videoSrc;
            popupVideo.classList.remove('active')
        }
    }
    // Sử lý sự kiện show popup search
    function handlePopupSearch() {
        if(!popupSearch || !showPopupSearch) return

        var closePopup = popupSearch.querySelector('.js__closePopup')
        var inputSearch = popupSearch.querySelector('.js__input')

        showPopupSearch.onclick = function() {
            popupSearch.classList.add('active')
            bodyContainer.style.overflow = 'hidden'
            inputSearch.focus()
        }
        
        closePopup.onclick = function() {
            popupSearch.classList.remove('active')
            bodyContainer.style.overflow = 'auto'
            inputSearch.value = ''
        }
    }
    // Sử lý sự kiện show popup info
    function handlePopupInfo() {
        if(!popupInfoContainers) return
        popupInfoContainers.forEach((popupInfoContainer)=>{
            var closePopup = popupInfoContainer.querySelector('.js__closePopup')
            var showPopup = popupInfoContainer.querySelector('.js__showPopupInfo')
            var popupContent = popupInfoContainer.querySelector('.js__popupInfo')
    
            showPopup.onclick = function() {
                popupContent.classList.add('active')
                bodyContainer.style.overflow = 'hidden'
            }
            
            closePopup.onclick = function() {
                popupContent.classList.remove('active')
                bodyContainer.style.overflow = 'auto'
            }
        })
    }



    // Xử lý sự kiện khi nhấn nút search trên thanh navbar
    function handleSearchNavbar() {
        if(!searchContainer) return

        var searchIcon = searchContainer.querySelector('.js__searchIcon')
        var closeSearch = searchContainer.querySelector('.js__closeSearch')
        var searchInput = searchContainer.querySelector('.js__searchInput')

        searchIcon.onclick = function() {
            searchContainer.classList.add('active')
            searchInput.focus()
        }
        closeSearch.onclick = function() {
            if(searchContainer.closest('.active')){
                searchContainer.classList.remove('active')
                searchInput.value = ''
            }
        }
    }
    // xử lý sự kiện để show sub menu
    function handleShowSubMenu() {
        if (!subMenu) return;
        var closeSubMenu = document.querySelector(".js__closeSubMenu");
        var overlay = document.querySelector(".js__overlay");
        var parentBox = subMenu.parentElement;

        subMenu.onclick = function () {
            this.parentElement.classList.add("active");
            document.querySelector("body").style.overflow = "hidden";
        };
        closeSubMenu.onclick = function () {
            parentBox.classList.remove("active");
            document.querySelector("body").style.overflow = "auto";
        };
        overlay.onclick = function () {
            parentBox.classList.remove("active");
            document.querySelector("body").style.overflow = "auto";
        };
    }


    // Xử lý sự kiện để show dropdown submenu
    function handleShowDropdownSubMenu() {
        dropdownSubMenu &&
            dropdownSubMenu.forEach((item) => {
                var parent = item.parentElement;
                var nextEle = parent.querySelector(".js__listSubMenu");
                item.onclick = function () {
                    parent.classList.toggle("active");
                    if (nextEle.style.maxHeight) {
                        nextEle.style.maxHeight = null;
                    } else {
                        nextEle.style.maxHeight = nextEle.scrollHeight + "px";
                    }
                };
            });
    }

    // Xử lý video tỉ lệ 16:9
    function handleVideo169() {
        if (video169s) {
            video169s.forEach((video169) => {
                var videos = video169.querySelectorAll("iframe");
                if (videos) {
                    videos.forEach((video) => {
                        var w = video.offsetWidth;
                        video.style.height = (w * 9) / 16 + "px";
                    });
                }
            });
        }
    }

    // Xử lý thanh header dính
    function handleStickyHeader() {
        if (stickyHeaderPC) {
            const isSticky = scrollY > 100;
            stickyHeaderPC.classList.toggle("sticky", isSticky);
        }
    }
    // Hàm hiển thị nút backTop dựa trên vị trí cuộn trang
    function handleBackTopVisibility() {
        if (backTop) {
            if (
                document.body.scrollTop > 300 ||
                document.documentElement.scrollTop > 300
            ) {
                backTop.style.opacity = 1;
                backTop.style.visibility = "visible";
            } else {
                backTop.style.opacity = 0;
                backTop.style.visibility = "hidden";
            }
        }
    }

    // khởi tạo slider với 5 item
    function initSliderFiveItems() {
        if (fiveSlides) {
            fiveSlides.forEach((item) => {
                var slider = item.querySelector(".js__fiveSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    slidesPerGroup: 1,
                    loop:true,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      },
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                            
                        },
                        768: {
                            slidesPerView: 3,
                            
                        },
                        1024: {
                            slidesPerView: 4,
                            
                        },
                        1200: {
                            slidesPerView: 5,
                            
                        },
                    },
                });
            });
        }
    }
    // khởi tạo slider với 4 item
    function initSliderFourItems() {
        if (fourSlides) {
            fourSlides.forEach((item) => {
                var slider = item.querySelector(".js__fourSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    slidesPerGroup: 1,
                    loop:true,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                      },
                    // autoplay: {
                    //     delay: 5000,
                    //     disableOnInteraction: false,
                    //     pauseOnMouseEnter: true,
                    //   },
                      
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                            
                        },
                        768: {
                            slidesPerView: 2,
                            
                        },
                        1024: {
                            slidesPerView: 3,
                            
                        },
                        1200: {
                            slidesPerView: 4,
                            
                        },
                    },
                });
            });
        }
    }
    // Xử lý sự kiện khi cuộn trang
    function handleWindowScroll() {
        window.onscroll = function () {
            handleStickyHeader();
            handleBackTopVisibility()
        };
    }

    // Khởi tạo tất cả các chức năng
    function initApp() {
        handleBackTop();
        handleShowSubMenu();
        handleShowDropdownSubMenu();
        handleVideo169();
        initSliderFourItems();
        initSliderFiveItems();
        handlePopupVideo();
        handlePopupSearch();
        handlePopupInfo();
        // scroll
        handleWindowScroll();
        handleSearchNavbar();
    }

    // Bắt đầu khởi tạo ứng dụng
    initApp();
});
