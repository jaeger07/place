
 function handleFuncMenu(e){
    let itensMenu = document.querySelector('.activeFunc');
    itensMenu.classList.remove('activeFunc');
     e.classList.add('activeFunc');
     console.log(e.name);

    let titulo = document.querySelector('#func-painel-titulo');
    let texto = document.querySelector('#func-painel-p');
    let destaque = document.querySelector('#func-painel-destaques');
    let gif = document.querySelector('#div-gif-func');

   let marginLeft = document.querySelector('.margin-func-left');
   let legis = document.querySelector('.func-legislacao');
   let avalia = document.querySelector('.func-avaliacao');
   let via = document.querySelector('.func-viabilidade');
   let dash = document.querySelector('.func-dashboard');
   let camadas = document.querySelector('.func-camadas');
   let filtros = document.querySelector('.func-filtros');
   let plano = document.querySelector('.func-plano-diretor');
   


   marginLeft.style.borderRadius = " 30px 30px 0 0"
   legis.style.borderRadius = " 30px 30px 0 0"
   avalia.style.borderRadius = " 30px 30px 0 0"
   via.style.borderRadius = " 30px 30px 0 0"
   dash.style.borderRadius = " 30px 30px 0 0"
   camadas.style.borderRadius = " 30px 30px 0 0"
   filtros.style.borderRadius = " 30px 30px 0 0"
   plano.style.borderRadius = " 30px 30px 0 0"

   
     if(e.name == 'legislacao'){
        titulo.innerHTML = "Legislação";
        texto.innerHTML = "Parametrizamos os planos diretores para entender todas as condicionantes legais que impactam o terreno, analisando desde zona, altura máxima e coeficiente de aproveitamento até exceções como patrimônio histórico e áreas de proteção ambiental.";
        destaque.innerHTML = "Cálculo de outorga onerosa em tempo real.";
        gif.style.background = "url(../imagens/05_funcionalidade/Gifs/legislacao.gif) no-repeat cover";
        gif.style.backgroundSize = 'cover';
     }
         while(e.name == "legislacao") {
            marginLeft.style.borderRadius = " 0 0 30px 0"
            avalia.style.borderRadius = " 0 0 0 30px"
            break;
         }
     if(e.name == 'avaliacao'){
        titulo.innerHTML = "Avaliação"
        texto.innerHTML = "Visando precificar o terreno para incorporação imobiliária, estimamos o valor do terreno a partir do potencial construtivo, da análise de valorização imobiliária da região e da taxa de atratividade para incorporação imobiliária."
        destaque.innerHTML = "+ de 10.000 terrenos precificados."
        gif.style.background = "url(../imagens/05_funcionalidade/Gifs/avaliacao.gif) no-repeat"
        gif.style.backgroundSize = 'cover'
     }
         while(e.name == 'avaliacao'){
            legis.style.borderRadius = " 0 0 30px 0"
            via.style.borderRadius = " 0 0 0 30px"
            break;
         }
     if(e.name == 'viabilidade'){
        titulo.innerHTML = "Viabilidade"
        texto.innerHTML = "Calculamos a viabilidade urbanística e financeira de qualquer terreno das cidades de São Paulo e Porto Alegre em um clique!"
        destaque.innerHTML = "+ de 12.000 estudos de viabilidade realizados."
        gif.style.background = "url(../imagens/05_funcionalidade/Gifs/viabilidade.gif) no-repeat"
        gif.style.backgroundSize = 'cover'
     }
         while(e.name == 'viabilidade'){
            avalia.style.borderRadius = " 0 0 30px 0"
            dash.style.borderRadius = " 0 0 0 30px"
            break;
         }
     if(e.name == 'dashboard'){
        titulo.innerHTML = "Dashboard de terrenos"
        texto.innerHTML = "Salve seus estudos e visualize no painel de estudos de viabilidade, tendo acesso a histórico, comentários e possibilidade de rankeamento por indicadores."
        destaque.innerHTML = "Sem limite de estudos salvos."
        gif.style.background = "url(../imagens/05_funcionalidade/Gifs/dashboard.gif) no-repeat"
        gif.style.backgroundSize = 'cover'
     }
         while(e.name == 'dashboard'){
            via.style.borderRadius = " 0 0 30px 0"
            camadas.style.borderRadius = " 0 0 0 30px"
            break;
         }
     if(e.name == 'camadas'){
        titulo.innerHTML = "Camadas"
        texto.innerHTML = "Visualize no mapa e interaja com camadas de análise urbanística, potencial construtivo, lançamentos imobiliários, insights de incorporação e muito mais!"
        destaque.innerHTML = "+ de 7 milhões de dados organizados e avaliados."
        gif.style.background = "url(../imagens/05_funcionalidade/Gifs/camadas.gif) no-repeat"
        gif.style.backgroundSize = 'cover'
     }
         while(e.name == 'camadas'){
            dash.style.borderRadius = " 0 0 30px 0"
            filtros.style.borderRadius = " 0 0 0 30px"
            break;
         }
     if(e.name == 'filtros'){
        titulo.innerHTML = "Filtros"
        texto.innerHTML = "Combine e personalize camadas de dados para visualizar apenas os lotes que se adequam ao seu perfil de incorporação."
        destaque.innerHTML = "+10<br>Opções."
        gif.style.background = "url(../imagens/05_funcionalidade/Gifs/filtros.gif) no-repeat"
        gif.style.backgroundSize = 'cover'
     }
         while(e.name == 'filtros'){
            camadas.style.borderRadius = " 0 0 30px 0"
            plano.style.borderRadius = " 0 0 0 30px"
            break;
         }
     
 }
 var contador = 0;

 function like() {
     contador++;
     let textLike = document.querySelector('.add-text-like');

     if((contador % 2) != 0 ){
     textLike.innerHTML= '<strong>você e + &nbsp;</strong>'
     }
     else{
        textLike.innerHTML= ''  
     }
 }