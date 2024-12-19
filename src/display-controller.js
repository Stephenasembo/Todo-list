import { displayNodes } from './cached-dom';
import { userProjects } from './choose-project';

export function updateDisplay(){
    displayNodes.projectsDiv.innerHTML = '';
    for (let project of userProjects){
        const projectDiv = document.createElement('div');
        const heading = document.createElement('h2');
        heading.textContent = project.name;
        projectDiv.appendChild(heading);

        for (let todo of (project.todos)){
            const todoDiv = document.createElement('div');
            const titlePara = document.createElement('p');
            const priorityPara = document.createElement('p');
            const dueDatepara = document.createElement('p');

            titlePara.textContent = todo.title;
            priorityPara.textContent = todo.priorityl;
            dueDatepara.textContent = todo.dueDate;

            todoDiv.appendChild(titlePara);
            todoDiv.appendChild(priorityPara);
            todoDiv.appendChild(dueDatepara);

            projectDiv.appendChild(todoDiv);
        }
        displayNodes.projectsDiv.appendChild(projectDiv);
    }
}