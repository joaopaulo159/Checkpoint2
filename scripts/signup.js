// Validação do formulário

const formControlsElements = document.querySelectorAll('.form-control')
const createUserButtonElement = document.querySelector('#createUserButton')
const userPasswordConfirmElement = document.querySelector('#userPasswordConfirm')
const userpassWordElement = document.querySelector('#userPassword')

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

var formValidation = {
    firstName: false,
    lastName:false,
    userEmail: false,
    userPassword:false,
    userPasswordConfirm:false
} 

createUserButtonElement.addEventListener ('click', event => {

    event.preventDefault()

     let formValid =  Object.values(formValidation).every(Boolean)
     
     if(formValid) {

        alert('Cadastro bem sucedido. Realize o login para acesso a sua página.')

        window.location = './login.html'

    } else {

        alert('O formulário não está preenchido corretamente.')
    } 

})


for (let control of formControlsElements) {

    const controlInputElement = control.children[1]

    controlInputElement.addEventListener('keyup', event => {

        let inputValid = event.target.checkValidity()

        formValidation[event.target.id] = inputValid
 
        if(inputValid){

            control.classList.remove('error')
            
        } else {

            control.classList.add('error')
        }
    })
} 

// Validação das senhas

userPasswordConfirmElement.addEventListener('keyup', event => {

    if (userpassWordElement.value == userPasswordConfirmElement.value) {

       formControlsElements[3].classList.remove('error')
        
        } else {
        formControlsElements[3].classList.add('error')
        }
    }
)
