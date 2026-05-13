import {openModal} from "./modal";

export function renderSidebar(state, selectTodo, addTodo) {

    const sidebar = document.querySelector('.sidebar')
    sidebar.innerHTML = ''

    const buttonArea = document.createElement('div')
    buttonArea.classList.add('.button-area')

    const toDoList = document.createElement('div')
    buttonArea.classList.add('.todo-list')

    // Pulsante Nuovo To-do
    const addTodoButton = document.createElement('button')
    addTodoButton.classList.add('addTodo')
    addTodoButton.textContent = 'Add Todo'
    addTodoButton.addEventListener('click', () => openModal(addTodo))
    buttonArea.appendChild(addTodoButton)

    sidebar.appendChild(buttonArea)

    const todoUl = document.createElement('ul')

    // Lista to-do
    state.todos.forEach(todo => {
        const todoEl = document.createElement('li')
        // Se un to-do è ha done = true , allora nella sidebar mostro il testo sbarrato e grigio chiaro
        if(todo.done){
            todoEl.classList.add('todo-done')
        } else {
            todoEl.classList.add('todo')
        }


        todoEl.textContent = todo.name
        if(todo.id === state.selectedTodo.id) {
            todoEl.classList.add('active')
        }
        todoEl.addEventListener('click', () => {
            selectTodo(todo.id)
        })




        todoUl.appendChild(todoEl)
    })

    toDoList.appendChild(todoUl)
    sidebar.appendChild(toDoList)
}