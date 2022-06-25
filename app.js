const  EnviarFormularioBotao = document.querySelector("#enviar");

const ObterTodosFormulario = document.querySelectorAll('input')

EnviarFormularioBotao.addEventListener('click', event => {

  event.preventDefault()

  criarUsuario()
})

for(let input of ObterTodosFormulario) {

  input.addEventListener('keyup', event => {

      const inputValue = input.value
      const inputId = input.id

      Entrada[inputId] = inputValue

      console.log(Entrada)

  })

}

var Entrada = {
  Nome: '',
  Sobrenome: '',
  Email: '',
  Password: '',
  PasswordRepeat: ''
}
var requestHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

var requestPostConfiguration = {
  method: 'POST',
  headers: requestHeaders
}




function criarUsuario() {

  requestPostConfiguration.body = JSON.stringify(Entrada)

    fetch('https://ctd-todo-api.herokuapp.com/v1/users', requestPostConfiguration).then(

      response => {

          response.json()
      })
}





