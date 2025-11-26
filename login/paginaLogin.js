document.getElementById('entrar').addEventListener('click', async () => {

  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  const response = await fetch(`http://localhost:3000/select/${usuario}`)
  const login = await response.json();
  if (login[0].senha === senha) {
    window.location.href = '../index.html';
  } else {
    alert('Usuário ou senha incorretos!');
  }
});

document.getElementById('voltar').addEventListener('click', async () => {
  window.location.href = '../../index.html'
});