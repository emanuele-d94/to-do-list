export function renderContent(todo){

    const content =  document.createElement("div");
    content.classList.add("content");

    if(todo){
        const task =  document.createElement("div");
        task.classList.add("task");

        const id = document.createElement("p");
        id.textContent = "ID: ".concat(todo.id);
        task.appendChild(id);

        const date = document.createElement("p");
        date.textContent = "DATE: ".concat(todo.date);
        task.appendChild(date);

        const title = document.createElement("h2");
        title.textContent = "TITLE: ".concat(todo.title);
        task.appendChild(title);

        const description = document.createElement("p");
        description.textContent = todo.description;
        task.appendChild(description);

        const dueDate = document.createElement("p");
        dueDate.textContent = "DUE DATE: ".concat(todo.dueDate);
        task.appendChild(dueDate);

        const priority = document.createElement("p");
        priority.textContent = "PRIORITY: ".concat(todo.priority);
        task.appendChild(priority);

        const done = document.createElement("p");
        done.textContent = "DONE: ".concat(todo.done);
        task.appendChild(done);

        content.appendChild(task);
    }

    return content;
}