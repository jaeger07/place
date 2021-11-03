
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


const menu = document.querySelector('.nav');
const pap = document.querySelector('#PAP')

function menuScroll() {
  if(window.pageYOffset > pap.offsetTop) {
    menu.classList.add('menu-scroll');
  } else {
    menu.classList.remove('menu-scroll');
  }
}

if(2==2){
  window.addEventListener('scroll', debounce(function(){
      menuScroll();
  }, 10));
}