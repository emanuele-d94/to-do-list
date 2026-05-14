import './styles/style.css'
import {renderSidebar} from "./components/sidebar";
import {renderContent} from "./components/content";

// Carica dallo storage all'avvio, oppure array vuoto
// Definisco un oggetto state che rappresenta lo stato della mia applicazione
// Contiene i todos, e il to-do selezionato da visualizzare
const state = {
    projects: JSON.parse(localStorage.getItem('projects')) || [],
    selectedProject: JSON.parse(localStorage.getItem('selectedProject')) || null,
    selectedTodo: JSON.parse(localStorage.getItem('selectedTodo')) || null,
}

function addProject(title) {
    const newProject = { id: Date.now(), title: title, done: false, todos:[] }
    state.projects.push(newProject)
    state.selectedProject = newProject
    saveToStorage()  // ← salva dopo ogni modifica
    render()
}

function addTodo(title, description, dueDate) {
    const newTodo = { id: Date.now(), title: title, description: description, dueDate: dueDate, done: false}
    state.selectedProject.todos.push(newTodo)
    state.selectedTodo = newTodo
    saveToStorage()  // ← salva dopo ogni modifica
    render()
}

function selectProject(id) {
    //Selezione del progetto
    state.selectedProject = state.projects.find(p => p.id === id)
    //Mostro il primo to-do in lista
    if(state.selectedProject != null && state.selectedProject.todos != null) {
        state.selectedTodo = state.selectedProject.todos[0]
    } else {
        state.selectedTodo = null
    }

    saveToStorage()  // ← salva dopo ogni selezione
    render()
}

function selectTodo(id) {
    //Selezione del to-do
    state.selectedTodo = state.selectedProject.todos.find(t => t.id === id)
    saveToStorage()  // ← salva dopo ogni selezione
    render()
}

// function toggleDone() {
//     state.selectedTodo.done = !state.selectedTodo.done
//     saveToStorage()  // ← salva dopo ogni selezione
//     render()
// }

function saveToStorage() {
    localStorage.setItem('projects', JSON.stringify(state.projects))
    localStorage.setItem('selectedProject', JSON.stringify(state.selectedProject))
    localStorage.setItem('selectedTodo', JSON.stringify(state.selectedTodo))
}

// La funzione render chiama il rendering dei vari componenti della pagina
function render() {
    // Devo passare le funzioni selectTodo e addTodo a renderSidebar perchè non ha accesso allo stato dell'applicazione
    renderSidebar(state, selectProject, addProject, addTodo, selectTodo)
    // if(state.selectedProject !== null) {
    //     renderContent(state, toggleDone)
    // }
}

// Chiamo render all'apertura dell'app e poi alla fine di ogni operazione sull'applicazione
render()