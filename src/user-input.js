export const getUserInput = function(){
    let projectConfirmation = confirm('Do you want to create a new project');
    if (projectConfirmation){
        let projectName = prompt('What is the name of your project?');
        let todoConfirmation = confirm('Do you want to create a new todo?')
        if (todoConfirmation){
            let title = prompt('What is the title of your todo?')
            let description = prompt('Can you provide a desciption of your todo?')
            let dueDate = prompt('When is your todo due?')
            let priority = prompt('Can you provide the priority level of this todo?')
            let notes = prompt('Are there additional notes on this todo to provide?')
            let status = prompt('What is the status of this todo?')

            return {
                projectName,
                title,
                description,
                dueDate,
                priority,
                notes,
                status
            }
        }
        else {
            return {
                projectName,
            }
        }
    }
    else {
        return null;
    }
}