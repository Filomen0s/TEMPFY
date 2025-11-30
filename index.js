function irPlanoUm() {
    window.location.href = '/plano1/plano1.html'
}

function irPlanoDois() {
    window.location.href = '/plano2/plano2.html'
}

function home() {
    window.location.href = '../../index.html'
}

let modal = false;

document.getElementById("botaoPerfil").addEventListener("click", () => {
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const senha = document.getElementById('senha')

    if (modal == false) {
        modal = true;
        document.getElementById("modalConta").style.display = "block";

        if (localStorage.getItem('usuario') == null) {
            document.getElementById("entreNaConta").style.display = 'block';
            document.getElementById("infoConta").style.display = 'none';

        } else {
            document.getElementById("entreNaConta").style.display = 'none';
            document.getElementById("infoConta").style.display = 'flex';

            const login = JSON.parse(localStorage.getItem('usuario'));

            nome.innerHTML = `Nome: ${login[0].usuario}`;
            email.innerHTML = `Email: ${login[0].email}`;
            senha.innerHTML = `Senha: ${login[0].senha}`;
        }

    } else {
        modal = false;
        document.getElementById("modalConta").style.display = "none";
    }
});

document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem('usuario');
    window.location.href = '../../index.html'
});

document.getElementById("login").addEventListener("click", () => {
    window.location.href = 'login/paginaLogin.html'
});

function irParaPlanos() {
    const planos = document.getElementById("planos");
    planos.scrollIntoView({ behavior: "smooth" });
}

function irParaSobreNos() {
    const tempfy = document.getElementById("tempfy");
    tempfy.scrollIntoView({ behavior: "smooth" });
}

function irParaContato() {
    const contato = document.getElementById("contato");
    contato.scrollIntoView({ behavior: "smooth" });
}