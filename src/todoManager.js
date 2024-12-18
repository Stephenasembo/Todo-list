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