const formLogin = document.querySelector("#form-login")
const formCadastro = document.querySelector("#cadastro")
const linkCadastro = document.querySelector(".cadastre-se")
const linkLogin = document.querySelector(".link-login")
linkCadastro.addEventListener('click', (e) => {
  e.preventDefault();
  formCadastro.style.display = 'flex'
  formLogin.style.display = 'none'
})

linkLogin.addEventListener('click', (e) => {
  e.preventDefault();
  formCadastro.style.display = 'none'
  formLogin.style.display = 'flex'
})


