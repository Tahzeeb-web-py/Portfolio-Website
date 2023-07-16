document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');

    setTimeout(function() {
      preloader.style.display = 'none';
    }, 2500);
  });
const mobile_nav=document.querySelector('.navbar-button');
const nav_header=document.querySelector('.header');
const nav_links=document.querySelector('.navbar-list');

const toggleNabar=() =>{
    nav_header.classList.toggle("active");
};
mobile_nav.addEventListener("click", ()=> toggleNabar());
nav_links.addEventListener("click", ()=> toggleNabar());