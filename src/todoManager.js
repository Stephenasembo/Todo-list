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

    function addDeleteBtns(){
        let deleteTodoBtns = document.querySelectorAll('.deleteTodo');
        deleteTodoBtns = Array.from(deleteTodoBtns);
        console.log(deleteTodoBtns);
        deleteTodoBtns.forEach((btn) => {
            btn.addEventListener('click', deleteTodo)
        })
    }    

    return{
        createNewTodo,
        changeStatus,
        changePriority,
        deleteTodo,
    }
})();