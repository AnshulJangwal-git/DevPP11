let addtodoButton = document.querySelector(".add-todo") ;
let todoInput = document.querySelector(".todo-input") ;

//attach click event on addtodoButton...

// addtodoButton.addEventListener( "click", addTodo) ;

todoInput.addEventListener("keypress", addTodo) ;

function addTodo(e){
   if(e.key == "Enter"){
       let todoInputValue = todoInput.value ;
       if(todoInputValue){
           console.log(todoInputValue) ;

           todoInput.value = "" ;
       }
   }
}

// function addTodo(e){
// // console.log(event) ;

// let todoInputValue = todoInput.value ;

//   if(todoInputValue){
//       //falsy values == 0, "", false, undefined, null, NaN

//     console.log(todoInputValue) ;
//     //it will empty the todoInput..
//     todoInput.value = "" ;
//   }
// }