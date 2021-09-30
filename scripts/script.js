// JavaScript Document
var menu = document.querySelector('.mobile-menu');
var menuButton = document.querySelector('.open-menu');
var closeMenuButton = document.querySelector('.close-menu');
menuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);

function openMenu(event) {
    menu.classList.remove('hidden');
}

function closeMenu(event) {
    menu.classList.add('hidden');
}