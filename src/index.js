import "./styles.css";
import {loadProjectsFromLocalStorage,saveProjectsOnLocalStorage} from "./components/storage";
import {renderSidebar} from "./components/renderSidebar";
import {Project} from "./models/Project";
import {Todo} from "./models/Todo";
import {renderContent} from "./components/renderContent";

// App Start

const initProjects = []

const p1Todos = []
const p1t1 = new Todo(1,Date.now(),"First Task","Do stuff", Date.now(),1)
const p1t2 = new Todo(2,Date.now(),"Second Task","Do stuff", Date.now(),1)
p1Todos.push(p1t1);
p1Todos.push(p1t2);
const p1 = new Project(1,"Project 1",p1Todos)
p1.selected = true;

const p2Todos = []
const p2t1 = new Todo(3,Date.now(),"One Task", "Do stuff",Date.now(),1)
const p2t2 = new Todo(4,Date.now(),"Two Task", "Do stuff",Date.now(),1)
const p2t3 = new Todo(5,Date.now(),"Three Task", "Do stuff",Date.now(),1)
p2Todos.push(p2t1);
p2Todos.push(p2t2);
p2Todos.push(p2t3);
const p2 = new Project(2,"Project 2",p2Todos)

const p3 = new Project(3,"Project 3",[])

initProjects.push(p1);
initProjects.push(p2);
initProjects.push(p3);
saveProjectsOnLocalStorage(initProjects)

const projects = loadProjectsFromLocalStorage()

const container =  document.createElement("div");
container.classList.add("container");

const header =  document.createElement("header");
const headerText = document.createElement("h1");
headerText.textContent =  "To-Do-List"
header.appendChild(headerText)

container.appendChild(header);
container.appendChild(renderSidebar(projects));
container.appendChild(renderContent(projects[0].todos[0]));

document.body.appendChild(container);