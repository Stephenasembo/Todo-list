import { todoFormControls, projectFormControls } from './cached-dom.js';
import { formHandling } from './form-manipulation.js';
import { projectManager } from './project-manager.js';
import todoManager from './todoManager.js';
import { getUserInput } from './user-input.js';
import { defaultProject } from './index.js';
import { pickProject } from './choose-project.js';
import { updateDisplay } from './display-controller.js'

export const createUserProject = function(name){
    if(name == 'Default Project'){
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
    }
    projectManager.addDeleteBtns();
};

export const createUserTodo = function(event){
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
