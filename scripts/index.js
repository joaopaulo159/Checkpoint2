var indexLabelElements = document.querySelectorAll('label')
var createLoginButton = document.querySelector('#userLogin')
var inputElements = document.querySelectorAll('input')
var loginValidity = {
    
    inputEmail: false,
    inputPassword: false

}

for (let labelElement of indexLabelElements){
    const newElementChildren = labelElement.children[0]

    newElementChildren.addEventListener('keyup',event =>{

    var inputValid = event.target.checkValidity()

    loginValidity[event.target.id] = inputValid 
    
         
    if (inputValid){
      labelElement.classList.remove('error')
      
    }
      else{
        labelElement.classList.add('error')
      }
  
  
  })
  
  }

  let loginvalues = {
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
  requestPostConfiguration.body = JSON.stringify(loginvalues)
  fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/users/login',requestPostConfiguration).then(
    response =>{
      response.json().then(
        sucess =>{
          console.log(localStorage.setItem('token',sucess.jwt))

          if(response.ok == true) {

            window.location = './tarefas.html'
      
        } else {
      
            alert('Usuário não encontrado')
        }
        }
      )
    }
  )
}

for(let input of inputElements){
      
  input.addEventListener('keyup',event=>{
  
    var inputValue = input.value
    var inputID = input.id

    console.log(loginvalues[inputID] = inputValue)
  })

  

}

  createLoginButton.addEventListener('click',event =>{

    event.preventDefault()

    loginUser()

  
    
    
  })



