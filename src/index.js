import todoManager from './todoManager.js';
import { projectManager } from './project-manager.js';
import { getUserInput } from './user-input.js';
import { formHandling } from './dom-manipulation.js';
import { createUserProject, createUserTodo } from './create-entries.js';
import './styles.css';
import { displayProjects } from './display-controller.js';

let defaultValues = {
    title: 'Learn Programming',
    description: 'I want to be a web developer',
    dueDate: '2025',
    priority: 'Important',
    notes: 'I am learning using The Odin Project curriculum',
    status: 'In porgress',
}

let defaultProject = projectManager.createNewProject('Default Project');
let defaultProjectName = defaultProject.name
displayProjects(defaultProjectName);