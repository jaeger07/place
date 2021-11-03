var atualPosicao;
var ultimaPosicao;

window.addEventListener("scroll",function() {
  const nav = document.querySelector("nav");
  const div1 = document.querySelector("#div1");
  const plataforma = document.querySelector('.acessarPlataforma')

  atualPosicao = window.scrollY;
  
  if(atualPosicao < (ultimaPosicao +6)){
    div1.classList.add("div1-margin");
    nav.classList.add("sticky");
    plataforma.classList.add("acessarPlataforma-branca")
  }
  if((atualPosicao > ultimaPosicao)|| atualPosicao < 550 ){
    div1.classList.remove("div1-margin");
    nav.classList.remove("sticky");
    plataforma.classList.remove("acessarPlataforma-branca")

  }
  
  ultimaPosicao = window.scrollY;
})


