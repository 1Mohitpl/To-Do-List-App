document.querySelector('#button').addEventListener('click', function (){
    const newtask = document.createElement('li');
    const tasklist = document.getElementById('tasklist')
    tasklist.appendChild(newtask);
    newtask.textContent = document.querySelector('input').value;
    document.querySelector('input').value = "";
})