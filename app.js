const burger = document.querySelector('#burgerbtn');
const menu = document.querySelector('bmenu');

burgerbtn.addEventListener('click', () => { 
    bmenu.classList.toggle('disp')
});