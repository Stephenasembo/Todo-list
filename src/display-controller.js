import { displayNodes } from './cached-dom';

export const updateDisplay = function (){
    const projectDiv = document.createElement('div');
    function newProject(text){
        const heading = document.createElement('h2');
        heading.textContent = text;
        projectDiv.appendChild(heading);    
    }
    function newTodo(object){
        const todoDiv = document.createElement('div');
        const titlePara = document.createElement('p');
        const dueDatepara = document.createElement('p');
        const priorityPara = document.createElement('p');
    
        titlePara.textContent = object.title;
        dueDatepara.textContent = object.dueDate;
        priorityPara.textContent = object.priority;
    
        todoDiv.appendChild(titlePara);
        todoDiv.appendChild(dueDatepara);
        todoDiv.appendChild(priorityPara);
    
        projectDiv.appendChild(todoDiv);
    }

    displayNodes.projectsDiv.appendChild(projectDiv);
    return {
        newProject,
        newTodo,
    }
}