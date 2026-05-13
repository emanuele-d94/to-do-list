import './styles/style.css'
import {renderSidebar} from "./components/sidebar";
import {renderContent} from "./components/content";
import dayjs from "dayjs";

// Carica dallo storage all'avvio, oppure array vuoto
// Definisco un oggetto state che rappresenta lo stato della mia applicazione
// Contiene i todos, e il to-do selezionato da visualizzare
const state = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    selectedTodo: JSON.parse(localStorage.getItem('selectedTodo')) || null,
    selectedId: JSON.parse(localStorage.getItem('selectedId')) || null,
}

function addTodo(name,description) {
    const newTodo = { id: Date.now(), date: dayjs(Date.now()).format('DD/MM/YYYY'), name: name, description : description , done: false }
    state.todos.push(newTodo)
    state.selectedTodo = newTodo
    state.selectedId = newTodo.id
    saveToStorage()  // ← salva dopo ogni modifica
    render()
}

function selectTodo(id) {
    state.selectedId = id
    state.selectedTodo = state.todos.find(todo => todo.id === id)
    saveToStorage()  // ← salva dopo ogni selezione
    render()
}

function toggleDone() {
    state.selectedTodo.done = !state.selectedTodo.done
    saveToStorage()  // ← salva dopo ogni selezione
    render()
}

function saveToStorage() {
    localStorage.setItem('todos', JSON.stringify(state.todos))
    localStorage.setItem('selectedId', JSON.stringify(state.selectedId))
    localStorage.setItem('selectedTodo', JSON.stringify(state.selectedTodo))
}

// La funzione render chiama il rendering dei vari componenti della pagina
function render() {
    // Devo passare le funzioni selectTodo e addTodo a renderSidebar perchè non ha accesso allo stato dell'applicazione
    renderSidebar(state, selectTodo, addTodo)
    if(state.selectedTodo !== null) {
        renderContent(state, toggleDone)
    }
}

// Chiamo render all'apertura dell'app e poi alla fine di ogni operazione sull'applicazione
render()