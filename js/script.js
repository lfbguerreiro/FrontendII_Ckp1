// CRIANDO A VARIÁVEL PARA ATRELAR AO CLICK

var btn = document.getElementById("btn_enviar");
var titulo = document.getElementById('titulo');

btn.addEventListener('click', function(){
    console.log('Você clicou no botão Salvar');
})

//VALIDAÇÃO DOS CAMPOS

titulo.addEventListener('focus', function(){
    console.log('clicou no campo')
    titulo.style.backgroundColor = '#dadad8'
})

titulo.addEventListener('keyup', function(){
    console.log('Saiu do campo');
    
    let tituloValidacao = document.getElementById('tituloValidacao');

    if(titulo.value.length>=4){
        console.log('Validação passou');
        tituloValidacao.innerText = "";
        btn.removeAttribute ('disabled')
        
    }else{
        console.log('Validação não passou');
        tituloValidacao.innerText = "Mínimo de 4 caracteres";
        tituloValidacao.style.fontWeight = 'bold';
        tituloValidacao.style.color = 'red'
        titulo.style.backgroundColor = "#FFFFFF";        
    }
})



btn.addEventListener('click', function(event){
    
    event.preventDefault();
    
    var card = document.querySelector("#formCard");
    console.log(card.titulo.value);
    console.log(card.description.value);
    console.log(card.url.value);

      // CRIA O ELEMENTO CARD
      var criarCard = document.createElement("div");
    criarCard.setAttribute('class', 'cards');

    //CRIA O ELEMENTO TÍTULO
    var criarTitulo = document.createElement("h2");
    criarTitulo.setAttribute('class', 'cardTittle');

    //CRIA O ELEMENTO DESCRIÇÃO
    var criarDescricao = document.createElement("p");
    criarDescricao.setAttribute("class",'description')

    //CRIA O ELEMENTO IMAGEM
    var criarImagem = document.createElement("img");
    criarImagem.setAttribute("src", card.url.value);
    criarImagem.setAttribute("class", 'img-card');

    //ADICIONAR O CONTEÚDO
    criarTitulo.textContent = card.titulo.value;
    criarDescricao.textContent = card.description.value; 
    criarImagem.textContent = card.url.value;   

    //REFERENCIA PARA INSERÇÃO
    var card = document.querySelector('#container')

    //CRIAR A ESTRUTURA DO CARD
        
    criarCard.appendChild(criarTitulo);
    criarCard.appendChild(criarDescricao);
    criarCard.appendChild(criarImagem);

    card.appendChild(criarCard);



})


