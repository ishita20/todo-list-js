"use strict"
function get_list(){
    let todo=new Array;
    let todoStr=localStorage.getItem('todo');
    if(todoStr != null){
        todo=JSON.parse(todoStr);
    }
    //return list as array
    return todo;
}

function showList(){
    let list = get_list();
    let disp = '<ul>';
    for(let i=0;i<list.length;i++){
        disp+='<li>'+list[i]+'<button class="remove" id="'+i+'">X</button></li>';
    }
    disp+='</ul>';
    document.getElementById('list').innerHTML=disp;
    let buttons = document.getElementsByClassName('remove');
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click',remove);
    }
}

function remove(){
    let removeButtonId=this.getAttribute('id');
    let list = get_list();
    // remove 1 element from index removeButtonId
    list.splice(removeButtonId,1);
    let tempList = JSON.stringify(list);
    localStorage.setItem('todo',tempList);
    showList();
    //check
    //return false;
}

function addTask(){
    let task=document.getElementById('addTask').value;
    let list = get_list();
    list.push(task);
    let tempList=JSON.stringify(list);
    localStorage.setItem('todo',tempList);
    //to refreash the list with updated items
    showList();
    //check use
    //return false;
}

document.getElementById('add').addEventListener('click',addTask);
showList();