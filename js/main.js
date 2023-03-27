//Find elements on the page
const form = document.querySelector("#form");
const taskInput = document.querySelector("#taskInput");
const tasksList = document.querySelector("#tasksList");
const emptyList = document.querySelector("#emptyList");


form.addEventListener("submit", addTask);
tasksList.addEventListener("click", deleteTask);
tasksList.addEventListener("click", doneTask);

function addTask(event) {
    //Canceled sending form/reset page
	event.preventDefault();
    
	// Get the text drom Input
	const taskText = taskInput.value;
	
	// Generate markup for a new task
	const taskHTML = `
					<li class="list-group-item d-flex justify-content-between task-item">
						<span class="task-title">${ taskText }</span>
						<div class="task-item__buttons">
							<button type="button" data-action="done" class="btn-action">
								<img src="./img/tick.svg" alt="Done" width="18" height="18">
							</button>
							<button type="button" data-action="delete" class="btn-action">
								<img src="./img/cross.svg" alt="Done" width="18" height="18">
							</button>
						</div>
					</li>`;
	
					// addining tasks on the page
		tasksList.insertAdjacentHTML("beforeend", taskHTML);
		
		// clear field inputs and return focun ib inpet field
	
		taskInput.value = "";
		taskInput.focus();
	
		// if in list more 1 element hise block List task is empty 
		if (tasksList.children.length > 1) {
			emptyList.classList.add("none")
		}
};

//проверяем клинули ли удалить задачу
function deleteTask(event) {
	if (event.target.dataset.action !== "delete") return;
// проверяем если клик бы не по кнопке удалить задачу
	const parenNode = event.target.closest(".list-group-item");
	parenNode.remove();
	if (tasksList.children.length === 1) {
		emptyList.classList.remove("none");
		const parentNode = event.target.closest(".list-group-item");
	}
};


function doneTask(event) {
	//проверяем что клик был НЕ по кнопке задача выпонена
	if (event.target.dataset.action !== "done") return;
	
const parentNode = event.target.closest(".list-group-item");
const taskTitle = parentNode.querySelector(".task-title");
taskTitle.classList.toggle("task-title--done");
};