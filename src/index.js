import todoManager from './todoManager.js';
import { projectManager } from './project-manager.js';
import { getUserInput } from './user-input.js';
import { formHandling } from './form-manipulation.js';
import { createUserProject, createUserTodo } from './create-entries.js';
import './styles.css';
import { displayProjects } from './display-controller.js';
import './date-constraint.js';

export let defaultProject = projectManager.createNewProject('Default Project');
