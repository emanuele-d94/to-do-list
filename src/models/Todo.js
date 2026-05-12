export class Todo {
    constructor(id, date, title, description,dueDate,priority) {
        this.id = id
        this.date = date
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.done = false
    }

    changeDone() {
        this.done = !this.done
    }

    toJSON() {
        return {
            id: this.id,
            date: this.date,
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
            priority: this.priority,
            done: this.done
        }
    }
}