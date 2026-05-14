export function renderContent(state, toggleDone) {
    const content = document.querySelector('.content')
    content.innerHTML = ''

    const todo = document.createElement('div')
    todo.classList.add('todo-content')

    todo.innerHTML = `
    <h2>Title: ${state.selectedTodo.title}</h2>
    <p>Due Date: ${state.selectedTodo.dueDate}</p>
    <br>
    <p>${state.selectedTodo.description}</p>
  `

    const toggleDoneEl = document.createElement('input')
    toggleDoneEl.setAttribute('type', 'checkbox') // ✅
    toggleDoneEl.checked = state.selectedTodo.done

    toggleDoneEl.addEventListener('change', (e) => {
        e.stopPropagation()
        toggleDone()
    })

    todo.appendChild(toggleDoneEl)

    // Pulsante Delete To-do
    // const deleteTodoButton = document.createElement('button')
    // deleteTodoButton.classList.add('addProject')
    // deleteTodoButton.textContent = 'Delete'
    // //deleteTodoButton.addEventListener('click', () => deleteTodo(state.selectedTodo.id))
    //
    // todo.appendChild(deleteTodoButton)

    content.appendChild(todo)
}