window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // Register the add button click event handler
   document.querySelector("#add-btn").addEventListener("click", addBtnClick);

   // Register the keyup event handler for the textbox
   document.querySelector("#new-task").addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
         addBtnClick();
      }
   });
}

function addBtnClick() {
   const taskInput = document.querySelector("#new-task");
   const newTask = taskInput.value.trim();

   if (newTask !== "") {
      addTask(newTask);
      taskInput.value = "";  // Clear the textbox
      taskInput.focus();     // Put focus back on the textbox
   }
}

function addTask(task) {
   const ol = document.querySelector("#task-list");
   const li = document.createElement("li");
   li.innerHTML = `<span class="task-text">${task}</span><button class="done-btn">&#10006;</button>`;

   ol.appendChild(li);

   // Register the remove task event handler for the newly added button
   li.querySelector(".done-btn").addEventListener("click", removeTask);
}

function removeTask(event) {
   const taskItem = event.target.parentNode;  // Get the parent <li> element
   taskItem.remove();                         // Remove the <li> element
}
