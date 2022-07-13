const email = document.getElementById('email');
const senha = document.getElementById('senha');
const login = document.getElementById('login');

login.addEventListener('click', verificaAcesso);

function verificaAcesso() {

    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
        alert('Olá, Tryber!');
    }
    else {
        alert('Email ou senha inválidos.')
    }
}
