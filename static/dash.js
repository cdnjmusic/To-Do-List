document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("task-list");
    const newTaskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task-btn");
  
    // Load tasks from the database when the page loads
    loadTasks();
  
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
        // Send a POST request to add the task to the database
        fetch("/add_task", {
          method: "POST",
          body: JSON.stringify({ task_description: taskText }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // Check if the task was successfully added to the database
            if (data.success) {
              const taskItem = document.createElement("li");
              taskItem.innerHTML = `
                <span class="extended-entry">${taskText}</span>
                <img class="delete-btn" src="../static/icons/delete.png" alt="Delete Task">
              `;
              taskList.appendChild(taskItem);
              newTaskInput.value = "";
              attachDeleteEvent(taskItem);
            } else {
              alert("Failed to add the task. Please try again.");
            }
          });
      }
    }
  
    function attachDeleteEvent(taskItem) {
      const deleteButton = taskItem.querySelector(".delete-btn");
      deleteButton.addEventListener("click", function () {
        // Send a DELETE request to remove the task from the database
        fetch("/delete_task", {
          method: "DELETE",
          body: JSON.stringify({ task_description: taskItem.textContent }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // Check if the task was successfully deleted from the database
            if (data.success) {
              taskList.removeChild(taskItem);
            } else {
              alert("Failed to delete the task. Please try again.");
            }
          });
      });
    }
  
    function loadTasks() {
      // Send a GET request to load tasks from the database
      fetch("/load_tasks")
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            const tasks = data.tasks;
            tasks.forEach((taskText) => {
              const taskItem = document.createElement("li");
              taskItem.innerHTML = `
                <span class="extended-entry">${taskText}</span>
                <img class="delete-btn" src="../static/icons/delete.png" alt="Delete Task">
              `;
              taskList.appendChild(taskItem);
              attachDeleteEvent(taskItem);
            });
          } else {
            alert("Failed to load tasks. Please try again.");
          }
        });
    }
  });
  