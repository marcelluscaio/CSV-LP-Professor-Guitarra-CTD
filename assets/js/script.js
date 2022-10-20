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



