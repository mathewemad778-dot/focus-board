
// NAV SYSTEM

const navButtons = document.querySelectorAll('.nav-btn, .nav-btn-active');
const sections = document.querySelectorAll('.section');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        navButtons.forEach(btn => btn.classList.remove('nav-btn-active'));
        button.classList.add('nav-btn-active');

        const target = button.dataset.section;
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === target) section.classList.add('active');
        });
    });

    // DARK MODE TOGGLE
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });

    // TASK MANAGEMENT
    const taskInput = document.getElementById('taskTitle');
    const taskPriority = document.getElementById('taskPriority');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    const totalTasksDisplay = document.getElementById('totalTasks');
    const completedTasksDisplay = document.getElementById('completedTasks');
    const completionRateDisplay = document.getElementById('completionRate');


    // LOAD TASKS FROM LOCAL STORAGE
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


    // Update analytics
    function updateAnalytics() {
        const total = tasks.length;
        const completed = tasks.filter(t => t.completed).length;
        const rate = total === 0 ? 0 : Math.round((completed / total) * 100);

        totalTasksDisplay.textContent = total;
        completedTasksDisplay.textContent = completed;
        completionRateDisplay.textContent = `${rate}%`;
    }

    // RENDER TASKS in the DOM

    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((t, index) => {
            const li = document.createElement("li");
            li.className = t.completed ? 'completed' : '';
            li.innerHTML = `
                <span>${t.title} - <em>${t.priority}</em></span>
                <button class="delete-task">Delete</button>
            `;
            taskList.appendChild(li);

            if(t.completed) li.classList.add("task-completed");

            // Toggle completed
            li.querySelector("span").addEventListener("click", () => {
                t.completed = !t.completed;
                saveAndRender();
            });

            // Delete task
            li.querySelector('.delete-task').addEventListener('click', () => {
                tasks.splice(index, 1);
                saveAndRender();
            });

            taskList.appendChild(li);
        });
    }

    // Save tasks to local storage and refresh DOM

    function saveAndRender() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
        updateAnalytics();
    }

    // Add new task
    addTaskBtn.addEventListener('click', () => {
        const title = taskInput.value.trim();
        const priority = taskPriority.value;
        if (!title) return;

        tasks.push({ title, priority, completed: false });

        taskInput.value = "";
        saveAndRender();
    });

    // Initial render

    renderTasks();
    updateAnalytics();
    console.log('Script loaded successfully');
});
