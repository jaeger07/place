
window.addEventListener("scroll",function() {
  const nav = document.querySelector("nav");
  
  console.log(window.scrollY);
  
  if(window.scrollY > 0){
    nav.classList.add("sticky");
  }
  else{
    nav.classList.remove("sticky")
  }

})


