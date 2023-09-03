document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.getElementById("task-list");
  const newTaskInput = document.getElementById("new-task");
  const addTaskButton = document.getElementById("add-task-btn");

  addTaskButton.addEventListener("click", addTask);

  // Add a keydown event listener to the input field
  newTaskInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
          addTask();
      }
  });

  function addTask() {
      const taskText = newTaskInput.value;
      if (taskText.trim() !== "") {
          const taskItem = document.createElement("li");
          taskItem.innerHTML = `
              <span class="extended-entry">${taskText}</span>
              <img class="delete-btn" src="../static/icons/delete.png" alt="Delete Task">
          `;
          taskList.appendChild(taskItem);
          newTaskInput.value = "";
          attachDeleteEvent(taskItem);
      }
  }

  function attachDeleteEvent(taskItem) {
      const deleteButton = taskItem.querySelector(".delete-btn");
      deleteButton.addEventListener("click", function () {
          taskList.removeChild(taskItem);
      });
  }
});
