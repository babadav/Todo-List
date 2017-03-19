console.log("script.js");

window.addEventListener("load", function(){
	var form = document.querySelector("form");
	form.addEventListener("submit", function(e){
		e.preventDefault();
		var itemText = document.querySelector("input[name=todo-input]");
		createToDo(itemText, false);
	});

	loadStorage();

});

function loadStorage(){
	//get local storage
	//turn it back into an object
	//append those LIs to the OL
	
	var todoList = document.getElementsByClassName("todo-list") [0];
	var storageItem = localStorage.getItem("listContents");
	var storageArray = JSON.parse(storageItem);
	console.log(storageArray);





	if (storageArray){
	for (var i = 0; i < storageArray.length; i++) {
		createToDo(storageArray[i].text, storageArray[i].done)
	};
}
}


	
// 	var todoItem = document.createElement("li");
	
// }

// var itemText = document.querySelector("input[name=todo-input");

function createToDo(itemText, doneState){
	//get the info from the form
	
	// console.dir(itemText);

	var ol = document.querySelector(".todo-list");
	
	var li =document.createElement("li");
	li.classList.add("list-item");
	li.innerHTML = itemText.value;

	ol.appendChild(li);

	var checkBox = document.createElement("input");

	checkBox.classList.add("check-style");

	checkBox.type = "checkbox";
	checkBox.checked = false;
	li.appendChild(checkBox);

	var button = document.createElement("button");

		button.classList.add("button-style");

		button.innerHTML = "Delete";

		li.appendChild(button);

		

	checkBox.addEventListener("click",markAsDone);
	button.addEventListener("click",deleteItem);



	


	updateItemCount();

	
}

// window.addEventListener("click", function(){
// 	createToDo();
// });



var checkBox = document.createElement("input");
// var form = document.querySelector("form");
// form.addEventListener("submit", function(e){
// 	e.preventDefault();
// 	createToDo();
// });


var allCompletedButton = document.createElement("button");

		allCompletedButton.classList.add("all-completed-button-style");

		allCompletedButton.innerHTML = "Mark All As Complete";

		document.body.appendChild(allCompletedButton);

	allCompletedButton.addEventListener("click",markAllAsDone);


var deleteAllButton = document.createElement("button");
	
	deleteAllButton.classList.add("delete-all-button");

	deleteAllButton.innerHTML = "Delete All Completed ";

	deleteAllButton.addEventListener("click", deleteAllDoneItems);

	document.body.appendChild(deleteAllButton);


var hideButton = document.createElement("button");

	hideButton.classList.add("hide-button");

	hideButton.innerHTML = "Hide Completed";

	document.body.appendChild(hideButton);

	hideButton.addEventListener("click", hideCompleted);

var showButton = document.createElement("button");
	showButton.classList.add("show-button");
	showButton.innerHTML = "Show Completed";
	document.body.appendChild(showButton);

	showButton.addEventListener("click", showCompleted);

var saveButton = document.querySelectorAll("li");
console.log(saveButton)

var allCompleted = document.querySelectorAll(".done");

var JSONData = JSON.stringify(allCompleted);
    localStorage.setItem(allCompleted.genre, JSONData);
    console.log(localStorage)


function deleteItem(e) {
	console.log("delete");
	var button = e.currentTarget;
	button.parentElement.remove();
	updateItemCount();


}

function markAsDone(e) {
	console.dir(e.currentTarget.checked);
	var checkbox = e.currentTarget
	if(e.currentTarget.checked){
		checkbox.parentElement.classList.add("done");
	}else checkbox.parentElement.classList.remove("done");
	updateItemCount();

}
function updateItemCount(e) {
	var doneCount = document.getElementsByClassName("done").length;
	var allCount = document.getElementsByClassName("list-item").length;
	var doneContainer= document.getElementById("done-count");
	var allContainer = document.getElementById("all-count");

	doneContainer.innerHTML = doneCount;
	allContainer.innerHTML = allCount;
}









function markAllAsDone(e) {
	var taskCompleted = document.querySelectorAll('.list-item');

	for (var i = taskCompleted.length - 1; i >= 0; i--) {
		taskCompleted[i].classList.add('done');
	}

	updateItemCount();
	storeData()

}
	



function deleteAllDoneItems(e){

	var allCompleted = document.querySelectorAll(".done");

	for (var i = allCompleted.length - 1; i >= 0; i--) {
		allCompleted[i].parentNode.removeChild(allCompleted[i]);
	};

	updateItemCount();
	storeData()

}


function hideCompleted(e){

	var allCompleted = document.querySelectorAll(".done");

	for (var i = allCompleted.length - 1; i >= 0; i--) {
		allCompleted[i].classList.add("hide");
	};

	updateItemCount();
	storeData()

}

function showCompleted(e){

	var allCompleted = document.querySelectorAll(".hide");

	for (var i = allCompleted.length - 1; i >= 0; i--) {
		allCompleted[i].classList.remove("hide");

	};

	updateItemCount();
	storeData()

}


function storeData(){
	var todoItems = document.querySelectorAll(".todo-item");


		var storageArray= [];

		for (var i = 0 ; i < todoItems.length; i++){

			console.dir(todoItems[i]);

			storageArray.push({
				text: todoItems[i].children[1].innerHTML,
				done: todoItems[i].classList.contains("done")
			});
		}


	
		localStorage.setItem("listContents", JSON.stringify(storageArray));


		};

		







