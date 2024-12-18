import todoManager from './todoManager.js';
import { projectManager } from './project-manager.js';
import { getUserInput } from './user-input.js';

let obj = {
    title: 'hello world',
    description: 'goodbye world',
    dueDate: 2024,
    priority: 'urgent',
    notes: 'none',
    status: 'done',
}
let newTodo = todoManager.createNewTodo(obj);
console.log(newTodo);