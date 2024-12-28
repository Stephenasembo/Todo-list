import { userProjects } from './project/project-manager.js'

function saveProject(projectName, project){
    localStorage.setItem(projectName, JSON.stringify(project));
}

function retrieveProject(projectName){
    return JSON.parse(localStorage.getItem(projectName));
}

function saveUserProjects(){
    saveProject('userProjects', userProjects);
}

function retrieveUserProjects(){
    return retrieveProject('userProjects')
}
export { saveProject, retrieveProject, saveUserProjects, retrieveUserProjects }