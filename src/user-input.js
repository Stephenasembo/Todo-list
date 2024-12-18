import { domNodes } from './cached-dom.js';

domNodes.projectConfirmBtn.addEventListener('click', getProjectName);
domNodes.todoConfirmBtn.addEventListener('click', getUserInput)
export const getUserInput = function(){
    let title = prompt('What is the title of your todo?')
    let description = prompt('Can you provide a desciption of your todo?')
    let dueDate = prompt('When is your todo due?')
    let priority = prompt('Can you provide the priority level of this todo?')
    let notes = prompt('Are there additional notes on this todo to provide?')
    let status = prompt('What is the status of this todo?')

    return {
        projectName,
        title,
        description,
        dueDate,
        priority,
        notes,
        status
    }
}