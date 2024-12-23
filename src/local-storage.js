import { userProjects } from "./choose-project";

function saveProject(projectName, project){
    localStorage.setItem(projectName, JSON.stringify(project));
}

function retrieveProject(projectName){
    return JSON.parse(localStorage.getItem(projectName));
}
function saveTodos(project, todo){
    let todoName = todo.title;
    localStorage.setItem(todoName, JSON.stringify(todo));
    saveProject(project.name, project);
    todo.projectOwner = project.name;

}

function saveUserProjects(){
    saveProject('userProjects', userProjects);
}

function retrieveUserProjects(){
    return retrieveProject('userProjects')
}
export { saveProject, retrieveProject, saveTodos, saveUserProjects, retrieveUserProjects }