const meuSlider = document.querySelector(".comparacao--slider");
const imgWrapper = document.querySelector(".wrapper-imagem-interna"); 

/* meuSlider.addEventListener("change", () => {
imgWrapper.style.width = `${meuSlider.value}%`;
}); */

meuSlider.addEventListener("input", () => {
imgWrapper.style.width = `${meuSlider.value}%`;
});




