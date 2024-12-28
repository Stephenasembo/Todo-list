import { todoFormControls, projectFormControls, domNodes } from '../dom/cached-dom.js';
import { projectManager } from '../project/project-manager.js';
import todoManager from '../todo/todoManager.js';
import { getUserInput } from './user-input.js';
import { pickProject } from '../project/choose-project.js';
import { displayCreatedProjects, updateDisplay } from '../dom/ui.js'

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
