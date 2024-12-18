const projectManager = (function(todo){
    function createNewProject(name){
        const project = {};
        project.name = name;
        project.todos = [];
        return project;
    }

    function deleteProject(project){
        project = null;
    }

    function addTodo(project, todo){
        project.todos.push(todo);
    }

    function removeTodo(project, todo){
        project.todos.pop(todo);
    }

    return {
        createNewProject,
        deleteProject,
        addTodo,
        removeTodo,
    }
})()

export { projectManager };