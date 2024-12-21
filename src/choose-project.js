export const userProjects = [];
import { displayAvailableProjects, updateDisplay } from './display-controller.js'
import { projectManager } from './project-manager.js';

export function pickProject(createdTodo){
    let projectBtns = displayAvailableProjects();
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
    }
}