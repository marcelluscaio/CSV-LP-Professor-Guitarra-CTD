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
//No futuro, a height da div deve ser igual à height do p dentro dela
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

//contador
setInterval(() => {
   let tempoAgora = new Date();
   let milissegundosAteLimite = dataLimite.getTime() - tempoAgora.getTime();
   let diasRestantes = milissegundosAteLimite/(1000*60*60*24);
   let diasRestantesRedondo = Math.floor(diasRestantes);
   let horasRestantes = (diasRestantes - diasRestantesRedondo)*24;
   let horasRestantesRedondo = Math.floor(horasRestantes);
   let minutosRestantes = (horasRestantes - horasRestantesRedondo)*60;
   let minutosRestantesRedondo = Math.floor(minutosRestantes);
   let segundosRestantes = (minutosRestantes - minutosRestantesRedondo)*60;
   let segundosRestantesRedondo = Math.floor(segundosRestantes);
   const contadorDias = document.querySelector(".contador--dias");
   const contadorHoras = document.querySelector(".contador--horas");
   const contadorMinutos = document.querySelector(".contador--minutos");
   const contadorSegundos = document.querySelector(".contador--segundos"); 
   contadorDias.innerHTML = diasRestantesRedondo;
   contadorHoras.innerHTML = horasRestantesRedondo;
   contadorMinutos.innerHTML = minutosRestantesRedondo;
   contadorSegundos.innerHTML = segundosRestantesRedondo;
}, 1000);

const dataLimite = new Date("December 31, 2022 23:59:59");
const diaLimite = dataLimite.getDate();
const horaLimite = dataLimite.getHours();
const minutoLimite = dataLimite.getMinutes();
const segundoLimite = dataLimite.getSeconds();