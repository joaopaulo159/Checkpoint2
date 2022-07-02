/* const headersRequest = {
    'Accept' : 'application/json',
    'Content-type' : 'application/json'
}

let token = localStorage.getItem('token')

if (token === null) {

    window.location.href = '../pages/signup.html'
}  */

var userEmailElement = document.querySelector('#userEmail')
var userEmail = localStorage.getItem('userEmail')

userEmailElement.innerHTML = userEmail.split('@')[0]
console.log(userEmail.split('@')[0])