let q = document.querySelector.bind(document);

window.onscroll = function() {stickyNav()};
// Get the navbar
const stickyNavbar = document.querySelector('.js-stickyNav');
const navbar = document.querySelectorAll('nav');
const indecator = document.querySelectorAll('.js-navbar-indecator');
// Get the offset position of the navbar
var sticky = stickyNavbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    stickyNavbar.classList.add("sticky");
  } else {
    stickyNavbar.classList.remove("sticky");
  }
}

// Tabs
navbar.forEach(function(nav, i) {
  nav.addEventListener('click', function (evt) {
      if (evt.target.nodeName === 'A') {  // ← verifies target is desired element
          animate(evt.target);
          showTab(evt.target);
          
      }
  });
});
// seating width and potsion for the active tab
function setActiveLink(){
  let activeLink = document.querySelectorAll('.nav_activeLink');
  indecator.forEach(function(tab, i) {
    tab.style.width = `${activeLink[i].scrollWidth}px`;
    tab.style.transform = `translateX(${activeLink[i].offsetLeft}px)`;
  });
}
setActiveLink();
// animating the indecator after clicking on the tab and seeting the active tab link
function animate(elm){
  let linkWidth = elm.scrollWidth;
  let linkOffest = elm.offsetLeft;
  let parentNav =  elm.closest("nav");
  let oldActivetab = parentNav.querySelector('.nav_activeLink');
  let childIndecator = parentNav.querySelector('.js-navbar-indecator');
  childIndecator.style.width = `${linkWidth}px`;
  childIndecator.style.transform = `translateX(${linkOffest}px)`;
  oldActivetab.classList.remove("nav_activeLink");
  elm.classList.add("nav_activeLink");
}
// show targeting tab
function showTab(elm) { 
  let parentNav =  elm.closest("nav");
  let parentNavAttr = parentNav.getAttribute("data-navContainer");
  let sectionContainer = document.getElementById(parentNavAttr);
  let targetTab = elm.getAttribute("data-tabId");
  let oldActiveSection = sectionContainer.querySelector('.tab-content.tab_active');
  let activeSection = sectionContainer.querySelector('#'+targetTab);
  oldActiveSection.classList.remove("tab_active");
  activeSection.classList.add("tab_active");
 }

//  ########################## Slider ###################
const overlaywraper = document.querySelector('.js-img-overlay');
const closeOverlayBtn = document.querySelector('.js-close-overlay');


q('.js-slider').addEventListener('click', function (evt) {
  if (evt.target.nodeName === 'IMG') { 
    openSliderOverlay(evt.target)
  }
});

closeOverlayBtn.addEventListener('click', function () {
  overlaywraper.classList.add("active-img_out");
  setTimeout(function(){ 
    overlaywraper.classList.remove("active-img", "active-img_out");
   }, 400);

});

function openSliderOverlay(img){
  q('.js-img-overlay_content').innerHTML = img.outerHTML;
  overlaywraper.classList.add("active-img");

}
//  ########################## Menu ###################
q('.dropbtn').addEventListener('click', function () {
   q('.dropdown-content').classList.toggle("open");
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('open')) {
        openDropdown.classList.remove('open');
      }
    }
  }
}
//  ########################## render static content ###################
const castMovie = q('.movies-list_movieWraper').outerHTML;
let castMovies = " ";
for (let index = 0; index < 30; index++) {
  castMovies += castMovie;
}
q('.movies-list').innerHTML = castMovies;

//  ########################## show more ###################
q('.showMoreOrLess').addEventListener('click', function () {
  q('.movie-detailswraper').classList.toggle("open");
  if (q('.showMoreOrLess').innerHTML === `<span>Show More</span><i class="material-icons">expand_more</i>`) {
    q('.showMoreOrLess').innerHTML = `Show Less<i class="material-icons">expand_less</i>`;
  } else {
    q('.showMoreOrLess').innerHTML = `<span>Show More</span><i class="material-icons">expand_more</i>`;
  }
});

//  ########################## Close Actor Overlay ###################
q('#back').addEventListener('click', function () {
  q('.castDetails').classList.remove("open");
  
});