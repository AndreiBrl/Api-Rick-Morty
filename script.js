const inputNome = document.querySelector('#inputNome');
const img = document.querySelector('.imagemPersonagem');
const idNome = document.querySelector('#idNome');
const idStatus = document.querySelector('#idStatus');
const idEspecie = document.querySelector('#idEspecie');
const idGenero = document.querySelector('#idGenero');
const idLocalizacao = document.querySelector('#idLocalizacao');

let autocomplete = document.querySelector('.autoComplete');
let nomeDigitado = '';

async function buscaInfo(nome) {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nome}`);
  const characterData = await response.json();
  const arrayLi = document.querySelectorAll('ul li');
  
  if (characterData.results.length > 0) {
    let personagemAchado = characterData.results[0];


// Início lógica auto-complete




  
  
  
    console.log(inputNome.value.length);
  arrayLi.forEach(element => {
    console.log("-----------");
    element.remove();
    
  });


// cria um array de LI dentro de um UL
// Iteração dentro as LI com um máximo de 5 para aparecer os 5 primeiros resultados. A cada interação o Index do for é passado como atributo para ALT da LI
  for (let index = 0; index < 5; index++) {
    const li = document.createElement('li');
    li.classList.add('estiloli');
    
    li.textContent=characterData.results[index].name;
    li.setAttribute("alt",index);
    console.log(li.textContent);

    

    // Lógica do clique, no momento do clique pegamos o valor do Alt previamente guardado e então jogamos ele dentro do array. O valor do ALT corresponde ao index do For
// que corresponde ao mesmo do Index do Array e assim acessamos os dados

    li.addEventListener('click',function(){
      const valorAlt = li.getAttribute("alt");
      console.log(valorAlt);
       personagemAchado = characterData.results[valorAlt];
      img.src = personagemAchado.image;
      idNome.innerText = personagemAchado.name;
      idStatus.innerText = personagemAchado.status;
      idEspecie.innerText = personagemAchado.species;
      idGenero.innerText = personagemAchado.gender;
      idLocalizacao.innerText = personagemAchado.location.name;


      const arrayLi = document.querySelectorAll('ul li');
      console.log(inputNome.value.length);
    arrayLi.forEach(element => {
      console.log("-----------");
      element.remove();
      
    });
       
    })
   
    autocomplete.appendChild(li);
    
    
  }


// fim logica auto complete



  //   const personagemAchado = characterData.results[0];
    img.src = personagemAchado.image;
    idNome.innerText = personagemAchado.name;
    idStatus.innerText = personagemAchado.status;
    idEspecie.innerText = personagemAchado.species;
    idGenero.innerText = personagemAchado.gender;
    idLocalizacao.innerText = personagemAchado.location.name;
  } else {
    img.src = '';
    idNome.innerText = '';
    idStatus.innerText = '';
    idEspecie.innerText = '';
    idGenero.innerText = '';
    idLocalizacao.innerText = '';
  }
}

function buscarPersonagem(nome) {
  buscaInfo(nome);
}

inputNome.addEventListener('input', (evento) => {
  img.style.display="block";
  nomeDigitado = evento.target.value;
  buscarPersonagem(nomeDigitado);
  
  //console.log(nomeDigitado);
});

window.addEventListener('click',function(){
  const arrayLi = document.querySelectorAll('ul li');
  console.log(inputNome.value.length);
arrayLi.forEach(element => {
  console.log("-----------");
  element.remove();
  
});

})

//  function completa(characterData){
//   const arrayLi = document.querySelectorAll('ul li');
  
  
  
//     console.log(inputNome.value.length);
//   arrayLi.forEach(element => {
//     console.log("-----------");
//     element.remove();
    
//   });



//   for (let index = 0; index < 5; index++) {
//     const li = document.createElement('li');
//     li.classList.add('estiloli');
    
//     li.textContent=characterData.results[index].name;
//     console.log(li.textContent);

//     li.addEventListener('click',function(){
       
//     })
   
//     autocomplete.appendChild(li);
    
    
//   }

  
// }


 // characterData.results.forEach(element => {
  //    li = document.createElement('li');
  //   li.classList.add('estiloli');
    
  //   li.textContent=element.name;
  //   console.log(li.textContent);

    
  //   autocomplete.appendChild(li);
  // });