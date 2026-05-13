export function openModal(addTodo) {
    const modalWindow = document.querySelector('.modal-container')

    modalWindow.innerHTML = `
    <div class="overlay">
        <div class="modal">
            <h3>New To-Do</h3>
            <input type="text" id="modal-input" placeholder="To-Do Name" />
            <textarea id="modal-textarea" placeholder="Description" maxlength="255"></textarea>
            <button id="modal-save">Save</button>
            <button id="modal-cancel">Back</button>
        </div>
    </div>
  `

    document.getElementById('modal-cancel').addEventListener('click', () => {
        modalWindow.innerHTML = ''
    })

    document.getElementById('modal-save').addEventListener('click', () => {
        const name = document.getElementById('modal-input').value
        const description = document.getElementById('modal-textarea').value
        if (!name.trim()) return
        addTodo(name,description)
        modalWindow.innerHTML = ''
    })
}