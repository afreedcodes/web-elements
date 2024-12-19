// $ Steps of todo list app functionalities
        // * 1. Handle tasks filter/nav
        // * 2. Add new task to db
        // * 3. Display tasks in filters as per their status
        // * 4. Updating task's status
        // * 5. Executing edit & delete task
        // * 6. Clear all tasks 

        // # Step 1
        let navItem = document.querySelectorAll(".nav-item"), taskContent = document.querySelectorAll(".list-wrapper");
        let editTaskIndex = -1;

        navItem.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                taskContent.forEach((content) => {
                    content.classList.remove("active");
                })

                navItem.forEach((btn) => {
                    btn.classList.remove("active")
                })

                taskContent[index].classList.add("active");
                navItem[index].classList.add("active")
            })
        })

        // # Step 2
        let todoForm = document.getElementById("todo-form"),
            todoInput = todoForm.getElementsByTagName("input")[0],
            taskListEle = document.getElementById("task-list"),
            pendingTaskListEle = document.getElementById("pending-task-list"),
            completedTaskListEle = document.getElementById("completed-task-list");

        // * Form submission
        todoForm.addEventListener("submit", (e) => {
            e.preventDefault();

            let newTask = {
                text: todoInput.value,
                status: "pending"
            }

            if (editTaskIndex === -1) {
                handleTaskSubmissoin(newTask)
                todoInput.value = ""
            } else {
                tasks[editTaskIndex] = newTask;
                saveTasksToLocalStorage()
                editTaskIndex = -1;
                todoForm.getElementsByTagName("button")[0].textContent = "Add";
                todoInput.value = ""

                // Refresh all task displays
                displayAllTasks()
                displayPendingTasks()
                displayCompletedTasks()
            }

        })

        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        // * Helper function to save tasks to localStorage
        const saveTasksToLocalStorage = () => {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        // * Show info if there are no tasks
        if (!tasks.length) {
            taskListEle.innerHTML = "<span class='w-full text-center'>You don't have any task here<spam/>"
        }

        // * Push new task to db
        const handleTaskSubmissoin = (newTask) => {
            tasks.push(newTask)
            saveTasksToLocalStorage()
            displayAllTasks()
            displayPendingTasks();
        }

        // # Step 3
        const displayAllTasks = () => {
            // * Show info if there are no tasks
            if (!tasks.length) {
                taskListEle.innerHTML = "<span class='w-full text-center'>You don't have any tasks here<spam/>"
            } else {
                taskListEle.innerHTML = tasks.map((task, index) => {
                    return `<li class="relative w-full flex justify-between items-start">
            <label class="relative flex justify-center items-center">
                <input type="checkbox" class="task-checkbox" ${task.status == "completed" ? 'checked' : ''} data-index="${index}">
                <span class="checkmark me-3"></span>
                <h6> ${task.text} </h6>
            </label>
            <span class="flex gap-4">
                <span><i class="fa-solid fa-pen-to-square text-yellow-600 cursor-pointer edit-task-btn" data-index="${index}"></i></span>
                <span><i class="fa-solid fa-trash text-red-600 cursor-pointer delete-task-btn" data-index="${index}"></i></span>
            </span>
        </li>`;
                }).join("")
            }

            addCheckboxEventListeners(taskListEle);
            editTaskHandler(taskListEle)
            deleteTaskHandler(taskListEle)

        }

        const displayPendingTasks = () => {
            // * Show info if there are no tasks

            let pendingTasks = tasks.filter((task) => task.status == "pending");
            let pendingTasksCountEle = document.querySelector(".pending-tasks-count").textContent = pendingTasks.length
            if (!pendingTasks.length) {
                pendingTaskListEle.innerHTML = "<span class='w-full text-center'>You don't have any tasks here<spam/>"
            } else {
                pendingTaskListEle.innerHTML = pendingTasks.map((task, index) => {
                    return `<li class="relative w-full flex justify-between items-start">
            <label class="relative flex justify-center items-center">
                <input type="checkbox" class="task-checkbox" ${task.status == "completed" ? 'checked' : ''} data-index="${tasks.indexOf(task)}">
                <span class="checkmark me-3"></span>
                <h6> ${task.text} </h6>
            </label>
            <span class="flex gap-4">
                <span><i class="fa-solid fa-pen-to-square text-yellow-600 cursor-pointer edit-task-btn" data-index="${tasks.indexOf(task)}"></i></span>
                <span><i class="fa-solid fa-trash text-red-600 cursor-pointer delete-task-btn" data-index="${tasks.indexOf(task)}"></i></span>
            </span>
        </li>`;
                }).join("")
            }

            addCheckboxEventListeners(pendingTaskListEle);
            editTaskHandler(pendingTaskListEle)
            deleteTaskHandler(pendingTaskListEle)
        }

        const displayCompletedTasks = () => {
            // * Show info if there are no tasks

            let completedTasks = tasks.filter((task) => task.status == "completed");
            if (!completedTasks.length) {
                completedTaskListEle.innerHTML = "<span class='w-full text-center'>You don't have any tasks here<spam/>"
            } else {
                completedTaskListEle.innerHTML = completedTasks.map((task, index) => {
                    return `<li class="relative w-full flex justify-between items-start">
            <label class="relative flex justify-center items-center">
                <input type="checkbox" class="task-checkbox" ${task.status == "completed" ? 'checked' : ''} data-index="${tasks.indexOf(task)}">
                <span class="checkmark me-3"></span>
                <h6> ${task.text} </h6>
            </label>
            <span class="flex gap-4">
                <span><i class="fa-solid fa-pen-to-square text-yellow-600 cursor-pointer edit-task-btn" data-index="${tasks.indexOf(task)}"></i></span>
                <span><i class="fa-solid fa-trash text-red-600 cursor-pointer delete-task-btn" data-index="${tasks.indexOf(task)}"></i></span>
            </span>
        </li>`;
                }).join("")
            }

            addCheckboxEventListeners(completedTaskListEle);
            editTaskHandler(completedTaskListEle)
            deleteTaskHandler(completedTaskListEle)
        }

        // # Step 4
        // * Function to add event listeners to checkboxes
        const addCheckboxEventListeners = (parentElement) => {
            parentElement.querySelectorAll(".task-checkbox").forEach((input) => {
                input.addEventListener("change", (e) => {
                    const taskIndex = e.target.getAttribute("data-index");
                    tasks[taskIndex].status = e.target.checked ? "completed" : "pending";
                    saveTasksToLocalStorage();

                    // Refresh all task displays
                    displayAllTasks();
                    displayPendingTasks();
                    displayCompletedTasks();
                });
            });
        }

        // # Step 5
        const editTaskHandler = (parentElement) => {
            parentElement.querySelectorAll(".edit-task-btn").forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    let taskIndex = e.target.getAttribute("data-index");
                    let task = tasks[taskIndex];
                    todoInput.value = task.text;
                    editTaskIndex = taskIndex;

                    todoForm.getElementsByTagName("button")[0].textContent = "Update"
                })
            })
        }

        const deleteTaskHandler = (parentElement) => {
            parentElement.querySelectorAll(".delete-task-btn").forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    let taskIndex = e.target.getAttribute("data-index");

                    tasks.splice(taskIndex, 1);
                    saveTasksToLocalStorage()

                    // Refresh all task displays
                    displayAllTasks();
                    displayPendingTasks();
                    displayCompletedTasks();
                })
            })
        }

        // # Step 6
        const handleTasksFlush = () => {
            // let userConfirmation = window.confirm("Are you sure you want to clear all tasks?")

            // if(userConfirmation){
            // }
            localStorage.removeItem("tasks")
            tasks = []

            // Refresh all task displays
            displayAllTasks()
            displayPendingTasks()
            displayCompletedTasks()
        }


        displayAllTasks()
        displayPendingTasks()
        displayCompletedTasks()