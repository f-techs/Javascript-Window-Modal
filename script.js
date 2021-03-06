'use strict'

const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');


const openModal = function(){
modal.classList.remove('hidden');
overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnShowModal.forEach((btn)=>{
    btn.addEventListener('click', openModal);
})

btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', (e)=>{
 if(e.key === 'Escape' && !modal.classList.contains('hidden')){
    closeModal();
 }
})
