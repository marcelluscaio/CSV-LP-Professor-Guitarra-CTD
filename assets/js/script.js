//slider de troca de imagem
const meuSlider = document.querySelector(".comparacao--slider");
const imgWrapper = document.querySelector(".wrapper-imagem-interna"); 

/* meuSlider.addEventListener("change", () => {
imgWrapper.style.width = `${meuSlider.value}%`;
}); 
Não foi necessário usar change, pois input faz em tempo real 
*/

meuSlider.addEventListener("input", () => {
imgWrapper.style.width = `${meuSlider.value}%`;
});

//linha do tempo animada
let listaItensLinhaTempo = document.querySelectorAll(".fora-tela");

window.onscroll = () =>{
   procuraItens(listaItensLinhaTempo)
};

function procuraItens(lista){
   for(item of lista){
      let posicao = item.getBoundingClientRect().y;
      if(posicao<450){
         item.classList.remove("fora-tela")
      }
   }
}

//acordeon
let botoesAcordeon = document.querySelectorAll(".acordeon--botao");
for(botao of botoesAcordeon){
   botao.addEventListener("click", (e) => {
      for(botao of botoesAcordeon){
         if(botao===e.target){
            e.target.classList.toggle("mostrar");
         } else{
            botao.classList.remove("mostrar");
         }
      }         
   });
}
//melhorar transição e tamanho


