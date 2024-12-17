const projectManager = (function(todo){
    function createNewProject(){
        const project = [];
        return project;
    }

    function deleteProject(project){
        project = null;
    }

    function addTodo(project, todo){
        project.push(todo);
    }

    function removeTodo(project, todo){
        project.pop(todo);
    }

    return {
        createNewProject,
        deleteProject,
        addTodo,
        removeTodo,
    }
})()

export { projectManager };