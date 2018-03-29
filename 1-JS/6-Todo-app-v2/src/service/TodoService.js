
import { Todo } from '../model/Todo'

export default class TodoService {
    constructor() {
        this.todos = []
    }
    addTodo(title) {
        let newTodo = new Todo(title);
        this.todos.push(newTodo);
    }
    viewAll(status) {
        if (status === 'all') {
            this.todos.forEach(todo => console.log(todo))
        }
    }
}