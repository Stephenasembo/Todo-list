import { userProjects } from './project-manager.js'
import { displayAvailableProjects, updateDisplay } from '../dom/ui.js'
import { projectManager } from './project-manager.js';
import todoManager from '../todo/todoManager.js'

export function pickProject(createdTodo){
    let projectBtns = displayAvailableProjects();
    const availableProjectsDialog = document.querySelector('.availableProjectsDialog');
    availableProjectsDialog.showModal();
    projectBtns.btnArray.forEach((btn) => {
        btn.addEventListener('click', chosenProject);
    });
    function chosenProject(event){
        let choice = event.target.id;
        let pickedProject = null;
        for (let project of userProjects){
            if (project.name == choice){
                pickedProject = project;
                break;
            }
        }
        projectManager.addTodo(pickedProject, createdTodo);
        console.log(userProjects)
        updateDisplay();
        todoManager.addDeleteBtns();
        todoManager.addEditTodoBtns();
        todoManager.addExpandTodoBtns();
    }
}