export const userProjects = [];
import { displayAvailableProjects } from './display-controller.js'

/*
export function pickProject(){
    let choice = prompt('Which project would you like to add you todo to?')
    if (!choice){
        return userProjects[0];
    }
    else if(choice){
        for(let project of userProjects){
            if(project.name == choice){
                return project;
            }
        }
        alert('ERROR! Project does not exist');
        return 'Error';
    }
}
*/

export function pickProject(){
    displayAvailableProjects();
    const cacheDialog = function (){
        
    }
}