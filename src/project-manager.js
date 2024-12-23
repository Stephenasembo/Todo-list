import { updateDisplay } from './display-controller.js';
import { saveUserProjects, retrieveUserProjects } from './local-storage.js'

export let userProjects;
if('userProjects' in localStorage){
    userProjects = retrieveUserProjects();
}
else{
    userProjects = [];
    saveUserProjects();
}

const projectManager = (function(){
    let display = null;
    function createNewProject(name){
        const project = {};
        project.name = name;
        project.todos = [];
        if(name in localStorage){
            return;
        }
        else{
            userProjects = retrieveUserProjects();
            userProjects.push(project);
            saveUserProjects();
            console.log(userProjects)
            return project;    
        }
    }

    function deleteProject(project){
        project = null;
    }

    function addTodo(project, todo){
        if(project.name in localStorage){
            userProjects = retrieveUserProjects();
            for (let createdProject of userProjects){
                if (createdProject.name == project.name){
                    createdProject.todos.push(todo);
                    saveUserProjects();
                    break;
                }
            }
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