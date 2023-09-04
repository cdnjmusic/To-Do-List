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
      // Create a new task item in the GUI
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
        <span class="extended-entry">${taskText}</span>
        <img class="delete-btn" src="../static/icons/delete.png" alt="Delete Task">
      `;
  
      // Add the new task to the <ul> in the GUI
      taskList.appendChild(taskItem);
      newTaskInput.value = "";
      attachDeleteEvent(taskItem);
  
      // Send a POST request to add the task to the database
      const formData = new FormData();
      formData.append("task_description", taskText);
      fetch("/add_task", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          // Check if the task was successfully added to the database
          if (!data.success) {
            alert("Failed to add the task to the database. Please try again.");
          }
        });
    }
  }  

  function attachDeleteEvent(taskItem) {
    const deleteButton = taskItem.querySelector(".delete-btn");
    deleteButton.addEventListener("click", function () {
      // Remove the task from the <ul> in the GUI
      taskList.removeChild(taskItem);
  
      // Send a DELETE request to remove the task from the database
      const taskId = taskItem.dataset.taskId; // Retrieve the task ID
      fetch(`/delete_task/${taskId}`, {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          // Check if the task was successfully deleted from the database
          if (!data.success) {
            alert("Failed to delete the task from the database. Please try again.");
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
          tasks.forEach((task) => {
            // Create a new task item with the task ID from the database
            const taskItem = document.createElement("li");
            taskItem.dataset.taskId = task.id; // Set the task ID as a data attribute
            taskItem.innerHTML = `
              <span class="extended-entry">${task.description}</span>
              <img class="delete-btn" src="../static/icons/delete.png" alt="Delete Task">
            `;
            taskList.appendChild(taskItem);
            attachDeleteEvent(taskItem);
          });
        } else {
          alert("Failed to load tasks from the database. Please try again.");
        }
      });
  }
});
