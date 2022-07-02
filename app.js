const  EnviarFormularioBotao = document.querySelector("#enviar");

const ObterTodosFormulario = document.querySelectorAll('input')

EnviarFormularioBotao.addEventListener('click', event => {

  event.preventDefault()

  createUser()
})

for(let input of ObterTodosFormulario) {

  input.addEventListener('keyup', event => {

      const inputValue = input.value
      const inputId = input.id

      formData[inputId] = inputValue

      console.log(formData)

  })

}

var formData = {
  firsName: '',
  lastName: '',
  email: '',
  password: '',
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




function createUser() {

  requestPostConfiguration.body = JSON.stringify(formData)

    fetch('https://ctd-todo-api.herokuapp.com/v1/users', requestPostConfiguration).then(

      response => {

          response.json()
      })
}





