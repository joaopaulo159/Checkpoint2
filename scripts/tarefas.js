let token = localStorage.getItem('token')
let userInfo = document.querySelector('.user-info')
var requestHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
}

var requestPostConfiguration = {
    headers: requestHeaders,
}



function getUser(){
    fetch('https://ctd-todo-api.herokuapp.com/v1/users/getMe',requestPostConfiguration).then(
        response =>{
            response.json().then(
                sucess =>{
                   
                    userInfo.children[0].innerHTML = `<p>${sucess.firstName}</p>`
                
                })
        
                })
        }
    

getUser()



