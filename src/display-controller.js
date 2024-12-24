import { displayNodes } from './cached-dom';
import { userProjects } from './project-manager.js'
import { priorityColor } from './todo-color.js';
import './task-styles.css'

export function updateDisplay(){
    displayNodes.projectsDiv.innerHTML = '';
    for (let project of userProjects){
        const projectDiv = document.createElement('div');
        const projectDeleteBtn = document.createElement('button');
        projectDeleteBtn.textContent = 'Delete Project';
        projectDeleteBtn.classList.toggle('deleteProject');
        projectDeleteBtn.setAttribute('id', project.name);
        const heading = document.createElement('h2');
        heading.textContent = project.name;
        projectDiv.appendChild(heading);
        projectDiv.appendChild(projectDeleteBtn);

        for (let todo of (project.todos)){
            const todoDiv = document.createElement('div');
            const titlePara = document.createElement('p');
            const priorityPara = document.createElement('p');
            const dueDatepara = document.createElement('p');
            const deleteTodoBtn = document.createElement('button');
            deleteTodoBtn.textContent = 'Delete Todo';
            deleteTodoBtn.setAttribute('class', 'deleteTodo');
            deleteTodoBtn.setAttribute('id', todo.title);

            const expandTodoBtn = document.createElement('button');
            expandTodoBtn.textContent = 'Expand Todo';
            expandTodoBtn.setAttribute('class', 'expandTodo');
            expandTodoBtn.setAttribute('id', todo.title);

            const editTodoBtn = document.createElement('button');
            editTodoBtn.textContent = 'Edit Todo';
            editTodoBtn.setAttribute('class', 'editTodo');
            editTodoBtn.setAttribute('id', todo.title);

            titlePara.textContent = todo.title;
            priorityPara.textContent = todo.priority;
            dueDatepara.textContent = todo.dueDate;

            todoDiv.appendChild(titlePara);
            todoDiv.appendChild(expandTodoBtn);
            todoDiv.appendChild(editTodoBtn);
            todoDiv.appendChild(deleteTodoBtn);
            todoDiv.appendChild(priorityPara);
            todoDiv.appendChild(dueDatepara);

            projectDiv.appendChild(todoDiv);
            todoDiv.classList.toggle('taskDiv');
            priorityColor(todo, todoDiv);
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

export function displayTodoDetails(todo){
    const todoDetailsDialog = document.createElement('dialog');
    todoDetailsDialog.classList.toggle('todoDetailsDialog');
    const todoDetailsDiv = document.createElement('div');
    let titleHeading = document.createElement('h2');
    let descriptionPara = document.createElement('p');
    let priorityLevel = document.createElement('p');
    let statusPara = document.createElement('p');
    let notesPara = document.createElement('p');
    let dueDatePara = document.createElement('p');
    let detailsCloseBtn = document.createElement('button');

    titleHeading.textContent = todo.title;
    descriptionPara.textContent = todo.description;
    priorityLevel.textContent = `This task has a priority level of ${todo.priority}`;
    statusPara.textContent = `The status of this task is ${todo.status}`;
    notesPara.textContent = todo.notes;
    dueDatePara.textContent = todo.dueDate;
    detailsCloseBtn.textContent = 'Close';

    todoDetailsDiv.appendChild(titleHeading);
    todoDetailsDiv.appendChild(descriptionPara);
    todoDetailsDiv.appendChild(priorityLevel);
    todoDetailsDiv.appendChild(statusPara);
    todoDetailsDiv.appendChild(notesPara);
    todoDetailsDiv.appendChild(dueDatePara);
    todoDetailsDiv.appendChild(detailsCloseBtn);
    detailsCloseBtn.classList.toggle('closeDetails');

    todoDetailsDialog.appendChild(todoDetailsDiv);
    displayNodes.projectsDiv.appendChild(todoDetailsDialog);
    todoDetailsDialog.classList.toggle('detailsDialog');
}

export function displayEditableContent(todo){
    const editDialog = document.createElement('dialog');
    const contentPara = document.createElement('p');
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';

    for (let input in todo){
        const inputBtn = document.createElement('button');
        inputBtn.textContent = input;
        editDialog.appendChild(inputBtn);
        inputBtn.classList.toggle('todoInput');
        inputBtn.setAttribute('id', input);
    }

    editDialog.appendChild(contentPara);
    editDialog.appendChild(closeBtn);
    closeBtn.classList.toggle('closeEdit');
    displayNodes.projectsDiv.appendChild(editDialog);
    editDialog.classList.toggle('editDialog');
}

export function displayInputEdit(input){
    const inputDialog = document.createElement('dialog');
    const infoPara = document.createElement('p');
    infoPara.textContent = `Enter updated value for the ${input}`;
    const btnPara = document.createElement('p');
    const cancelBtn = document.createElement('button');
    const confirmBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    confirmBtn.textContent = 'Confirm';
    btnPara.appendChild(cancelBtn);
    btnPara.appendChild(confirmBtn);
    const formEdit = document.createElement('form');
    formEdit.setAttribute('method', 'dialog');
    const inputPara = document.createElement('div');
    let createdInput = createInput(input);
    inputPara.appendChild(createdInput);

    formEdit.appendChild(inputPara);
    formEdit.appendChild(btnPara);

    inputDialog.appendChild(infoPara);
    inputDialog.appendChild(formEdit);
    displayNodes.projectsDiv.appendChild(inputDialog);
    inputDialog.classList.toggle('inputDialog');
}

function createInput(input){
    let element = document.createElement('input');
    switch(input){
        case 'title':
        case 'description':
            element.setAttribute('type', 'text');
            break;

        case 'due date':
            element.setAttribute('type', 'datetime-local')
            break;

        case 'priority level':
            break;

        case 'task status':
            break;

        case 'additional note':
            break;
    }
    return element;
}