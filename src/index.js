import todoManager from './todoManager.js';
import { projectManager } from './project-manager.js';
import { getUserInput } from './user-input.js';
import { formHandling } from './form-manipulation.js';
import { createUserProject, createUserTodo } from './create-entries.js';
import './styles.css';
import { displayCreatedProjects, displayProjects } from './display-controller.js';
import './date-constraint.js';
import { updateDisplay } from './display-controller.js'
import { retrieveUserProjects } from './local-storage.js';

window.localStorage;
let createdProjectsArr = retrieveUserProjects();
if (createdProjectsArr.length < 1){
    let defaultProject = createUserProject('Default Project');
}
updateDisplay();
projectManager.addDeleteBtns();
todoManager.addDeleteBtns();
todoManager.addExpandTodoBtns();
todoManager.addEditTodoBtns();
displayCreatedProjects();
