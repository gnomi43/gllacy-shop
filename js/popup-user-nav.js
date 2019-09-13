window.addEventListener('DOMContentLoaded', () => {

    'use sctict';

    let     linkSeacrh = document.querySelector('.search-button'),
            linkLogin = document.querySelector('.login-button'),
            linkCart = document.querySelector('.cart-button'),
            popupSeacrh = document.querySelector('.modal-search'),
            popupLogin = document.querySelector('.modal-login'),
            popupCart = document.querySelector('.modal-cart');


    linkSeacrh.addEventListener('click', (event) => {
        popupLogin.classList.remove('modal-show');
        popupCart.classList.remove('modal-show');
        event.preventDefault();
        popupSeacrh.classList.add('modal-show');
    });

    linkLogin.addEventListener('click', (event) => {
        popupSeacrh.classList.remove('modal-show');
        popupCart.classList.remove('modal-show');
        event.preventDefault();
        popupLogin.classList.add('modal-show');
    });

    linkCart.addEventListener('click', (event) => {
        popupLogin.classList.remove('modal-show');
        popupSeacrh.classList.remove('modal-show');
        event.preventDefault();
        popupCart.classList.add('modal-show');
    });

    window.addEventListener('keydown', (event) =>{
        if(event.keyCode == 27){
            if(popupSeacrh.classList.contains('modal-show') || popupLogin.classList.contains('modal-show') || popupCart.classList.contains('modal-show')){
                event.preventDefault();
                popupSeacrh.classList.remove('modal-show');
                popupLogin.classList.remove('modal-show');
                popupCart.classList.remove('modal-show');
            }
        }
    });
});