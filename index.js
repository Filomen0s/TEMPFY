function irPlanoUm(){
    window.location.href = '/plano1/plano1.html'
}

function irPlanoDois(){
    window.location.href = '/plano2/plano2.html'
}

function home(){
    window.location.href = '../../index.html'
}

function login(){
    window.location.href = '/login/paginaLogin.html'
}

function irParaPlanos(){
    const planos = document.getElementById("planos");
    planos.scrollIntoView({ behavior: "smooth" });
}

function irParaSobreNos(){
    const tempfy = document.getElementById("tempfy");
    tempfy.scrollIntoView({ behavior: "smooth" });
}

function irParaContato(){
    const contato = document.getElementById("contato");
    contato.scrollIntoView({ behavior: "smooth" });
}