import { displayEditableContent, displayTodoDetails, updateDisplay } from "./display-controller";
import { cacheEditBtns } from "./edit-todo";
import { retrieveUserProjects } from "./local-storage";
import { projectManager } from "./project-manager";

export default (function(){
    function createNewTodo(obj){
        return {
            title: obj.title,
            description: obj.description,
            dueDate: obj.dueDate,
            priority: obj.priority,
            notes: obj.notes,
            status: obj.status,
        }
    }    

    function changeStatus(todo, newStatus){
        todo.status = newStatus;
    }

    function changePriority(todo, newPriority){
        todo.priority = newPriority;
    }

    function deleteTodo(event){
        let projectIndex = 0;
        let createdProjectsArr = retrieveUserProjects();
        for (let createdProject of createdProjectsArr){
            let todoIndex = createdProject.todos.findIndex((todo) => {
                return todo.title == event.target.id;
            })
            if (todoIndex != -1){
                projectManager.removeTodo(projectIndex, todoIndex)
                break;
            }
            projectIndex+=1;
        }
        addDeleteBtns();
    }

    function addDeleteBtns(){
        let deleteTodoBtns = document.querySelectorAll('.deleteTodo');
        deleteTodoBtns = Array.from(deleteTodoBtns);
        console.log(deleteTodoBtns);
        deleteTodoBtns.forEach((btn) => {
            btn.addEventListener('click', deleteTodo);
        })
    }    

    function expandTodo(event){
        let projectIndex = 0;
        let createdProjectsArr = retrieveUserProjects();
        for (let createdProject of createdProjectsArr){
            let todoIndex = createdProject.todos.findIndex((todo) => {
                return todo.title == event.target.id;
            })
            if(todoIndex != -1){
                let chosenTodo = createdProjectsArr[projectIndex].todos[todoIndex];
                console.log(chosenTodo);
                displayTodoDetails(chosenTodo);        
                break;
            }
            projectIndex+=1;
        }
        const detailsDialog = document.querySelector('.detailsDialog');
        const closeBtn = document.querySelector('.closeDetails');
        detailsDialog.showModal();
        closeBtn.addEventListener('click', closeDetails);
        function closeDetails(){
            detailsDialog.close();
        }
    }

    function addExpandTodoBtns(){
        let expandTodoBtns = document.querySelectorAll('.expandTodo');
        expandTodoBtns = Array.from(expandTodoBtns);
        console.log(expandTodoBtns);
        expandTodoBtns.forEach((btn) => {
            btn.addEventListener('click', expandTodo);
        })
    }

    function editTodo(event){
        let projectIndex = 0;
        let chosenTodo = null;
        let todoIndex = 0;
        let createdProjectsArr = retrieveUserProjects();
        for (let createdProject of createdProjectsArr){
            todoIndex = createdProject.todos.findIndex((todo) => {
                return todo.title == event.target.id;
            })
            if(todoIndex != -1){
                chosenTodo = createdProjectsArr[projectIndex].todos[todoIndex];
                console.log(chosenTodo);
                displayEditableContent(chosenTodo);        
                break;
            }
            projectIndex+=1;
        }
        const editDialog = document.querySelector('.editDialog');
        const closeBtn = document.querySelector('.closeEdit');
        editDialog.showModal();
        closeBtn.addEventListener('click', closeEdit);
        function closeEdit(){
            editDialog.close();
        }
        cacheEditBtns(projectIndex, todoIndex, chosenTodo);
    }

    function addEditTodoBtns(){
        let editTodoBtns = document.querySelectorAll('.editTodo');
        editTodoBtns = Array.from(editTodoBtns);
        console.log(editTodoBtns);
        editTodoBtns.forEach((btn) => {
            btn.addEventListener('click', editTodo);
        })
    }

    return{
        createNewTodo,
        changeStatus,
        changePriority,
        deleteTodo,
        addDeleteBtns,
        addExpandTodoBtns,
        addEditTodoBtns,
    }
})();