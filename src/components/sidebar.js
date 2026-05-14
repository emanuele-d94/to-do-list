import {addProjectModal, addTodoModal} from "./modal";

function buttonArea(addProject) {
    const buttonArea = document.createElement('div')
    buttonArea.classList.add('button-area')

    // Pulsante Nuovo Project
    const addProjectButton = document.createElement('button')
    addProjectButton.classList.add('addProject')
    addProjectButton.textContent = 'Add Project'
    addProjectButton.addEventListener('click', () => addProjectModal(addProject))
    buttonArea.appendChild(addProjectButton)

    return buttonArea
}

function addTodoButton(addTodo) {
    const addTodoButton = document.createElement('button')

    addTodoButton.classList.add('addTodo')
    addTodoButton.textContent = '+'
    addTodoButton.addEventListener('click', () => addTodoModal(addTodo))

    return addTodoButton
}

function todoUl(state, selectTodo){

    const todoUl = document.createElement('ul')
    todoUl.classList.add('todo-list')

    if(state.selectedProject.todos.length > 0){

        state.selectedProject.todos.forEach(todo => {
            const todoLi = document.createElement('li')
            if(todo.done){
                todoLi.classList.add('todo-done')
            } else {
                todoLi.classList.add('todo')
            }
            todoLi.textContent = todo.title

            // rendering del to-do selezionato in sideBar
            if(state.selectedTodo && todo.id === state.selectedTodo.id) {
                todoLi.classList.add('active')
            }

            // Aggiungo funzionalità di selezione del to-do
            todoLi.addEventListener('click', (e) => {
                e.stopPropagation()  //<- impedisce di far partire la selectProject quando seleziono un Todo
                selectTodo(todo.id)
            })

            // Aggiungo il todoLi a todoUl
            todoUl.appendChild(todoLi)
        })
    }
    return todoUl
}

function projectList(state, selectProject, addTodo, selectTodo){
    const projectList = document.createElement('div')
    projectList.classList.add('project-list')

    const projectUl = document.createElement('ul')

    // Lista Projects
    state.projects.forEach(project => {
        const projectLi = document.createElement('li')
        // Se un project ha tutti i task con done = true , allora nella sidebar mostro il testo sbarrato e grigio chiaro
        if(project.done){
            projectLi.classList.add('project-done')
        } else {
            projectLi.classList.add('project')
        }

        projectLi.textContent = project.title

        // rendering del progetto selezionato in sideBar
        if(state.selectedProject && project.id === state.selectedProject.id) {
            projectLi.classList.add('active')

            // Il progetto selezionato mostra la lista di task
            if(state.selectedProject.todos != null){
                projectLi.appendChild(todoUl(state,selectTodo))
            }

            // Il progetto selezionato deve avere il pulsante AddTask al fondo
            projectLi.appendChild(addTodoButton(addTodo))
        }


        projectLi.addEventListener('click', () => {
            selectProject(project.id)
        })


        projectUl.appendChild(projectLi)
    })

    // Qui prima di generare la lista progetti devo
    // Esplodere la lista task del progetto selezionato
    // Mostrare il contenuto del to-do selezionato

    projectList.appendChild(projectUl)
    return projectList
}

export function renderSidebar(state, selectProject, addProject, addTodo, selectTodo) {

    const sidebar = document.querySelector('.sidebar')
    sidebar.innerHTML = ''

    sidebar.appendChild(buttonArea(addProject))
    sidebar.appendChild(projectList(state, selectProject, addTodo, selectTodo))
}