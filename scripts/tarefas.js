let token = localStorage.getItem('token')
let userInfo = document.querySelector('.user-info')



var requestHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
}


  var requestConfiguration = {
    method: 'GET',
    headers: requestHeaders,
    
}  

console.log (token)



function getUser(){
    fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/users/getMe',requestConfiguration).then(
        response =>{
            response.json().then(
                sucess =>{
                   
                    userInfo.children[0].innerHTML = `<p>${sucess.firstName}</p>`
                
                })
        
                })
        }
    

getUser()

let appointmentDone = document.querySelector('.tarefas-terminadas')
var appointmentNotDone = document.querySelector('.tarefas-pendentes')

function getTasks(){
    fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/tasks',requestConfiguration).then(

        response =>{
            response.json().then(
                appointments =>{
                    appointmentNotDone.innerHTML = ""
                    appointmentDone.innerHTML = ""
                    for(let appointment of appointments){

                    if(appointment.completed == true){
                        appointmentDone.innerHTML +=`<li class="tarefa">
                        <div class="done"></div>
                        <div class="descricao">
                          <p class="nome">${appointment.description}</p>
                          <p class="timestamp">${appointment.createdAt}</p>
                        </div>`
                    }else{
                        appointmentNotDone.innerHTML += `<li class="tarefa">
                        <div class="not-done"></div>
                        <div class="descricao">
                        <p class="nome">${appointment.description}</p>
                        <p class="timestamp">${appointment.createdAt}</p>
                        </div>
                      </li>`

                    }
                }
                }    
            )
        }
    )
}


getTasks()

var objectPost = {
    description: "",
    completed: false
  }  

var inputIDElement = document.querySelector('#description')

inputIDElement.addEventListener('keyup', event =>{

    event.preventDefault()

    objectPost[inputIDElement.id]=inputIDElement.value
    console.log(objectPost)
    
})


var requestPostConfiguration = {
    method: 'POST',
    headers: requestHeaders,
    
}

  

function postTask(){
    requestPostConfiguration.body = JSON.stringify(objectPost)
    fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/tasks', requestPostConfiguration).then(
        response =>{
            response.json().then(
                tasks =>{
                    console.log(tasks)
                })
            })
        getTasks()    
        }


var buttonAddTask = document.querySelector('#addTask')

buttonAddTask.addEventListener('click',response =>{
    response.preventDefault()
    postTask()
    getTasks()
    inputIDElement.value = ""
})


/* let dataCriacao = new Date(task.createdAt)

let dataCriacaoFormatada = dataCriacao.toLocaleDateString(
    'pt-BR',
       {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
       }
    ) */