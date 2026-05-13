export function renderContent(state, toggleDone) {
    const content = document.querySelector('.content')
    content.innerHTML = ''

    const todo = document.createElement('div')
    todo.classList.add('todo-content')

    todo.innerHTML = `
    <h2>Title: ${state.selectedTodo.name}</h2>
    <p>Date: ${state.selectedTodo.date}</p>
    <br>
    <p>${state.selectedTodo.description}</p>
  `

    const toggleDoneEl = document.createElement('input')
    toggleDoneEl.setAttribute('type', 'checkbox') // ✅
    toggleDoneEl.checked = state.selectedTodo.done

    toggleDoneEl.addEventListener('change', () => {
        toggleDone()
    })

    todo.appendChild(toggleDoneEl)

    content.appendChild(todo)
}