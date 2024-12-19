import { todoFormControls, projectFormControls } from './cached-dom.js';
import { formHandling } from './dom-manipulation.js';
import { projectManager } from './project-manager.js';
import todoManager from './todoManager.js';
import { getUserInput } from './user-input.js';
import { defaultProject } from './index.js';
import { userProjects } from './choose-project.js';

export const createUserProject = function(event){
    formHandling.closeForm(event);
    let input = getUserInput().projectName;
    const newProject = projectManager.createNewProject(input);
};

export const createUserTodo = function(event){
    formHandling.closeForm(event);
    let input = getUserInput();
    let createdTodo = todoManager.createNewTodo(input);
    projectManager.addTodo(userProjects[0], createdTodo);
    console.log(userProjects)
}

projectFormControls.projectConfirmBtn.addEventListener('click', createUserProject);
todoFormControls.todoConfirmBtn.addEventListener('click', createUserTodo);
