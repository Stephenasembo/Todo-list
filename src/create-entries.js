import { todoFormControls, projectFormControls } from './cached-dom.js';
import { formHandling } from './dom-manipulation.js';
import { projectManager } from './project-manager.js';
import todoManager from './todoManager.js';
import { getUserInput } from './user-input.js';

export const createUserProject = function(event){
    formHandling.closeForm(event);
    let input = getUserInput().projectName;
    const newProject = projectManager.createNewProject(input);
    console.log(newProject);
};

export const createUserTodo = function(event){
    formHandling.closeForm(event);
    let input = getUserInput();
    const newTodo = todoManager.createNewTodo(input);
    console.log(newTodo);
}

projectFormControls.projectConfirmBtn.addEventListener('click', createUserProject);
todoFormControls.todoConfirmBtn.addEventListener('click', createUserTodo);
