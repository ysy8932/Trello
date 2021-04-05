//when add another card click, show on input text and save button

let anotherCard = document.querySelector('.items__add');
let cardform = document.querySelector('.addCardform');

anotherCard.addEventListener('click', () => {  
    if(cardform.style.display == 'none')
    cardform.style.display = 'inline';
    else
    cardform.style.display = 'none';
});


//when click add button after toggle in Add another card, make Todolist
let addCardButton = document.getElementById('todoList_addBtn');
let itemsContent = document.getElementById('items__content');
let todoInput = document.getElementById("todoInput");

addCardButton.addEventListener('click', () => {
    addTodoList();
    todoInput.value = '';    
});

function addTodoList() {
    let todoText = document.getElementById("todoInput").value;
    let todoList_cardlist = document.getElementById("todoList_cardlist");
    let newTodoText=document.createElement('li');
    todoList_cardlist.appendChild(newTodoText);   
    newTodoText.innerHTML = todoText;
    newTodoText.innerHTML += '<span id="todoList_deleteBtn"onClick="onDeleteCard(this)"><i class="fas fa-trash-alt"></i></span>';  
};

//delete Todolist
function onDeleteCard(card) {
    if (confirm('Are you sure to delete this card ?')) {
        const cardlist = card.parentElement;
        cardlist.remove();
    }
}


//open and close modal and update list title
let titleUpdatebtn = document.querySelector(".title_updateBtn");
let closeModal = document.getElementById("closeModal");
let modal = document.querySelector(".modal__wrapper");
let modaltxt = document.getElementById("modaltxt");
let updateModal = document.getElementById("updateModal");
let listtitle = document.getElementById("todoList_title");


titleUpdatebtn.addEventListener("click",() => {
    openModal();
});

function openModal(){
    modal.style.display = "flex";  
}

updateModal.addEventListener("click",() => {  
    listtitle.innerText = modaltxt.value;
    modal.style.display = "none";
});
closeModal.addEventListener("click",() => {
    modal.style.display = "none";
});



//delete list card
function onDeleteList(list) {
    if (confirm('Are you sure to delete all of list ?')) {
        const listcard = list.parentElement.parentElement;
        listcard.remove();
    }
}


// create new add another list
var createListbtn = document.getElementById("list__addBtn");
createListbtn.addEventListener("click", function(){
    var box3 = document.querySelector(".box3");
  box3.insertAdjacentHTML("afterend", `<div class="box"><div class="items__title" id="todoList_title">New List</div>
  <div class="items__titleIcon">                            
      <span class="title_updateBtn"><i class="fas fa-edit"></i></span>
      <span class="title_deleteBtn"><i class="fas fa-trash-alt"></i></span>
  </div>
  <div class="items__content">
      <ul id="todoList_cardlist">              
      </ul>
  </div>
  <div class="addCard">                
      <span class="items__add"><i class="fas fa-plus-circle"></i> Add another card</span>
      <form class="addCardform" id="addCardform1" style="display: none;">
          <input type="text" id="todoInput" placeholder="Enter a title for this card..">
          <button class="addBtn" id="todoList_addBtn" type="button">ADD</button>
      </form>
  </div>
</div>`);
});







