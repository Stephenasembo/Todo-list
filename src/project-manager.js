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

        function addNewProject(){
            userProjects = retrieveUserProjects();
            userProjects.push(project);
            saveUserProjects();
            console.log(userProjects)
            return project;
        }    

        if (userProjects.length < 1){
            return addNewProject();
        }

        else{
            for (let createdProject of userProjects){
                if(createdProject.name == name){
                    return;
                }
                else{
                    return addNewProject();
                }
            }
        }
    }

    function deleteProject(event){
        let selectedProject = event.target.id;
        userProjects = retrieveUserProjects();
        let projectIndex = userProjects.findIndex((project) => {
                return project.name == selectedProject;
        })
        userProjects.splice(projectIndex, 1);
        saveUserProjects();
        updateDisplay();
    }

    function addTodo(project, todo){
        userProjects = retrieveUserProjects();
        for (let createdProject of userProjects){
            if (createdProject.name == project.name){
                createdProject.todos.push(todo);
                saveUserProjects();
                break;
            }
        }
    }

    function addDeleteBtns(){
        let deleteProjectBtns = document.querySelectorAll('.deleteProject');
        deleteProjectBtns = Array.from(deleteProjectBtns);
        console.log(deleteProjectBtns);
        deleteProjectBtns.forEach((btn) => {
            btn.addEventListener('click', deleteProject)
        })
    }

    function removeTodo(project, todo){
        project.todos.pop(todo);
    }

    return {
        createNewProject,
        deleteProject,
        addTodo,
        removeTodo,
        addDeleteBtns,
    }
})()

export { projectManager };