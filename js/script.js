const EmailLogin = document.querySelector("#email-login")
const SenhaLogin = document.querySelector("#senha-login")
let EmailLoginV = "";
let SenhaLoginV = "";

const SenhaCadastro = document.querySelector("#senha-cadastro")
const EmailCadastro = document.querySelector("#email-cadastro")
const NomeCadastro = document.querySelector("#nome-cadastro")
let SenhaCadastroV = "";
let EmailCadastroV = "";
let NomeCadastroV = "";

const formLogin = document.querySelector("#form-login")
const formCad = document.querySelector("#cadastro")
const linkCadastro = document.querySelector(".cadastre-se")
const linkLogin = document.querySelector(".link-login")
EmailLogin.addEventListener('change',(e)=>{
  e.preventDefault();
  EmailLoginV = e.target.value
})
SenhaLogin.addEventListener('change',(e)=>{
  e.preventDefault();
  SenhaLoginV = e.target.value
})

SenhaCadastro.addEventListener('change', (e)=>{
  e.preventDefault();
  SenhaCadastroV = e.target.value
})
EmailCadastro.addEventListener('change', (e)=>{
  e.preventDefault();
  EmailCadastroV = e.target.value
})
NomeCadastro.addEventListener('change', (e)=>{
  e.preventDefault();
  NomeCadastroV = e.target.value
})
linkCadastro.addEventListener('click', (e) => {
  e.preventDefault();
  formCad.style.display = 'flex'
  formLogin.style.display = 'none'
})

linkLogin.addEventListener('click', (e) => {
  e.preventDefault();
  formCad.style.display = 'none'
  formLogin.style.display = 'flex'
})
formLogin.addEventListener('submit', async (e) => {
  await login(e);
})

formCad.addEventListener('submit', async (e) => {
  await cadastro(e)
})
const login = async (e) => {
  e.preventDefault();
  const bodyRequest = {
    email: EmailLoginV,
    senha: SenhaLoginV
  };
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyRequest)
    })
    const data = await response.json();
    if (response.status !== 200) {
      console.error(data)
      return
    }
    localStorage.setItem('token', data.token)
    alert(`Bem vindo`)
  } catch (error) {
    alert('error')
  }
}

const cadastro = async (e) => {
  e.preventDefault();
  const bodyRequest = {
    email: EmailCadastroV,
    senha: SenhaCadastroV,
    nome: NomeCadastroV
  };
  try {
    const response = await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyRequest)
    })
    const data = await response.json();
    if (response.status !== 201) {
      console.error(data)
      return
    }
    alert('usuário criado com sucesso')
    formLogin.style.display = 'flex'
    formCad.style.display = 'none'
  } catch (error) {
    alert('error')
  }
}