document.getElementById('entrar').addEventListener('click', async () => {

  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  const response = await fetch(`http://localhost:3000/select/${usuario}`)
  const login = await response.json();

  if (login.length === 0) {
    alert('Usuário ou senha incorretos!');
  } else if (login[0].senha === senha) {

    let obj = {
      usuario: login[0].usuarios,
      email: login[0].email,
      senha: login[0].senha,
    };

    obj = JSON.stringify([obj]);
    localStorage.setItem('usuario', obj);
    window.location.href = '../index.html';
  } else {
    alert('Usuário ou senha incorretos!');
  }
});

document.getElementById('voltar').addEventListener('click', async () => {
  window.location.href = '../../index.html'
});