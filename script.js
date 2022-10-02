const productBtn = document.querySelector('.product-btn');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close-btn');
const showBtn = document.querySelector('.show-btn');
const productSubMenu = document.querySelectorAll('.sub-menu')[0];

const cartBtn = document.querySelector('.cart-btn');
const cartSubMenu = document.querySelectorAll('.sub-menu')[1];

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

productBtn.addEventListener('click', () => {
  productSubMenu.classList.toggle('sub-menu-active');
  cartSubMenu.classList.remove('sub-menu-active');
});

cartBtn.addEventListener('click', () => {
  cartSubMenu.classList.toggle('sub-menu-active');
  productSubMenu.classList.remove('sub-menu-active');
});

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu-active');
});

closeBtn.addEventListener('click', () => {
  modalContainer.classList.remove('active');
});
showBtn.addEventListener('click', () => {
  modalContainer.classList.add('active');
});