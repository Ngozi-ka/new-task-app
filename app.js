const addItem = document.getElementById("addItem");
const addBtn = document.getElementById("addBtn");
const categories = document.getElementById("categories");
const date = document.getElementById("date");
const errorMsg = document.getElementById("errorMsg");
const taskContainer = document.querySelector(".task-container");
const checkedd = document.querySelector(".checkedd");
const finished = document.querySelector(".finish-container");
const each = document.querySelector(".each");
const datee = document.querySelector(".datee");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  validate();
  console.log("added");
});

const validate = function () {
  if (addItem.value === "" || categories.value === "" || date.value === "") {
    errorMsg.textContent = "Make sure to fill all gaps";
  } else {
    errorMsg.textContent = "";
    saveData();
  }
};

let data = {};

const saveData = function () {
  data["text"] = addItem.value;
  data["category"] = categories.value;
  data["date"] = date.value;
  upload();
};

const upload = function () {
  taskContainer.innerHTML += `
<div class="task">
          <div class="one">
            <div class="first">
                <input type="checkbox" name="" class="checkedd" />
            <p class="each">${data["text"]}</p>
            </div>
           <div>
             <p class="datee">${data["date"]}</p>
           </div>
          </div>
          <div class="actions">
           <p>${data["category"]}</p>

            <div>
            <button onClick="editTask(this)"><img  src="edit.png" alt="edit" /></button>
            <button onClick="deleteTask(this)"><img  src="delete.png" alt="delete" /></button>
            </div>
          </div>
        </div>
`;

  addItem.value = "";
  date.value = "";
};

let editTask = function (e) {
  addItem.value =
    e.parentElement.parentElement.previousElementSibling.firstElementChild.children[1].innerHTML;
  e.parentElement.parentElement.parentElement.remove();
};

let deleteTask = function (e) {
  e.parentElement.parentElement.parentElement.remove();
};

// let info = {};

// let finishedInfo = function(){
//   info.text = each.textContent;
//   info.date = datee.textContent;
// }

taskContainer.addEventListener("change", function(e){

if(!e.target.classList.contains("checkedd")) return;

const task = e.target.closest(".task");
const text = task.querySelector(".each").textContent;
const date = task.querySelector(".datee").textContent;

  if(e.target.checked){
      finished.innerHTML += `
       <div class="finish">
      <div id="checkbox">
            <input type="checkbox" name="" class="finish-check" />
            <p class="eacch check">${text}</p>
            </div>
            <p id="finishDate">${date}</p>
            </div>
      `
      e.target.closest(".task").remove()
    console.log("checked")
  }
})


finished.addEventListener("click", function(e){
  if(e.target.classList.contains("finish-check")){
    e.target.closest(".finish").remove()
  }
  
})
