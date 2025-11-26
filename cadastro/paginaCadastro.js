
document.getElementById('irLogin').addEventListener('click', async () => {
  window.location.href = '../../login/paginaLogin.html'
});

document.getElementById('botaoVoltar').addEventListener('click', async () => {
  window.location.href = '../../index.html'
});

document.getElementById('botaoCadastro').addEventListener('click', async () => {
  const usuarios = document.getElementById('usuario').value
  const email = document.getElementById('email').value
  const senha = document.getElementById('senha').value
  const confirmarSenha = document.getElementById('confirmarSenha').value

  if (!usuarios || !email || !senha || !confirmarSenha) {
    alert('Por favor, preencha todos os campos!');
    return;
  } else if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
    alert('Por favor, insira um email válido!');
    return;
  } else if (senha !== confirmarSenha) {
    alert('As senhas não coincidem!');
    return;
  } else {
    
    fetch('http://localhost:3000/insert', {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        usuarios: usuarios,
        email: email,
        senha: senha,
      }),
    })

    document.getElementById('usuario').value = ''
    document.getElementById('email').value = ''
    document.getElementById('senha').value = ''
    document.getElementById('confirmarSenha').value = ''

    window.location.href = '../login/paginaLogin.html'

  }
});