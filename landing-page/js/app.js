/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * 
 * Define Global Variables
 * const */
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const scrollButton = document.getElementById('scroll_button');
/** Creates the nav dynamically*/
function buildNav(){
  for (const section of sections) {
    const navItems = document.createElement('list');
    navItems.classList = 'menu__link';
    navItems.dataset.nav = section;
    navItems.innerHTML = section.dataset.nav;
    navList.appendChild(navItems);
     /*event listener to scroll to the appropriate section from being clicked*/
     navItems.addEventListener('click',function(){
      section.scrollIntoView({behavior:'smooth'});    
    });
  }
}
buildNav();
/*function to make sections active*/
function sectionActive(){
  for (const section of sections){
   window.addEventListener('scroll', function(){
  const view = section.getBoundingClientRect();
    if (view.top>=0 && view.left >=0 &&
      view.right<=(window.innerWidth||document.documentElement.clientWidth)&&
      view.bottom<=(window.innerHeight||document.documentElement.clientHeight))
      {
       section.classList.add('active');
      } 
      else
      {
       section.classList.remove('active');  
      }
    });
  }
}
sectionActive();

function navActive(){
  const lists = document.querySelectorAll('list');
  for (const list of lists){
   document.addEventListener('scroll', function(){
  const view = list.getBoundingClientRect();
    if (view.top>=0 && view.left >=0 &&
      view.right<=(window.innerWidth||document.documentElement.clientWidth)&&
      view.bottom<=(window.innerHeight||document.documentElement.clientHeight))
      {
       list.classList.add('active');
       console.log(list)
      } 
      else
      {
       list.classList.remove('active');  
      }
    });
  }
}
navActive();

/** event listener for button to scroll to top of screen*/
scrollButton.addEventListener('click',function(){
  window.scrollTo({top:0, behavior:'smooth'});
});