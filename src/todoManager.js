import { displayTodoDetails, updateDisplay } from "./display-controller";
import { retrieveUserProjects, saveUserProjects } from "./local-storage";
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
        alert(event.target.id);
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
    }

    function addExpandTodoBtns(){
        let expandTodoBtns = document.querySelectorAll('.expandTodo');
        expandTodoBtns = Array.from(expandTodoBtns);
        console.log(expandTodoBtns);
        expandTodoBtns.forEach((btn) => {
            btn.addEventListener('click', expandTodo);
        })
    }

    return{
        createNewTodo,
        changeStatus,
        changePriority,
        deleteTodo,
        addDeleteBtns,
        addExpandTodoBtns,
    }
})();