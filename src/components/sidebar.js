import {openModal} from "./modal";

export function renderSidebar(state, selectProject, addProject) {

    const sidebar = document.querySelector('.sidebar')
    sidebar.innerHTML = ''

    const buttonArea = document.createElement('div')
    buttonArea.classList.add('.button-area')

    const projectList = document.createElement('div')
    buttonArea.classList.add('.project-list')

    // Pulsante Nuovo Project
    const addProjectButton = document.createElement('button')
    addProjectButton.classList.add('addProject')
    addProjectButton.textContent = 'Add Project'
    addProjectButton.addEventListener('click', () => openModal(addProject))
    buttonArea.appendChild(addProjectButton)

    sidebar.appendChild(buttonArea)

    const projectUl = document.createElement('ul')

    // Lista Projects
    state.projects.forEach(project => {
        const projectEl = document.createElement('li')
        // Se un project ha tutti i task con done = true , allora nella sidebar mostro il testo sbarrato e grigio chiaro
        if(project.done){
            projectEl.classList.add('project-done')
        } else {
            projectEl.classList.add('project')
        }


        projectEl.textContent = project.title
        if(project.id === state.selectedProject.id) {
            projectEl.classList.add('active')
        }
        projectEl.addEventListener('click', () => {
            selectProject(project.id)
        })

        projectUl.appendChild(projectEl)
    })

    projectList.appendChild(projectUl)
    sidebar.appendChild(projectList)
}