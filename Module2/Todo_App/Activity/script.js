let addtodoButton = document.querySelector(".add-todo") ;
let todoInput = document.querySelector(".todo-input") ;

let todosList = document.querySelector(".todos-list-container") ;

//attach click and Enter Keypress event on addtodoButton...

todoInput.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      addTodo();
    }
  });

addtodoButton.addEventListener("click", function(e){
    addTodo() ;
}) ;


function addTodo(){
    
    let todoInputValue = todoInput.value ;
    
        if(todoInputValue){
            appendTodo(todoInputValue) ;

            todoInput.value = "" ;
        }  
}

function appendTodo(todo){
    let todoItemDiv = document.createElement("div") ;
    todoItemDiv.classList.add("todo-item") ;
    
    // <div class = "todo-item"> </div>..

    let pTag = document.createElement("p") ;
    pTag.classList.add("todo") ;
    pTag.textContent = todo ;

    // <p class = "todo-input">Learn CSS</p>..

    let deleteTodoButton = document.createElement("button") ;
    deleteTodoButton.classList.add("delete-todo") ;
    deleteTodoButton.textContent = "Delete" ;

    deleteTodoButton.addEventListener("click", deleteTodo) ;

    // <button class = "delete-todo">Delete</button>
    todoItemDiv.append(pTag) ;
    todoItemDiv.append(deleteTodoButton) ;

    todosList.append(todoItemDiv) ;

}

function deleteTodo(e){
    e.target.parentNode.remove() ;
}