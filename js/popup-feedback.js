window.addEventListener('DOMContentLoaded', () => {

    'use sctict';

    let     linkFeedback = document.querySelector('.button-feedback-link'),
            popupFeedback = document.querySelector('.modal-feedback'),
            overlay = document.querySelector('.modal-overlay'),
            close = document.querySelector('.modal-close');


    linkFeedback.addEventListener('click', (event) => {
        event.preventDefault();
        popupFeedback.classList.add('modal-show');
        overlay.classList.add('modal-show');
    });

    close.addEventListener('click', (event) => {
        event.preventDefault();
        popupFeedback.classList.remove('modal-show');
        overlay.classList.remove('modal-show');
    });

    overlay.addEventListener('click', () =>{
        popupFeedback.classList.remove('modal-show');
        overlay.classList.remove('modal-show');
    });

    window.addEventListener('keydown', (event) =>{
        if(event.keyCode == 27){
            if(popupFeedback.classList.contains('modal-show')){
                event.preventDefault();
                popupFeedback.classList.remove('modal-show');
                overlay.classList.remove('modal-show');
            }
        }
    });
});