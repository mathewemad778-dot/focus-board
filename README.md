# focus-board
This Task Manager Web App is a modern, responsive, and user-friendly productivity application built using HTML, CSS, and Vanilla JavaScript. The main goal of this project is to provide a clean and efficient way to manage daily tasks while demonstrating strong front-end development fundamentals including DOM manipulation, state management, UI/UX design, dark mode implementation, animations, and local storage persistence.

The application allows users to create tasks easily by entering a task title and selecting a priority level such as Low, Medium, or High. Once added, tasks appear instantly in the list with a smooth fade-in and slide-up animation that enhances the user experience and gives the interface a professional feel. Each task is stored as an object containing a title, priority, and completion status. These tasks are managed inside a JavaScript array and rendered dynamically to the page.

Users can mark tasks as completed by clicking directly on the task text. When a task is completed, it visually updates with a line-through effect and a subtle color change to clearly indicate its status. Clicking again toggles it back to active, making the interaction simple and intuitive. This toggle functionality ensures smooth state updates while keeping the interface clean and user-friendly.

Each task also includes a professionally styled delete button with hover effects and smooth transitions. When clicked, the task is immediately removed from both the user interface and the internal data structure. The deletion is reflected instantly in the analytics section and saved automatically to local storage, ensuring consistency between the UI and stored data.

The application features a live analytics section that automatically updates whenever tasks are added, completed, or deleted. It displays the total number of tasks, the number of completed tasks, and the completion rate percentage. These statistics provide users with real-time feedback about their productivity and progress. All calculations are handled dynamically using JavaScript to ensure accurate and instant updates.

Dark mode is fully implemented across the entire application. When activated, the background, cards, task list, analytics section, inputs, and buttons all adapt to a darker color scheme optimized for readability and comfort. Text colors and highlight elements are carefully adjusted to maintain strong contrast and visual clarity. The theme switch enhances usability and gives the project a modern, professional appearance.

All data is stored locally using the browser’s Local Storage API. This means tasks remain saved even after refreshing the page or closing the browser. The application does not require any backend or external database, making it lightweight and fully front-end based while still offering persistent data storage.

The project structure is simple and organized into separate files for structure, styling, and logic. HTML handles the layout and semantic structure, CSS is responsible for styling, animations, transitions, and dark mode, and JavaScript manages all functionality including task creation, rendering, state updates, analytics calculations, and data persistence.

This project demonstrates strong understanding of core web development concepts such as dynamic DOM rendering, event listeners, conditional styling, state synchronization, local storage handling, responsive layout principles, and smooth UI transitions. It was built without using any frameworks or external libraries, relying entirely on pure front-end technologies to highlight foundational skills.

The Task Manager Web App can be extended in the future with additional features such as task editing, filtering options, due dates, drag-and-drop reordering, user authentication, or backend integration. However, in its current form, it already provides a complete and functional productivity solution with a clean design and professional user experience
