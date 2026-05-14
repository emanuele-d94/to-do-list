export function addProjectModal(addProject) {
    const modalWindow = document.querySelector('.modal-container')

    modalWindow.innerHTML = `
    <div class="overlay">
        <div class="modal">
            <h3>New Project</h3>
            <input type="text" id="modal-input" placeholder="Project Title" maxlength="20"/>
            <button id="modal-save">Save</button>
            <button id="modal-cancel">Back</button>
        </div>
    </div>
  `
    document.getElementById('modal-cancel').addEventListener('click', () => {
        modalWindow.innerHTML = ''
    })

    document.getElementById('modal-save').addEventListener('click', () => {
        const title = document.getElementById('modal-input').value
        //const description = document.getElementById('modal-textarea').value
        if (!title.trim()) return
        addProject(title)
        modalWindow.innerHTML = ''
    })
}

export function addTodoModal(addTodo) {
    const modalWindow = document.querySelector('.modal-container')

    modalWindow.innerHTML = `
    <div class="overlay">
        <div class="modal">
            <h3>New To-Do</h3>
            <input type="text" id="modal-input" placeholder="Todo Title" maxlength="20"/>
            <textarea id="modal-textarea" placeholder="Description" maxlength="255"></textarea>
            <input type="date" id="modal-date" value="${new Date().toISOString().split('T')[0]}"/>
            <button id="modal-save">Save</button>
            <button id="modal-cancel">Back</button>
        </div>
    </div>
  `

    document.getElementById('modal-cancel').addEventListener('click', () => {
        modalWindow.innerHTML = ''
    })

    document.getElementById('modal-save').addEventListener('click', () => {
        const title = document.getElementById('modal-input').value
        const description = document.getElementById('modal-textarea').value
        const dueDate = document.getElementById('modal-date').value
        if (!title.trim()) return
        addTodo(title,description,dueDate)
        modalWindow.innerHTML = ''
    })
}