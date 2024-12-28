export function priorityColor(todo, div){
    if (todo.priority == 'lowImportance'){
        div.classList.toggle('lowImportance')
    }
    else if (todo.priority == 'important'){
        div.classList.toggle('important')

    }
    else if (todo.priority == 'urgent'){
        div.classList.toggle('urgent')

    }
}