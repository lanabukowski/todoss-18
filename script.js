'use strict';

loadEvents();
function loadEvents(){
  document.querySelector('.form').addEventListener('submit', submit);
  document.querySelector('ul').addEventListener('click',deleteOrTick);
}

function submit(e){
  e.preventDefault();
  let input = document.querySelector('.input');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}

function addTask(task){
    let ul = document.querySelector('.list');
    let li = document.createElement('li');
    li.classList.add("item");
    li.innerHTML = `<input type="checkbox"><label>${task}</label><span class="delete">×</span>`;
    ul.appendChild(li);
    document.querySelector('.tasksBoard').style.display = 'block';
}

function deleteOrTick(e){
    if(e.target.className == 'delete')
      deleteTask(e);
    else {
      tickTask(e);
    }
}
  
function deleteTask(e){
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
    let ul = document.querySelector('.list');
    let li = document.querySelector('.item');
    if (!ul.contains(li)){
        document.querySelector('.tasksBoard').style.display = 'none';
    }
}
  
function tickTask(e){
    let task = e.target.nextSibling;
    if (e.target.checked){
        task.classList.add("tick")
    }else {
        task.classList.remove("tick")
    }
}