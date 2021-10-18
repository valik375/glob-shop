

const getSearchInput = document.querySelector('#search')
const getSearchForm = document.querySelector('.header__search-wrapper')
const getCardWrapper = document.querySelector('.header__cart-wrapper')
const getBurger = document.querySelector('.header__burger')
const getModalMenu = document.querySelector('.header__links-wrapper')
const getCatalogButtonOpen = document.querySelector('.header__link_catalog')
const getCatalogContainer = document.querySelector('.header__catalog')
const getCatalogButtonClose = document.querySelector('.header__catalog-btn-back')
const getSearchResults = document.querySelector('.header__search-result-wrapper')
const getHeaderBackDrop = document.querySelector('.header__backdrop')
const getBody = document.querySelector('body')


function changeInputFocus() {
    if (window.innerWidth < 480) {
        getSearchInput.addEventListener('focus', () => {
            getSearchForm.classList.add('header__search-wrapper_focus')
            getCardWrapper.classList.add('header__cart-wrapper_focus')
        })
        getSearchInput.addEventListener('blur', () => {
            getSearchForm.classList.remove('header__search-wrapper_focus')
            getCardWrapper.classList.remove('header__cart-wrapper_focus')
        })
    } else {
        return false;
    }
}

function setBodyHiddenOverflow() {
    getBody.classList.add('body_hidden')
}

function setBodyVisibleOverflow() {
    getBody.classList.remove('body_hidden')
}



window.addEventListener('resize', () => {
    changeInputFocus()
})

getCatalogButtonOpen.addEventListener('click', () => {
    getCatalogContainer.classList.toggle('header__catalog_active')
    getCatalogButtonOpen.classList.toggle('header__link_catalog_active')
})

getCatalogButtonClose.addEventListener('click', () => {
    getCatalogContainer.classList.remove('header__catalog_active')
})

getBurger.addEventListener('click', () => {
    getModalMenu.classList.toggle('header__links-wrapper_active')
    getBurger.classList.toggle('header__burger_active')
    getBody.classList.toggle('body_hidden')

    if(getCatalogContainer.classList.contains('header__catalog_active')) {
        getCatalogContainer.classList.remove('header__catalog_active')
        getBody.classList.remove('body_hidden')
    }
})

getSearchInput.addEventListener('input', () => {
    if(getSearchInput.value.length > 0) {
        getSearchResults.classList.add('header__search-result-wrapper_active')
        getHeaderBackDrop.classList.add('header__backdrop_active')
        getBody.classList.add('body_hidden')
    } else {
        getSearchResults.classList.remove('header__search-result-wrapper_active')
        getHeaderBackDrop.classList.remove('header__backdrop_active')
        setBodyVisibleOverflow()
    }
})

getHeaderBackDrop.addEventListener('click', () => {
    getSearchInput.value = ''
    getSearchResults.classList.remove('header__search-result-wrapper_active')
    getHeaderBackDrop.classList.remove('header__backdrop_active')
    setBodyVisibleOverflow()
})