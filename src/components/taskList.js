export function displayTasks(filter="all"){
    const list = document.getElementById("taskList");

    if (!list)
        return;

    list.textContent = "";

    let tasks = JSON.parse(localStorage.getElements("tasks")) 

    const today = new Date()
    
    tasks.forEach((task, index) => {
        let status = task.status;

        if(new Date(task.date) < today && status !== complted){
            status = "overdue";
        }
        if(filter !== "all" && status !== filter) return;
        
        const div = createElement("div");

        div.className = "task";

        div.textContent = `
        <h3>${task.title}</h3>
        <p>Priority:${task.priority}</p>
        <p>Due Date:${task.date}</p>
        <p>Status:${status}</p>

        <button onclick="complete Task (${index})">Complete Task </button>
        <button onclick="Delete Task (${index})">Delete Task</button>
        `
        list.appendChild(div)
    })
}

export function updateStats(){
    let tasks = JSON.parse(localStorage.getItem("tasks"))

    let total = tasks.length;
    let completed = 0;
    let overdue = 0;

    const today = new Date();
    tasks.forEach(task =>{
        if(task.status === "completed")
            completed++;

        if(new Date(task.date) < today && task.status !== "completed")
            overdue++;
    })

    let pending = total - completed;

    document.getElementById(total).textContent = total;
    document.getElementById(completed).textContent = completed;
    document.getElementById(pending).textContent = pending;
    document.getElementById(overdue).textContent = overdue;
}
