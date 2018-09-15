window.onscroll = function() {stickyNav()};
// Get the navbar
const navbar = document.querySelectorAll('.js-nav');
const indecator = document.querySelectorAll('.js-navbar-indecator');
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
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
(function setActiveLink(){
  let activeLink = document.querySelectorAll('.nav_activeLink');
  indecator.forEach(function(tab, i) {
    tab.style.width = `${activeLink[i].scrollWidth}px`;
    tab.style.transform = `translateX(${activeLink[i].offsetLeft}px)`;
  });
}())

// animating the indecator after clicking on the tab
function animate(elm){
  let linkWidth = elm.scrollWidth;
  let linkOffest = elm.offsetLeft;
  let parentnav =  elm.closest("nav");
  let oldActivetab = parentnav.querySelector('.nav_activeLink');
  let childIndecator = parentnav.querySelector('.js-navbar-indecator');
  childIndecator.style.width = `${linkWidth}px`;
  childIndecator.style.transform = `translateX(${linkOffest}px)`;
  oldActivetab.classList.remove("nav_activeLink");
  elm.classList.add("nav_activeLink");
}
// show targeting tab
function showTab(elm) { 
  // let activeLink = document.querySelector('.nav_activeLink');
  // activeLink.classList.remove("nav_activeLink");
  // elm.classList.add("nav_activeLink");
  // let targetTab = elm.getAttribute("data-tabId");
  // let oldActiveSection = document.querySelector('.tab-content.tab_active');
  // let activeSection = document.getElementById(targetTab)
  // oldActiveSection.classList.remove("tab_active");
  // activeSection.classList.add("tab_active");
 }

//  ########################## Slider ###################
const slider = document.querySelector('.js-slider');
const overlaywraper = document.querySelector('.js-img-overlay');
const closeOverlayBtn = document.querySelector('.js-close-overlay');


slider.addEventListener('click', function (evt) {
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
  const overlay = document.querySelector('.js-img-overlay_content');
  overlay.innerHTML = img.outerHTML;
  // overlaywraper.classList.remove("active-img_out ");
  overlaywraper.classList.add("active-img");

}