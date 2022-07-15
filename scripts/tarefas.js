let token = localStorage.getItem('token')
let userInfo = document.querySelector('.user-info')
let finalizar = document.getElementById('closeApp')



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

function getTaskByID(id){
    
    fetch(`https://ctd-fe2-todo-v2.herokuapp.com/v1/tasks/${id}`,requestConfiguration).then(
        sucess => {
            sucess.json().then(
                tasks => {
                   console.log("ID capturado") 
                }
            )
        }
    )
    return id
  }

  function updateTask(id,completed){

    var requestPutConfiguration = {
        method:'PUT',
        body:JSON.stringify({completed: !completed}),
        headers:requestHeaders
      }
    fetch(`https://ctd-fe2-todo-v2.herokuapp.com/v1/tasks/${id}`,requestPutConfiguration).then(
        sucess => {
            sucess.json().then(
                stats => {
                    console.log("deu certo!!!")
                }
            )
        }
    )
   return getTasks()
    
  }

  function deleteTask(id){
    var requestDeleteConfiguration = {
        method:'DELETE',
        headers:requestHeaders
      }

    fetch(`https://ctd-fe2-todo-v2.herokuapp.com/v1/tasks/${id}`,requestDeleteConfiguration).then(
        sucess => {
            sucess.json().then(
                stats => {
                
                }
            )
        }
    )
    return getTasks()
  }


let appointmentDone = document.querySelector('.tarefas-terminadas')
var appointmentNotDone = document.querySelector('.tarefas-pendentes')

function getTasks(){
    
    return fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/tasks',requestConfiguration).then(

        response =>{
            response.json().then(
                appointments =>{
                    appointmentNotDone.innerHTML = ""
                    appointmentDone.innerHTML = ""
                    
                    for(let appointment of appointments){

                        let dataCriacao = new Date(appointment.createdAt)
                        let dataFormatada = dataCriacao.toLocaleDateString(
                            'pt-BR',
                            {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                            }
                        )  

                        if(appointment.completed === true){
                            appointmentDone.innerHTML +=`<li class="tarefa">
                            <div class="done" ></div>
                            <button class="circulo" id="${appointment.id}" onclick="updateTask(${appointment.id},${appointment.completed})"></button>
                            <button class="deleteButton"><img class="deleteImg" src="../assets/delete.svg" alt=""></button>
                            <div class="descricao">
                              <p class="nome">${appointment.description}</p>
                              <p class="timestamp">Criada em: ${dataFormatada}</p>
                              
                            </div>`
                                                   
                        }else{
                            appointmentNotDone.innerHTML += `<li class="tarefa">
                            <div class="not-done" id="${appointment.id}" onclick="updateTask(${appointment.id},${appointment.completed})"></div>
                            <button class="deleteButton"><img class="deleteImg" src="../assets/delete.svg" alt=""></button>
                            <div class="descricao">
                            <p class="nome">${appointment.description}</p>
                            <p class="timestamp">Criada em: ${dataFormatada}</p>
                            
                            </div>
                          </li>`
    
                        }
                        
                        document.querySelector('.deleteButton').addEventListener('click', 
                        event =>{
                            deleteTask(`${appointment.id}`)   
                        
                        })
                                  
                }
                }    
            )
        }
    )
    return location.reload
}


getTasks()


var objectPost = {
    description: "",
    completed: false
  }  

var inputIDElement = document.querySelector('#description')

inputIDElement.addEventListener('keyup', event =>{
    objectPost[inputIDElement.id]=inputIDElement.value

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
        return getTasks()    
        }


var buttonAddTask = document.querySelector('#addTask')

buttonAddTask.addEventListener('click',response =>{
    response.preventDefault()
    postTask()
    getTasks()
    inputIDElement.value = ""
})


finalizar.addEventListener('click',response =>{
    response.preventDefault()
   populateStorage()
   alert('Sessão finalizada')
   window.location="../index.html"
})

function populateStorage() {
    localStorage.removeItem('token');
  }
