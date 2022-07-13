const email = document.getElementById('email');
const senha = document.getElementById('senha');
const login = document.getElementById('login');

function verificaAcesso() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

login.addEventListener('click', verificaAcesso);

const btnEnviar = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');
console.log(checkBox);

function check() {
  if (checkBox.checked === true) {
    btnEnviar.removeAttribute('disabled');
  } else {
    btnEnviar.setAttribute('disabled', true);
  }
}

checkBox.addEventListener('click', check);
