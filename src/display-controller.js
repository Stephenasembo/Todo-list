import { displayNodes } from './cached-dom';

export const displayProjects = function(text){
    const para = document.createElement('p');
    para.textContent = text;
    displayNodes.projectsDiv.appendChild(para);
}