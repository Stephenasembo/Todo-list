function saveProject(projectName, project){
    localStorage.setItem(projectName, JSON.stringify(project));
}

function retrieveProject(projectName){
    return JSON.parse(localStorage.getItem(projectName));
}

export { saveProject, retrieveProject }