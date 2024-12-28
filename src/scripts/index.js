import { formHandling } from './utils/form-manipulation.js';
import todoManager from './todo/todoManager.js';
import { projectManager } from './project/project-manager.js';
import { createUserProject } from './utils/create-entries.js';
import '../styles/styles.css';
import { displayCreatedProjects } from './dom/ui.js';
import './utils/date-constraint.js';
import { updateDisplay } from './dom/ui.js'
import { retrieveUserProjects } from './storage.js';

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
