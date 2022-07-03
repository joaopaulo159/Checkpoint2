const formControlsElements = document.querySelectorAll('.form-control')
const loginbuttonElement = document.querySelector('#loginButton')
const inputsElements = document.querySelectorAll('input')
var userEmailValue = document.querySelector('#userEmail')

let formValidation = {
    userEmail: false,
    userPassword:false
}

loginbuttonElement.addEventListener('click', event => {

    event.preventDefault()

    let formValid = Object.values(formValidation).every(Boolean)

    if(formValid) {
        
        console.log(userEmailValue)

        localStorage.setItem('userEmail', userEmailValue)

        window.location = '../pages/tarefas.html' 

    }

/*      makeLogin()  */
})


/* for (let input of inputsElements) {
    input.addEventListener('keyup', event => {

        formValidation[input.id] = input.value
    })
} */


for (let control of formControlsElements) {

    const controlInputElement = control.children[1]

    controlInputElement.addEventListener('keyup', event => {

        let inputValid = event.target.checkValidity()

        formValidation[event.target.id] = inputValid

        if(event.target.id === 'userEmail') {

            userEmailValue = event.target.value

        }

 
        if(inputValid){

            control.classList.remove('error')
            
        } else {

            control.classList.add('error')
        }
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




/*  function makeLogin () {
    
    let requestConfiguration = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(form)
}

fetch('https://ctd-todo-api.herokuapp.com/v1/users/login', requestConfiguration).then(

        response => {

            if(response.ok === true){

                response.json().then(

                    info => {
                        localStorage.setItem('token', info.jwt)
                        window.location.href = './tarefas.html'
                    }
                )

            } else {

                alert('Não existe usuário ou dados estão incorretos')

            }

        }
    )
    
}  */