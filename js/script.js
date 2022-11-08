// CRIANDO A VARIÁVEL PARA ATRELAR AO CLICK

var btn = document.getElementById("btn_enviar");



btn.addEventListener('click', function(event){
    
    event.preventDefault();
    
    var card = document.querySelector("#formCard");
    console.log(card.titulo.value);
    console.log(card.description.value);
    console.log(card.url.value);

    document.addEventListener('keydown', function(){
        if(card.titulo.lenght < 4){
            btn.style.display = 'block'
        
        }
    })

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


