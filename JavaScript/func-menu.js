
 function handleFuncMenu(e){
    let itensMenu = document.querySelector('.activeFunc');
    itensMenu.classList.remove('activeFunc');
     e.classList.add('activeFunc');

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
   


   marginLeft.classList.remove('radius-item-left');
   marginLeft.classList.remove('radius-item-right');
   legis.classList.remove('radius-item-left');
   legis.classList.remove('radius-item-right');
   avalia.classList.remove('radius-item-left');
   avalia.classList.remove('radius-item-right');
   via.classList.remove('radius-item-left');
   via.classList.remove('radius-item-right');
   dash.classList.remove('radius-item-left');
   dash.classList.remove('radius-item-right');
   camadas.classList.remove('radius-item-left');
   camadas.classList.remove('radius-item-right');
   filtros.classList.remove('radius-item-left');
   filtros.classList.remove('radius-item-right');
   plano.classList.remove('radius-item-left');
   plano.classList.remove('radius-item-right');

   
     if(e.name == 'legislacao'){
        titulo.innerHTML = "Legislação";
        texto.innerHTML = "Parametrizamos os planos diretores para entender todas as condicionantes legais que impactam o terreno, analisando desde zona, altura máxima e coeficiente de aproveitamento até exceções como patrimônio histórico e áreas de proteção ambiental.";
        destaque.innerHTML = "Cálculo de outorga onerosa <br>em tempo real";
        gif.style.background = "url(./imagens/05_funcionalidade/gifs/legislacao.gif) no-repeat";
        gif.style.backgroundSize = 'cover';
     }
         while(e.name == "legislacao") {
            marginLeft.classList.add('radius-item-left');
            avalia.classList.add('radius-item-right');
            break;
         }
     if(e.name == 'avaliacao'){
        titulo.innerHTML = "Avaliação"
        texto.innerHTML = "Visando precificar o terreno para incorporação imobiliária, estimamos o valor do terreno a partir do potencial construtivo, da análise de valorização imobiliária da região e da taxa de atratividade para incorporação imobiliária."
        destaque.innerHTML = "+ de 10.000 terrenos <br>precificados."
        gif.style.background = "url(./imagens/05_funcionalidade/gifs/avaliacao.gif) no-repeat"
        gif.style.backgroundSize = 'cover'
     }
         while(e.name == 'avaliacao'){
            legis.classList.add('radius-item-left');
            via.classList.add('radius-item-right');
            break;
         }
     if(e.name == 'viabilidade'){
        titulo.innerHTML = "Viabilidade"
        texto.innerHTML = "Calculamos a viabilidade urbanística e financeira de qualquer terreno das cidades de São Paulo e Porto Alegre em um clique!"
        destaque.innerHTML = "+ de 12.000 estudos de <br>viabilidade realizados."
        gif.style.background = "url(./imagens/05_funcionalidade/gifs/viabilidade.gif) no-repeat"
        gif.style.backgroundSize = 'cover'
     }
         while(e.name == 'viabilidade'){
            avalia.classList.add('radius-item-left');
            dash.classList.add('radius-item-right');
            break;
         }
     if(e.name == 'dashboard'){
        titulo.innerHTML = "Dashboard de terrenos"
        texto.innerHTML = "Salve seus estudos e visualize no painel de estudos de viabilidade, tendo acesso a histórico, comentários e possibilidade de rankeamento por indicadores."
        destaque.innerHTML = "Sem limite de <br>estudos salvos"
        gif.style.background = "url(./imagens/05_funcionalidade/gifs/dashboard.gif) no-repeat"
        gif.style.backgroundSize = 'cover'
     }
         while(e.name == 'dashboard'){
            via.classList.add('radius-item-left');
            camadas.classList.add('radius-item-right');
            break;
         }
     if(e.name == 'camadas'){
        titulo.innerHTML = "Camadas"
        texto.innerHTML = "Visualize no mapa e interaja com camadas de análise urbanística, potencial construtivo, lançamentos imobiliários, insights de incorporação e muito mais!"
        destaque.innerHTML = "+ de 7 milhões de dados <br>organizados e avaliados"
        gif.style.background = "url(./imagens/05_funcionalidade/gifs/camadas.gif) no-repeat"
        gif.style.backgroundSize = 'cover'
     }
         while(e.name == 'camadas'){
            dash.classList.add('radius-item-left');
            filtros.classList.add('radius-item-right');
            break;
         }
     if(e.name == 'filtros'){
        titulo.innerHTML = "Filtros"
        texto.innerHTML = "Combine e personalize camadas de dados para visualizar apenas os lotes que se adequam ao seu perfil de incorporação."
        destaque.innerHTML = "+ de 7 milhões de dados <br>organizados e avaliados"
        gif.style.background = "url(./imagens/05_funcionalidade/gifs/filtros.gif) no-repeat"
        gif.style.backgroundSize = 'cover'
     }
         while(e.name == 'filtros'){
            camadas.classList.add('radius-item-left');
            plano.classList.add('radius-item-right');
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