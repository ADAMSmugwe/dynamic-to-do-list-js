document.addEventListener('DOMContentLoaded', () => {
  // DOM element references
  const addButton = document.getElementById('add-button');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    // Remove task when button is clicked
    removeButton.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });

    // Append button to list item, then list item to task list
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = '';
  };

  // Add task on button click
  addButton.addEventListener('click', addTask);

  // Add task on Enter key press
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
