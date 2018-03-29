


import TodoService from '../service/TodoService';
let todoService = new TodoService();


export function init() {

    document.getElementById('addBtn')
        .addEventListener('click', () => {
            console.log('adding..');
            todoService.addTodo('task1');
        })

    document.getElementById('viewBtn')
        .addEventListener('click', () => {
            todoService.viewAll('all');
        })
}