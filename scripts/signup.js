var formControlsElements = document.querySelectorAll('.form-control')
var labelElements = document.querySelectorAll('label')
var createUserButton = document.querySelector('#createUserbutton')
var userPassword = document.querySelector('#userPassword')
var userPasswordConfirm = document.querySelector('#userPasswordConfirm')
var inputElements = document.querySelectorAll('input')


var signupValid = {
    userfirstName:false,
    userlastName:false,
    useremail:false,
    userpassword:false,
    userPasswordConfirm:false}

    
for (let labelElement of labelElements){

    var labelChildren = labelElement.children[0]

    labelChildren.addEventListener('keyup',event =>{

      var signElement = event.target.checkValidity()

      signupValid[event.target.id] = signElement

      if (signElement){
        labelElement.classList.remove('error')
        
      }
        else{
          labelElement.classList.add('error')
        }
      

    })

}


userPasswordConfirm.addEventListener('keyup',event =>{
    if(userPassword.value == userPasswordConfirm.value){
        labelElements[3].classList.remove('error')
    }else{
        labelElements[4].classList.add('error')
    }
})



    var cadastro = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
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
    
        requestPostConfiguration.body = JSON.stringify(cadastro)
    
    
          fetch('https://ctd-todo-api.herokuapp.com/v1/users', requestPostConfiguration).then(
    
            response => {
    
                response.json().then(
    
                    info => {
    
                        if(response.ok == true) {
    
                            alert('Parabnes! Usuário criado com sucesso.')
    
                        } else {
    
                            if(info === 'El usuario ya se encuentra registrado') {
    
                                alert('O e-mail digitado ja esta cadastrado')
    
                            }
    
                        }
    
                    }
    
                )
    
            }
    
        )
    
    }

   
    createUserButton.addEventListener('click',event =>{
        event.preventDefault()
        createUser()     
    for(let input of inputElements){
        input.addEventListener('keyup',event =>{
            
            var inputValue = input.value
            var inputID = input.id
    
            console.log(cadastro[inputID] = inputValue)
            
        })
    }
})
