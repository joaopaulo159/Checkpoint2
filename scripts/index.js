var formControlsElements = document.querySelectorAll('.form-control')
var loginLabelElements = document.querySelectorAll('label')
var createLoginButton = document.querySelector('#loginButton')
var inputElements = document.querySelectorAll('input')
var userEmailValue = document.querySelector('#email')

var loginValidity = {
    
    email: false,
    password: false

}

for (let control of formControlsElements) {

    const controlInputElement = control.children[1]

    controlInputElement.addEventListener('keyup', event => {

        let inputValid = event.target.checkValidity()

        loginValidity[event.target.id] = inputValid
 
        if(inputValid){

            control.classList.remove('error')
            
        } else {

            control.classList.add('error')
        }
    })
} 

  let loginValues = {
    email: " ",
    password: " "
  }

  var requestHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

var requestPostConfiguration = {
    method: 'POST',
    headers: requestHeaders
}


function loginUser(){
  requestPostConfiguration.body = JSON.stringify(loginValues)
  fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/users/login',requestPostConfiguration).then(
    response =>{

            if(response.ok === true){
                
                response.json().then(

                    info => {
                        localStorage.setItem('token', info.jwt)

                        window.location.href = './pages/tarefas.html'
                    }
                )

            } else {

                alert('Dados incorretos ou usuário não encontrado')

            }
    }
  )
}

for(let input of inputElements){
      
    input.addEventListener('keyup',event=>{
        
      event.preventDefault()
      var inputValue = input.value
      var inputID = input.id

      console.log(loginValues[inputID] = inputValue)
    })

  }


  createLoginButton.addEventListener('click',event =>{

    event.preventDefault()

    let loginValid = Object.values(loginValidity).every(Boolean)

    if(loginValid) {

        loginUser()

    }
    
  })


let spanElements = document.querySelector('span')
let passwordInputsElements = document.querySelector('.passwordInput')
let passwordImg = document.querySelector('.img-eye')

passwordImg.addEventListener('click', event => {

    spanElements.classList.toggle('visible');

    if(spanElements.classList.contains('visible')) {
        passwordImg.src = './assets/eye-off.svg';
        passwordInputsElements.type = 'text'
    } else {
        passwordImg.src = './assets/eye.svg';
        passwordInputsElements.type = 'password'
    }
});




