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

       /*makes sections active*/
    window.addEventListener('scroll',function(){
    const view = section.getBoundingClientRect();
      if (view.top >= 100 && view.left <= 100)
        {
         section.classList.add('active');
         navItems.classList.add('active');
        } 
        else
        {
         section.classList.remove('active');
         navItems.classList.remove('active');
        }
      }());
    });
  }
}
buildNav();
/** event listener for button to scroll to top of screen*/
scrollButton.addEventListener('click',function(){
  window.scrollTo({top:0, behavior:'smooth'});
});