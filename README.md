 We get STORE as a array object

const STORE = [
  {name: 'apples', checked: false},
  {name: 'oranges', checked: false},
  {name: 'milk', checked: true},
  {name: 'bread', checked: false}
];

function generateItemElement(item, itemIndex, template) {
	1. takes STORE as an input
	2. dynamically change item.name and item.checked in the static li element
	3. also keeps track of the order of the item in array
}

function generateEditItemElement(itemValue){
  return `
    <form id="js-shopping-list-form">
      <label for="shopping-list-entry">Edit this item</label>
      <input type="text" value = ${itemValue} name="shopping-list-entry" class="js-shopping-list-entry" placeholder="${itemValue}">
      <button type="submit" class = shopping-item-save js-item-save">Save item</button>
    </form>`
}

function generateShoppingItemsString(shoppingList) {
	1. map through array and join the objects obtained from generateItemElement()
	const items = shoppingList.map((item, index) => generateItemElement(item, index));
  	return items.join("");
}

function generateOriginalForm(){
	1. create form original element 
	2. replaces edited form element using html() method after the item is selected, edited, saved
}


renderShoppingList(){
	1. creates shopping items in string from generateShoppingItemsString() using STORE array
	2. render the above string to `html` and add the html element to the shopping list class	
}


function addNewItem(newItem){
  1. add new item to the array
  STORE.push({name: newItem, checked: false});  
}


function handleItemCheckClicked(){
   1. checks if any item in the shopping list if checked or not
  console.log('`handleItemCheckClicked` ran');
  $('.shopping-list').on('click', '.shopping-item-toggle', function(e){
    e.preventDefault();

    $(e.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
})};

function deleteItem(itemIndex){
   1. remove the item that corresponding to the delete button
  STORE.splice(itemIndex, 1);
}

handleDeleteItemClicked(){
	1. event handler to perform deletion if the item is clicked
	2. deleteItem();
}

function showSelectedStoreValue(itemIndex){
   1. show selected value in the text input form
  return STORE[itemIndex].name;
}

function saveEditedItem(itemIndex, newItem){
   1. save newItem to the STORE
  return STORE[itemIndex].name = newItem;
}

function handleEditItem(itemIndex, newItem){
   1. allows to edit item from STORE
   2. get new item from text input
    renderShoppingList();
  })
};

handleNewItemSubmit(){
	1. on submit, get value from text input as object
	2. and append to addNewItem()
}

function handleShoppingList(){
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
  handleEditItem();
  handleSaveItemSubmit();
}

$(handleShoppingList);