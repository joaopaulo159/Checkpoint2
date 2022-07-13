var formControlsElements = document.querySelectorAll('.form-control')
var labelElements = document.querySelectorAll('label')
var createUserButton = document.querySelector('#createUserButton')
var userPassword = document.querySelector('#password')
var userPasswordConfirm = document.querySelector('#passwordConfirm')
var inputElements = document.querySelectorAll('input')


var signupValid = {
    firstName:false,
    lastName:false,
    email:false,
    password:false,
    passwordConfirm:false
}

    
for (let control of formControlsElements) {

    const controlInputElement = control.children[1]

    controlInputElement.addEventListener('keyup', event => {

        let inputValid = event.target.checkValidity()

        signupValid[event.target.id] = inputValid
 
        if(inputValid){

            control.classList.remove('error')
            
        } else {

            control.classList.add('error')
        }
    })
} 


userPasswordConfirm.addEventListener('keyup', event => {

    if (userPassword.value === userPasswordConfirm.value) {

       formControlsElements[3].classList.remove('error')
        
        } else {
        formControlsElements[3].classList.add('error')
        }
    }
)



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
    
    
          fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/users', requestPostConfiguration).then(
    
            response => {
    
                response.json().then(
    
                    info => {
    
                        if(response.ok == true) {
    
                            alert('Parabéns! Usuário criado com sucesso.')
                            window.location = '../pages/index.html'
    
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

        let formValid =  Object.values(signupValid).every(Boolean)
     
        if(formValid) {
            createUser()  
        } else {
            alert('Preencha o formulário corretamente.')
        }     

})

for(let input of inputElements){
    input.addEventListener('keyup', event =>{
        
        var inputValue = input.value
        var inputID = input.id

        console.log(cadastro[inputID] = inputValue)
        
    })
}

let spanElements = document.querySelector('span')
let passwordInputsElements = document.querySelector('.passwordInput')
let passwordImg = document.querySelector('.img-eye')


passwordImg.addEventListener('click', event => {

    spanElements.classList.toggle('visible');

    if(spanElements.classList.contains('visible')) {
        passwordImg.src = '../assets/eye-off.svg';
        passwordInputsElements.type = 'text'
    } else {
        passwordImg.src = '../assets/eye.svg';
        passwordInputsElements.type = 'password'
    }
});
