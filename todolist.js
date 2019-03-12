let masterTodoList = [];
let textDone;
let inputText = document.getElementById("inputText");
let addTodo = document.getElementById("addButton").addEventListener('click', () => {
    masterTodoList.push({
        text: inputText.value,
        isDone: false
    });
    console.log(masterTodoList);
    inputText.value = "";
    updateTodoList();
});

let updateTodoList = () => {
    let html = "";
    for (let i = 0; i < masterTodoList.length; i++) {
        if (masterTodoList[i].isDone == false) {
            html += `<li class = "undoneItem">${masterTodoList[i].text} <a href='#' onclick="remove(${i})">delete</a>  <a href='#' onclick="toggleDone(${i})">Mark done</a></li>\n`;
        }
        if (masterTodoList[i].isDone == true) {
            html += `<li class = "doneItem" >${masterTodoList[i].text} <a href='#' onclick="remove(${i})">delete</a>  <a href='#' onclick="toggleDone(${i})">Mark undone</a></li>\n`;
        }
    };
    document.getElementById("todoList").innerHTML = html;
}

let remove = (i) => {
    masterTodoList.splice(i, 1);
    updateTodoList();
}

let toggleDone = (i) => {
    masterTodoList[i].isDone = !(masterTodoList[i].isDone);
    updateTodoList();
}

// let isChecked = true;


let checkBox = document.getElementById("checkBox");
checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
    let resultArr = masterTodoList.filter((item) => {
        return item.isDone == false;
    });
    let html = "";
    for (let i = 0; i < resultArr.length; i++) {
        html += `<li class = "undoneItem">${resultArr[i].text} <a href='#' onclick="remove(${i})">delete</a>  <a href='#' onclick="toggleDone(${i})">Mark done</a></li>\n`;
    };
    document.getElementById("todoList").innerHTML = html;
    }
    else {
        updateTodoList(); 
    }
})
