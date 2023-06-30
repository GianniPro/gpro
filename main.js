//Theme Toggle Button

var icon = document.getElementById("icon");
    
    
    
    if(localStorage.getItem("theme") == null){
        localStorage.setItem("theme", "light");
    }
    
    
    
    
    let localData = localStorage.getItem("theme");
    
    if(localData == "light"){
        icon.src = "Images/moon.png";
        document.body.classList.remove("dark-theme");
    }else if(localData == "dark"){
        icon.src = "Images/sun.png";
        document.body.classList.add("dark-theme");
    }
    
    
    
        
        icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src = "Images/sun.png";
            localStorage.setItem("theme", "dark");
        }else{
            icon.src = "Images/moon.png";
            localStorage.setItem("theme", "light");
        }
    }
        

//Nav to top on scroll
        
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('main-nav-scroll', window.scrollY > 0)
})

//Search
const searchInputWrapper = document.querySelector(".search-input-wrapper");
const searchInput = document.querySelector(".search-input input");
const searchIcon = document.querySelector(".search-icon i");
const closeIcon = document.querySelector(".search-input i ");

searchIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.add("change");
  searchInputWrapper.classList.add("change");

  setTimeout(() => {
    searchInput.focus();
  }, 1000);
});

closeIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.remove("change");
  searchInputWrapper.classList.remove("change");
});

//Menu
//const menu = document.querySelector('#menu-toggle-icon')
//const menuLinks = document.querySelector('.main-nav ul')

//menu.addEventListener('click', function() {
//    menu.classList.toggle('is-active')
//    menuLinks.classList.toggle('active')
//})

// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

//Menu Toggle
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () =>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);

//Side Nav
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}