import './styles/style.css'
import {renderSidebar} from "./components/sidebar";
import {renderContent} from "./components/content";

// Carica dallo storage all'avvio, oppure array vuoto
// Definisco un oggetto state che rappresenta lo stato della mia applicazione
// Contiene i todos, e il to-do selezionato da visualizzare
const state = {
    projects: JSON.parse(localStorage.getItem('projects')) || [],
    selectedProject: JSON.parse(localStorage.getItem('selectedProject')) || null,
    //selectedId: JSON.parse(localStorage.getItem('selectedId')) || null,
}

function addProject(title) {
    const newProject = { id: Date.now(), title: title, done: false }
    state.projects.push(newProject)
    state.selectedProject = newProject
    //state.selectedId = newTodo.id
    saveToStorage()  // ← salva dopo ogni modifica
    render()
}

function selectProject(id) {
    //state.selectedId = id
    state.selectedProject = state.projects.find(p => p.id === id)
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
    //localStorage.setItem('selectedId', JSON.stringify(state.selectedId))
    localStorage.setItem('selectedProject', JSON.stringify(state.selectedProject))
}

// La funzione render chiama il rendering dei vari componenti della pagina
function render() {
    // Devo passare le funzioni selectTodo e addTodo a renderSidebar perchè non ha accesso allo stato dell'applicazione
    renderSidebar(state, selectProject, addProject)
    // if(state.selectedProject !== null) {
    //     renderContent(state, toggleDone)
    // }
}

// Chiamo render all'apertura dell'app e poi alla fine di ogni operazione sull'applicazione
render()