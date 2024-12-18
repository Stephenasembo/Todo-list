import { displayProjects, displayTodos } from './display-controller.js';

const projectManager = (function(){
    function createNewProject(name){
        const project = {};
        project.name = name;
        project.todos = [];
        displayProjects(name);
        return project;
    }

    function deleteProject(project){
        project = null;
    }

    function addTodo(project, todo){
        project.todos.push(todo);
        displayTodos(todo);
    }

    function removeTodo(project, todo){
        project.todos.pop(todo);
    }

    return {
        createNewProject,
        deleteProject,
        addTodo,
        removeTodo,
    }
})()

export { projectManager };