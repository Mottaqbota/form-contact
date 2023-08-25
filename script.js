const inName = document.getElementById('inputName');
const inEmail = document.getElementById('inputEmail');
const inMessage = document.getElementById('inputMessage');

const cardFormContent = document.querySelector('.card-form').innerHTML;
const cardForm = document.querySelector('.card-form');

function sendForm() {
  if (inName.value == "" || inEmail.value == "" || inMessage.value == "") {
    alert('Preencha os Campos!');
  } else {
    alert('Formulário de contato enviado com sucesso!')
    
    cardForm.innerHTML = `
      <div class="alert-message">
        <i class="fa-solid fa-check"></i>
        <h1>Sucesso!</h1>
      </div>
    `
    setTimeout(function() {
      cardForm.innerHTML = cardFormContent;
    }, 2000)
  }
}
