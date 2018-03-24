
// --------------------------------------------------
// step-1 : create Todo model class ( ES5 | ES6 )
class Todo {
    constructor(title) {
        this.id = 0;
        this.title = title;
        this.completed = false;
    }
}
// --------------------------------------------------
// step-2 : create Todo service 
class TodoService {
    constructor() {
        this.todos = [];
    }
    addTodo(title) {
        let newTodo = new Todo(title);
        this.todos.push(newTodo);
    }
    // ...
}
// --------------------------------------------------

// step-3 : show demo in console