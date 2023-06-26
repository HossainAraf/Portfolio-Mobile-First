let toggleButton = document.querySelector(".toggle-button");
let xIcon = document.querySelector(".x-icon");
let mainMenu = document.querySelector(".menu");
let menuItem = document.querySelectorAll(".menu-item");
let navbar = document.querySelector('.navbar');
let body = document.querySelector('body');
let logo = document.querySelector('.logo');

toggleButton.addEventListener('click', show);
xIcon.addEventListener('click', hide);
menuItem.forEach(item => item.addEventListener('click', menuItemClick));


function show () {
  mainMenu.style.display = 'flex';
  mainMenu.style.color = '#fff';
  mainMenu.style.opacity = '.93';
  toggleButton.style.display =  'none';
  xIcon.style.display = 'flex';
  xIcon.style.right = '0';
  navbar.style.display = 'flex';
  navbar.style.flexDirection = 'column';
  logo.style.alignSelf = 'flex-start'
  logo.style.paddingTop = '9%';
}

function hide () {
  mainMenu.style.display = 'none';
  xIcon.style.display = 'none';
  toggleButton.style.display = 'flex';
  toggleButton.style.justifyContent = 'flex-end';
  navbar.style.flexDirection = 'row';
  logo.style.paddingTop = '9%';
}

function menuItemClick () {
  mainMenu.style.display = 'none';
  xIcon.style.display = 'none';
  toggleButton.style.display = 'flex';
  navbar.style.flexDirection = 'row';
}
