let token = localStorage.getItem('token')
let userInfo = document.querySelector('.user-info')



var requestHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
}



var post = {
    description: "",
    completed: false
  }

  var requestConfiguration = {
    method: 'GET',
    headers: requestHeaders,
    
}  

var requestPostConfiguration = {
    method: 'POST',
    headers: requestHeaders,
    body:JSON.stringify(post)
}



function getUser(){
    fetch('https://ctd-todo-api.herokuapp.com/v1/users/getMe',requestConfiguration).then(
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
    fetch('https://ctd-todo-api.herokuapp.com/v1/tasks',requestConfiguration).then(
        response =>{
            response.json().then(
                appointments =>{
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

function postTask(){
    fetch('https://ctd-todo-api.herokuapp.com/v1/tasks',requestPostConfiguration).then(
        response =>{
            response.json().then(
                tasks =>{
                    console.log(tasks)
                })
            })
        }



// para postTask funcionar precisa captar valor do input e inserilo no obejto "post"
// captar o botão de (+)
// adicionar um evento no botão (+) que chama a post tasks,que enviara os dados para API
// no final chamar a funcao getTasks() para atualizar o array de tarefas.