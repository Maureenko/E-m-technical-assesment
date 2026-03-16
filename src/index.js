import { displayTasks, updateStats } from './components/taskList.js';
import {registerUser,loginUser} from './modules/auth.js';
import {addTask} from './modules/taskManager.js';


document.getElementById("registerButton").addEventListener("click, registerUser");
document.getElementById("loginButton").addEventListener("click, loginUser");

document.getElementById("addTaskButton").addEventListener("click",() => {
    addTask()
    displayTasks()
    updateStats()
});

document.getElementById("filter").addEventListener("change",(e) => {
    displayTasks(e.target.value);
});

displayTasks()
updateStats()