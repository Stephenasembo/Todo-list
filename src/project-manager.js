import { updateDisplay } from './display-controller.js';
import { userProjects } from './choose-project.js'
import { saveProject, retrieveProject } from './local-storage.js'

const projectManager = (function(){
    let display = null;
    function createNewProject(name){
        const project = {};
        project.name = name;
        project.todos = [];
        userProjects.push(project);
        console.log(userProjects)
        if(name in localStorage){
            return;
        }
        saveProject(name, project);
        return project;
    }

    function deleteProject(project){
        project = null;
    }

    function addTodo(project, todo){
        if(project.name in localStorage){
            project = retrieveProject(project.name);
            project.todos.push(todo);
            saveProject(project.name, project);    
        }
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