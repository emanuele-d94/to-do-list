export function openModal(addProject) {
    const modalWindow = document.querySelector('.modal-container')

    modalWindow.innerHTML = `
    <div class="overlay">
        <div class="modal">
            <h3>New Project</h3>
            <input type="text" id="modal-input" placeholder="Project Title" />
            <button id="modal-save">Save</button>
            <button id="modal-cancel">Back</button>
        </div>
    </div>
  `

    //<textarea id="modal-textarea" placeholder="Description" maxlength="255"></textarea>

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