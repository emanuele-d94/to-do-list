export class Project {
    constructor(id, name, todos) {
        this.id = id
        this.name = name
        this.todos = todos
        this.selected = false
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            todos: this.todos,
            selected: this.selected
        }
    }
}