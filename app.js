const toggleButton = document.querySelector('.toggle-button');
const xIcon = document.querySelector('.x-icon');
const mainMenu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-item');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');
const popup = document.querySelector('#popup');
const cardsContainer = document.querySelector('#work');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.color = '#fff';
  mainMenu.style.opacity = '.93';
  toggleButton.style.display = 'none'; xIcon.style.display = 'flex'; xIcon.style.right = '0';
  navbar.style.display = 'flex';
  navbar.style.flexDirection = 'column';
  logo.style.alignSelf = 'flex-start';
  logo.style.paddingTop = '9%';
}

function hide() {
  mainMenu.style.display = 'none';
  xIcon.style.display = 'none';
  toggleButton.style.display = 'flex';
  toggleButton.style.justifyContent = 'flex-end';
  navbar.style.flexDirection = 'row';
  logo.style.paddingTop = '9%';
}

function menuItemClick() {
  mainMenu.style.display = 'none';
  xIcon.style.display = 'none';
  toggleButton.style.display = 'flex';
  navbar.style.flexDirection = 'row';
}

toggleButton.addEventListener('click', show);
xIcon.addEventListener('click', hide);
menuItem.forEach((item) => item.addEventListener('click', menuItemClick));

function popupWC() {
  popup.style.display = 'none';
}

const projectList = [
  {
    id: 0,
    title: 'TONIC',
    desc: 'Introducing EduQuest - an interactive educational platform showcased in an engaging project popup card. Immerse yourself in a world of knowledge as EduQuest offers engaging courses and collaborative learning experiences.',
    tags: ['CANOPY', 'Back End Dev', '2023'],
    imgUrl: 'img/Portfolio-1.png',
    tech: ['HTML', 'CSS', 'Javascript'],
    live: 'https://www.linkedin.com/in/md-arafat-hossain-111403275/',
    source: 'https://ghttps://github.com/HossainAraf',
  },
  {
    id: 1,
    title: 'TONIC',
    desc: 'Discover TravelMates - a user-friendly travel planning website. Get inspired by its captivating features showcased in a project popup card.',
    tags: ['CANOPY', 'Back End Dev', '2023'],
    imgUrl: 'img/Portfolio-2.png',
    tech: ['HTML', 'CSS', 'Javascript'],
    live: 'https://www.linkedin.com/in/md-arafat-hossain-111403275/',
    source: 'https://ghttps://github.com/HossainAraf',
  },
  {
    id: 2,
    title: 'TONIC',
    desc: 'Immerse in EduQuest - an interactive educational platform empowering learners. Explore its engaging courses and collaborative experiences through a project popup card.',
    tags: ['CANOPY', 'Back End Dev', '2023'],
    imgUrl: 'img/Portfolio-3.png',
    tech: ['HTML', 'CSS', 'Javascript'],
    live: 'https://www.linkedin.com/in/md-arafat-hossain-111403275/',
    source: 'https://ghttps://github.com/HossainAraf',
  },
  {
    id: 3,
    title: 'TONIC',
    desc: 'Introducing MarketPro - a cutting-edge e-commerce solution. Experience its seamless user interface and advanced features showcased in a dynamic project popup card.',
    tags: ['CANOPY', 'Back End Dev', '2023'],
    imgUrl: 'img/Portfolio.png',
    tech: ['HTML', 'CSS', 'Javascript'],
    live: 'https://www.linkedin.com/in/md-arafat-hossain-111403275/',
    source: 'https://ghttps://github.com/HossainAraf',
  },
];

let cardsGenerator = '';

projectList.forEach((project) => {
  cardsGenerator += `
  <!-- card ${project.id} -->
    <div class="work-first">
      <div class="work-img">
        <img src="${project.imgUrl}" alt="${project.title}" />
      </div>
      <div class="work-description">
        <h3 class="card-title">${project.title}</h3>
        <ul class="card-items"> 
         ${project.tags.map((tag) => `<li class="card-li">${tag}</li>`).join(' ')} 
        </ul>
        <p class="project-desc">${project.desc}</p>
        <ul class="tech-items"> 
         ${project.tech.map((tech) => `<li class="tech-li">${tech}</li>`).join(' ')} 
        </ul>
        <div class="card-btn-container">
          <button class="see-project-btn" onclick="popupW(${project.id
})">See Project</button>
        </div>
      </div>
  </div>
  `;
});

cardsContainer.innerHTML = cardsGenerator;

function popupW(id) {
  const popupHtmlGenerator = `
  <div class="popup-wrapper">
   <div class="popup-inner">
    <div class="popup-primary-text">
    <div class="popup-title-container">
      <h3 class="popup-title">${projectList[id].title}</h3>
      <button class="popup-cancel" onclick="popupWC()">
      <img src="img/Icon-cross.png" alt="icon cancel" class="popup-cancle-icon" />
  </button>
      </div>
    </div>
    <ul class="card-list">${projectList[id].tags.map((tag) => `<li class="card-li">${tag}</li>`).join(' ')}</ul>
  </div>
    <div class="img-container">
      <div class="popup-img-box"> 
      <img src="${projectList[id].imgUrl}" alt="${projectList[id].title}" />
      </div>
    </div>
    <div class="popup-bottom">
      <div class="popup-desc">
        <p>${projectList[id].desc}</p>
      </div>
      <div class="pop-right">
      <ul class="technologies">${projectList[id].tech.map((tech) => `<li class="tech-li">${tech}</li>`).join(' ')}</ul>
      <img src='img/Vector4.png'>
      <div class="popup-action">
        <div class="acton-inside">
          <a href="${projectList[id].live}" target="_blank" class="popup-action-btn">See Live <img src="img/Icon-live.png" class="popup-action-btn-icon" alt="see live project icon" /></a>
        </div>
        <div class="acton-inside">
          <a href="${projectList[id].source}" target="_blank" class="popup-action-btn">See Source <img src="img/Icon-GitHub.png" class="popup-action-btn-icon" alt="github" /></a>
        </div>
      </div>
      </div>
  </div>
</div>`;
  popup.innerHTML = popupHtmlGenerator;
  popup.style.display = 'flex';
}
const x = 0;
if (x === 1) {
  popupWC();
  popupW();
}

// form validation
const formSubmit = document.querySelector('#form');
formSubmit.addEventListener('submit', (event) => {
  const emailInput = document.querySelector('#email');
  const errorMessage = document.querySelector('#error-message');

  if (emailInput.value.toLowerCase() !== emailInput.value) {
    errorMessage.innerText = 'Please enter lowercase email ID';
    errorMessage.style.display = 'block';
    event.preventDefault();
  } else {
    errorMessage.style.display = 'none';
  }
});

// Preserve form data to local storage
const yourName = document.getElementById('name');
const yourEmail = document.getElementById('email');
const yourMessage = document.getElementsByClassName('message');

function saveData() {
  // Create a data object
  const formData = {
    name: yourName.value,
    email: yourEmail.value,
    message: yourMessage.value,
  };

  // Save the data to local storage as a JSON string
  localStorage.setItem('formData', JSON.stringify(formData));
}

// Add event listeners to the form input elements
yourName.addEventListener('input', saveData);
yourEmail.addEventListener('input', saveData);
yourMessage.addEventListener('input', saveData);

// Load the form data from local storage
window.addEventListener('load', () => {
  // Retrieve the saved form data from local storage
  const savedFormData = localStorage.getItem('formData');

  if (savedFormData) {
    const formData = JSON.parse(savedFormData);
    yourName.value = formData.name;
    yourEmail.value = formData.email;
    yourMessage.value = formData.message;
  }
});
