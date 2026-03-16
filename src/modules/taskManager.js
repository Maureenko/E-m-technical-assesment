export function addTask(){
    let tasks = JSON.parse(localStorage.getItem("tasks"))

    const task = {
        title:document.getElementById("taskTitle").value,
        priority:document.getElementById("taskPriority").value,
        date:document.getElementById("taskDate").value,
        status:pending
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}