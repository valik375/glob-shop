window.onload = () => {

    const collectionsSwiper = new Swiper('.collections__swiper', {
        observer: true,
        observeParents: true,
        speed: 400,
        spaceBetween: 8,
        freeMode: true,
        grabCursor: true,
        slidesPerView: 1.68,
        scrollbar: {
            el: '.collections__swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            700: {
                slidesPerView: 3.39,
                observer: true
            },
            1200: {
                slidesPerView: 4,
                grabCursor: false,
                observer: true
            },
        }
    });

    const topCategoriesSwiper = new Swiper('.top-categories__swiper', {
        observer: true,
        observeParents: true,
        speed: 400,
        spaceBetween: 6,
        freeMode: true,
        grabCursor: true,
        slidesPerView: 1.5,
        scrollbar: {
            el: '.top-categories__swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            700: {
                slidesPerView: 3.09,
                observer: true,
            },
            1200: {
                slidesPerView: 5,
                grabCursor: false,
                observer: true,
            },
        }
    });

    const companiesSliderSwiper = new Swiper('.companies-slider__swiper', {
        observer: true,
        observeParents: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1200,
        autoHeight: true,
        pagination: {
            el: '.companies-slider__pagination',
            clickable: true,
            bulletClass: 'companies-slider__pagination-bullet',
            bulletActiveClass: 'companies-slider__pagination-bullet_active',
            type: 'bullets',
        },
        breakpoints: {
            700: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 70,
                autoHeight: false,
            },
            1200: {
                slidesPerView: 4,
                slidesPerGroup: 2,
                spaceBetween: 70,
                autoHeight: false,
                grabCursor: false,
            }
        }
    });

    const linksSectionSwiper = new Swiper('.links-section__swiper', {
        observer: true,
        observeParents: true,
        speed: 400,
        spaceBetween: 5,
        freeMode: true,
        grabCursor: true,
        slidesPerView: "auto",
    });

    const inspirationSwiper = new Swiper('.inspiration__swiper', {
        observer: true,
        observeParents: true,
        speed: 400,
        spaceBetween: 8,
        freeMode: true,
        grabCursor: true,
        slidesPerView: 1.21,
        scrollbar: {
            el: '.inspiration__swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            700: {
                slidesPerView: 2.45,
                observer: true,
            },
            1200: {
                slidesPerView: 4,
                grabCursor: false,
                observer: true,
            },
        }
    });

    window.addEventListener('resize', () => {

        collectionsSwiper.init()
        topCategoriesSwiper.init()
        companiesSliderSwiper.init()
        linksSectionSwiper.init()
        inspirationSwiper.init()

    })
}