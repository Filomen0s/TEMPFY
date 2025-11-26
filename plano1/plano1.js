const valor = document.getElementById('valor');
const mais = document.getElementById('mais');
const menos = document.getElementById('menos');
const preco = document.getElementById('preco');
const resumoPagamento = document.querySelector('.formasPagamentos');
const listaPagamentos = document.querySelectorAll('.listaPagamentos li');
let permitirCompra = false

const valorAtualizado = () => {
    valor.innerHTML = contador;
    preco.innerHTML = `R$ ${precoTotal},00`;
};

let contador = 1;
let precoTotal = 50;

mais.addEventListener('click', () => {
    contador += 1;
    precoTotal += 50;
    valorAtualizado();
});

menos.addEventListener('click', () => {
    contador -= 1;
    precoTotal -= 50;
    if (contador <= 1) {
        precoTotal = 50;
        contador = 1;
    }
    valorAtualizado();
});

listaPagamentos.forEach(item => {
    item.addEventListener('click', () => {
        resumoPagamento.textContent = item.textContent;
        item.closest('details').removeAttribute('open');
        permitirCompra = true
    });
});

function pagamento(){
    if(permitirCompra == true){
        alert(`Compra concluida, muito obrigado!`)
        window.location.href = '../../index.html'
    } else{
        alert(`selecione uma forma de pagamento, por favor!`)
    }
}

function home(){
    window.location.href = '../../index.html'
}

function login(){
    window.location.href = '../../login/paginaLogin.html'
}