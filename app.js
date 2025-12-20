const addItem = document.getElementById("addItem");
const addBtn = document.getElementById("addBtn");
const categories = document.getElementById("categories");
const date = document.getElementById("date");
const errorMsg = document.getElementById("errorMsg");
const taskContainer = document.querySelector(".task-container");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  validate();
  console.log("added");
});

const validate = function () {
  if (addItem.value === "" || categories.value === "" || date.value === "") {
    // addBtn.disabled = true;
    // errorMsg.style.display = "block"
    errorMsg.textContent = "Make sure to fill all gaps";
  } else {
    // addBtn.disabled = false;
    errorMsg.textContent = "";
    console.log("successful");
    saveData();
  }
};

let data = {};

const saveData = function () {
  data["text"] = addItem.value;
  data["category"] = categories.value;
  data["date"] = date.value;
  upload()
};

const upload = function () {
  taskContainer.innerHTML += `
<div class="task">
          <div class="one">
            <div class="first">
                <input type="checkbox" name="" id="" />
            <p class="each">${data["text"]}</p>
            </div>
           <div>
             <p>${data["date"]}</p>
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
  addItem.value = e.parentElement.parentElement.previousElementSibling.firstElementChild.children[1].innerHTML;
  e.parentElement.parentElement.parentElement.remove();
};

let deleteTask = function (e) {
  e.parentElement.parentElement.parentElement.remove();
};


