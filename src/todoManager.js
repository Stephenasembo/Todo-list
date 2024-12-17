export default (function(){
    function createNewTodo(title, description, dueDate, priority, notes, status){
        return {
            title,
            description,
            dueDate,
            priority,
            notes,
            status
        }
    }    

    function changeStatus(todo, newStatus){
        todo.status = newStatus;
    }

    function changePriority(todo, newPriority){
        todo.priority = newPriority;
    }

    function deleteTodo(todo){
        todo = null;
    }

    return{
        createNewTodo,
        changeStatus,
        changePriority,
        deleteTodo,
    }
})();