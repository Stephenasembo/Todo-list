import { updateDisplay } from './display-controller.js';
import { userProjects } from './choose-project.js'

const projectManager = (function(){
    let display = null;
    function createNewProject(name){
        const project = {};
        project.name = name;
        project.todos = [];
        display = updateDisplay();
        display.newProject(name);
        userProjects.push(project);
        console.log(userProjects)
        return project;
    }

    function deleteProject(project){
        project = null;
    }

    function addTodo(project, todo){
        project.todos.push(todo);
        display.newTodo(todo);
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