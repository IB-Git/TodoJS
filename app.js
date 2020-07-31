const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button'); //Ask this Why not getElemetbytId
const todoList = document.querySelector('.todo-list');



const addTodo = (event) =>{
    event.preventDefault();
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');                  //Ask this clarify ClassList.add()

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    todoInput.value= '';

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> </i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"> </i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton); 
    

    todoList.appendChild(todoDiv);
}

todoButton.addEventListener('click', addTodo);

const deleteTodo = (event) =>{
    const item = event.target;
    if(item.classList[0] === 'delete-btn'){ //Ask this
        const todo = item.parentElement; //Ask this
        todo.remove();
    }
}

todoList.addEventListener('click', deleteTodo);


const checkTodo = (event) =>{
    const item = event.target;
    if(item.classList[0] === 'complete-btn'){ 
        const todo = item.parentElement; 
       todo.classList.toggle('completed') //Ask this
    }
}

todoList.addEventListener('click', checkTodo);