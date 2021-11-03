var atualPosicao;
var ultimaPosicao;

window.addEventListener("scroll",function() {
  const nav = document.querySelector("nav");
  const div1 = document.querySelector("#div1");

  atualPosicao = window.scrollY;
  
  if(atualPosicao < (ultimaPosicao +6)){
    div1.classList.add("div1-margin");
    nav.classList.add("sticky");
  }
  if((atualPosicao > ultimaPosicao)|| atualPosicao < 550 ){
    div1.classList.remove("div1-margin");
    nav.classList.remove("sticky");
  }
  
  ultimaPosicao = window.scrollY;
})


