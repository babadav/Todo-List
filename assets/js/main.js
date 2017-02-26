console.log("script.js");

//Higher Order Functions

//Functions that take another function as paramaters or return another
//function as their result 

//ToDo App 
//Form and input and submit button 
//Checkboxes to mark item as done 
// buttons to remove items 
//Counter for how many items exist 
//A counter for how mnay are done 
// The ability to edit an item once it's been made 
//The ability to save list 
//The ability to save list remotley 
//Hide/Show completed
//Clear all completed
var itemText = document.querySelector("input[name=todo-input");
function createToDo(){
	//get the info from the form
	var itemText = document.querySelector("input[name=todo-input");
	console.dir(itemText.value);
}

// window.addEventListener("click", function(){
// 	createToDo();
// });




var form = document.querySelector("form");
form.addEventListener("submit", function(e){

	var ol = document.querySelector(".todo-list");
	
	var li =document.createElement("li") 
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

		button.innerHTML = "X";

		li.appendChild(button);



	

	









	
	e.preventDefault();
	createToDo();
});























