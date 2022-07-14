const emails = document.getElementById('email');
const senha = document.getElementById('senha');
const login = document.getElementById('login');

function verificaAcesso() {
  if (emails.value === 'tryber@teste.com' && senha.value === '123456') {
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

const areaTexto = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

function contador() {
  const tam = areaTexto.value.length;
  const atl = 500 - tam;
  counter.innerHTML = atl;
}
areaTexto.addEventListener('input', contador);
function getData() {
  const materias = [];
  for (let index = 7; index <= 12; index += 1) {
    const tmp = document.forms[1][index];
    if (tmp.checked === true) {
      materias.push(tmp.value);
    }
  }
  console.log(materias);
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const avaliaçao = document.querySelector('input[name="rate"]:checked').value;
  const observaçao = document.querySelector('#textarea').value;
  return [nome, sobrenome, email, casa, familia, materias, avaliaçao, observaçao];
}

function criaForm(dados) {
  const main = document.querySelector('main');
  const infoPara = document.createElement('ul');
  main.appendChild(infoPara);
  infoPara.id = 'form-data';
  const data = [`Nome: ${dados[0]} ${dados[1]}`,
    `Email: ${dados[2]}`, `Casa: ${dados[3]}`, `Família: ${dados[4]}`,
    `Matérias: ${dados[5][0]}, ${dados[5][1]}, ${dados[5][2]}`, `Avaliação: ${dados[6]}`,
    `Observações: ${dados[7]}`];
  for (let index = 0; index < 7; index += 1) {
    const tmp = document.createElement('li');
    tmp.innerText = data[index];
    infoPara.appendChild(tmp);
  }
}

function botton(event) {
  event.preventDefault();
  const dataForm = getData();
  document.querySelector('#evaluation-form').style.display = 'none';
  criaForm(dataForm);
}
btnEnviar.addEventListener('click', botton);
