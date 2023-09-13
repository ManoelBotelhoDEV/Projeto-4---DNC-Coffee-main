//let botao = null;
let cards = Array.from(document.querySelectorAll(".card"));
let buttons = Array.from(document.querySelectorAll(".comprar"));
let cardText = Array.from(document.querySelectorAll(".card-text"));

cards.forEach((element, index) => {
  element.addEventListener("mouseenter", () => {

    //Os elementos do botão fica igual em todos os cards.
    cardText[index].style.height= "110px";
    buttons[index].style.visibility = "visible";
    buttons[index].style.height = "auto";
  });

  element.addEventListener("mouseleave", () => {
    cardText[index].style.height= "auto";
    buttons[index].style.visibility = "hidden";
    buttons[index].style.height = "0";
  });
});

//Modal do botão Atendimento
let modalCard = null;
let modal = document.querySelector("#modal");
let modalPlace = document.querySelector("#modalPlace");

//Checa se o modal já existe, para não repetir.
modal.addEventListener("click", () => {
  if (modalCard !== null) {
    modalCard.remove();
  }

  //Cria uma div para inserir o conteúdo do modal dentro.
  modalCard = document.createElement("div");
  modalPlace.style.visibility = "visible";

  modalCard.innerHTML = `<div class="modalAtendimento">
    <button><img src="assets/images/close-btn.png" onClick="closeModal()"></button>
    <h1>Atendimento</h1>
    <p>Rua José de Alencar, 111, Centro<br>
    CEP: 12209-000 | +55 (11) 3333-8000</p>
     <button>ENTRAR EM CONTATO</button>
    <div>`;

  //Adiciona o modalCard dentro do elemento declarado no HTML
  modalPlace.append(modalCard);
});

closeModal = () => {
  modalPlace.style.visibility = "hidden";
};