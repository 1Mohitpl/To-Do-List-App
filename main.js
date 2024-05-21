document.querySelector('#button').addEventListener('click', function (){
    const taskInput = document.querySelector('input').value.trim();
    
    if (taskInput === "") {
        // If the input is empty, do not add a new task
        return;
    }

    const newtask = document.createElement('li');
    const tasklist = document.getElementById('tasklist');
    newtask.textContent = taskInput;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', function() {
        tasklist.removeChild(newtask);
    });
    newtask.appendChild(deleteButton);

    tasklist.appendChild(newtask);
    document.querySelector('input').value = "";
});




const nightModeButton = document.getElementById("night-mode");
nightModeButton.addEventListener("click", function() {
    document.body.classList.toggle("night-mode");
});


