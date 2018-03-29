
// --------------------------------------------------
// step-1 : create Todo model class ( ES5 | ES6 )
class Todo {
    constructor(title) {
        Todo.id++;
        this.id = Todo.id;
        this.title = title;
        this.completed = false;
    }
}
Todo.id = 0;

// --------------------------------------------------
// step-2 : create Todo service 
class TodoService {
    constructor() {
        this.todos = [];
    }
    addTodo(title) {
        let newTodo = new Todo(title);
        this.todos = [...this.todos, newTodo];
    }
    editTodo(id, newTitle) {
        // this.todos = this.todos.map(function (todo) {
        //     if (todo.id !== id) return todo;
        //     else Object.assign({}, todo, { title: newTitle });
        // });
        this.todos = this.todos.map(todo => (todo.id !== id) ? todo : Object.assign({}, todo, { title: newTitle }));
    }
    completeTodo(id) {
        //..
    }
    completeAll() {
        //..
    }
    deleteTodo(id) {
        //
    }
    clearCompleted() {
        //.
    }
    viewAll(status) {
        if (status === 'all') {
            this.todos.forEach(todo => console.log(todo));
        }
    }
}
// --------------------------------------------------

// step-3 : show demo in console
let service = new TodoService();