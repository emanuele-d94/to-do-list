import {addProject} from "./businessLogic";

export function renderSidebar(projects){

    const sidebar =  document.createElement("div");
    sidebar.classList.add("sidebar");

    const addProjectButton = document.createElement("button");
    addProjectButton.classList.add("add-project");
    addProjectButton.textContent = "Add Project";
    sidebar.appendChild(addProjectButton);

    for(let p of projects) {

        const project = document.createElement("div");
        project.classList.add("project");

        const title = document.createElement("p");
        title.textContent = p.name;
        project.append(title);

        const deleteProjectButton = document.createElement("button");
        deleteProjectButton.classList.add("delete-project");
        deleteProjectButton.textContent = "Delete Project";
        project.append(deleteProjectButton);

        if(p.selected){
            const todos = p.todos;
            for(let t of todos) {
                const todo = document.createElement("div");
                todo.classList.add("project-task");
                todo.textContent = t.title;
                project.append(todo)
            }

            const addTaskButton = document.createElement("button");
            addTaskButton.classList.add("add-task");
            addTaskButton.textContent = "Add Task";
            project.appendChild(addTaskButton);
        }

        sidebar.appendChild(project);
    }

    return sidebar
}