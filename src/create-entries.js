import { todoFormControls, projectFormControls, domNodes } from './cached-dom.js';
import { formHandling } from './form-manipulation.js';
import { projectManager } from './project-manager.js';
import todoManager from './todoManager.js';
import { getUserInput } from './user-input.js';
import { defaultProject } from './index.js';
import { pickProject } from './choose-project.js';
import { displayCreatedProjects, updateDisplay } from './display-controller.js'

export const createUserProject = function(name){
    if(typeof(name) == 'string'){
        const newProject = projectManager.createNewProject(name);
        updateDisplay();    
    }
    else{
        let input = getUserInput().projectName;
        if(!input){
            return;
        }
        const newProject = projectManager.createNewProject(input);
        updateDisplay();
        displayCreatedProjects();
    }
    projectManager.addDeleteBtns();
};

export const createUserTodo = function(event){
    domNodes.todoDialog.close();
    let isTodoValid = true;
    let input = getUserInput();
    let createdTodo = todoManager.createNewTodo(input);
    if(!createdTodo.title || !createdTodo.dueDate || !createdTodo.priority || !createdTodo.status){
        isTodoValid = false;
    }
    else{
        pickProject(createdTodo);
    }
}

projectFormControls.projectConfirmBtn.addEventListener('click', createUserProject);
todoFormControls.todoConfirmBtn.addEventListener('click', createUserTodo);
