import { displayNodes } from './cached-dom';
import { userProjects } from './project-manager.js'
import { priorityColor } from './todo-color.js';
import './task-styles.css'

export function updateDisplay(){
    displayNodes.projectsDiv.innerHTML = '';
    for (let project of userProjects){
        const projectDiv = document.createElement('div');
        const projectHead = document.createElement('div');
        const projectDeleteBtn = document.createElement('button');
        projectDeleteBtn.textContent = 'Delete Project';
        projectDeleteBtn.classList.toggle('deleteProject');
        projectDeleteBtn.setAttribute('id', project.name);
        const heading = document.createElement('h2');
        heading.textContent = project.name;
        projectHead.appendChild(heading);
        projectHead.appendChild(projectDeleteBtn);

        projectDiv.appendChild(projectHead);
        projectHead.classList.toggle('projectHead');

        for (let todo of (project.todos)){
            const todoDiv = document.createElement('div');
            const titleHeading = document.createElement('h3');
            const priorityPara = document.createElement('p');
            const dueDatepara = document.createElement('p');
            const btnPara = document.createElement('p');

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

            btnPara.appendChild(expandTodoBtn);
            btnPara.appendChild(editTodoBtn);
            btnPara.appendChild(deleteTodoBtn);

            titleHeading.textContent = todo.title;
            let priorityLvl = null;
            if (todo.priority == 'lowImportance'){
                priorityLvl = 'low importance';
            }
            else {
                priorityLvl = todo.priority
            }
            priorityPara.innerHTML = `<span>Priority level:</span> ${priorityLvl}.`;
            dueDatepara.innerHTML = `<span>Due Date:</span> ${todo.dueDate}`;

            todoDiv.appendChild(titleHeading);
            todoDiv.appendChild(btnPara);
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
    projectsDialog.setAttribute('class', 'availableProjectsDialog');

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

    fixDisplayText(todo);
    titleHeading.textContent = todo.title;
    descriptionPara.textContent = todo.description;
    priorityLevel.textContent = `This task has a priority level of ${todo.priority}`;
    fixDisplayText(todo);
    statusPara.textContent = `This task is ${todo.status}`;
    notesPara.textContent = todo.notes;
    dueDatePara.textContent = `Due Date: ${todo.dueDate}`;
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

function fixDisplayText(todo){
    if (todo.priority == 'lowImportance'){
        todo.priority = 'low importance';
    }
    else if(todo.status == 'notStarted'){
        todo.status = 'not started';
    }
    else if (todo.status == 'inProgress'){
        todo.status = 'in progress';
    }
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

    const formEdit = document.createElement('form');
    formEdit.setAttribute('method', 'dialog');
    const inputPara = document.createElement('p');
    let createdInput = createInput(input);

    const formBtnPara = document.createElement('p');
    const cancelFormBtn = document.createElement('button');
    const confirmFormBtn = document.createElement('button');
    cancelFormBtn.textContent = 'Close';
    confirmFormBtn.textContent = 'Confirm';
    cancelFormBtn.setAttribute('id', 'closeEditForm');
    confirmFormBtn.setAttribute('id', 'confirmEditForm');

    inputPara.appendChild(createdInput);
    formBtnPara.appendChild(cancelFormBtn);
    formBtnPara.appendChild(confirmFormBtn);

    formEdit.appendChild(inputPara);
    formEdit.appendChild(formBtnPara);

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
            element = document.createElement('p');
            element.innerHTML = `                <p>
                    Priority Level: 
                    <span>
                        <input type="radio" value="lowImportance" id="lowImportance" name="priority">
                        <label for="lowImportance">Low Importance</label>
                    </span>
                    <span>
                        <input type="radio" value="important" id="important" name="priority">
                        <label for="important">Important</label>
                    </span>
                    <span>
                        <input type="radio" value="urgent" id="urgent" name="priority" required>
                        <label for="urgent">Urgent</label>
                    </span>
                </p>
`
            break;

        case 'task status':
            element = document.createElement('p');
            element.innerHTML = `                <p>
                    Task Status: 
                    <span>
                        <input type="radio" value="notStarted" id="notStarted" name="taskStatus">
                        <label for="notStarted">Not started</label>
                    </span>
                    <span>
                        <input type="radio" value="inProgress" id="inProgress" name="taskStatus">
                        <label for="inProgress">In progress</label>
                    </span>
                    <span>
                        <input type="radio" value="completed" id="completed" name="taskStatus" required>
                        <label for="completed">Completed</label>
                    </span>
                </p>
`
            break;

        case 'additional note':
            element = document.createElement('textarea');
            break;
    }
    element.classList.toggle('inputEditElement')
    return element;
}

export function removeDialog(dialog){
    displayNodes.projectsDiv.removeChild(dialog);
}

export function displayCreatedProjects(){
    displayNodes.createdProjectsDiv.innerHTML = `<h2>YOUR PROJECTS</h2>`;

    for (let project of userProjects){
        const projectDiv = document.createElement('div');
        const heading = document.createElement('h2');
        heading.textContent = `${project.name}`;
        const tasksPara = document.createElement('p');
        tasksPara.textContent = `${project.name} has ${project.todos.length} tasks`;

        projectDiv.appendChild(heading);
        projectDiv.appendChild(tasksPara);
        displayNodes.createdProjectsDiv.appendChild(projectDiv);
    }
}