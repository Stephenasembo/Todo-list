import { displayNodes } from './cached-dom';
import { userProjects } from './project-manager.js'

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

export function displayAvailableProjects(){
    const projectsDialog = document.createElement('dialog');
    const projectsForm = document.createElement('form');
    projectsForm.setAttribute('method', 'dialog');
    projectsDialog.appendChild(projectsForm);

    let btnArray = [];

    for (let project of userProjects){
        const projectBtn = document.createElement('button');
        projectBtn.textContent = project.name;
        projectBtn.setAttribute('id', project.name)
        projectsForm.appendChild(projectBtn);
        btnArray.push(projectBtn);
    }

    const btnPara = document.createElement('p');
    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    btnPara.appendChild(cancelBtn);
    projectsForm.appendChild(btnPara);

    displayNodes.projectsDiv.appendChild(projectsDialog);
    projectsDialog.setAttribute('open', 'true');

    return{
        btnArray,
    }
}