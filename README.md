// We get STORE as a array object

function generateItemElement(item, itemIndex, template) {
	1. takes STORE as an input
	2. dynamically change item.name and item.checked in the static li element
	3. also keeps track of the order of the item in array
}

function generateShoppingItemsString(shoppingList) {
	1. map through array and join the objects obtained from generateItemElement()
}

renderShoppingList(){
	1. creates shopping items in string from generateShoppingItemsString() using STORE array
	2. render the above string to `html` and add the html element to the shopping list class	
}

handleNewItemSubmit(){
	1. on submit, get value from text input as object
	2. and append to addNewItem()
}

handleItemCheckClicked(){
	1. checks if any item in the shopping list if checked or not
}

handleDeleteItemClicked(){
	1. event handler to perform deletion if the item is clicked
	2. deleteItem();
}

function deleteItem(itemIndex){
	1. remove the item that corresponding to the delete button
	STORE.remove(itemIndex)
}

function addNewItem(newItem){
	STORE.push({name: newItem, checked: false});	
}

function editItem(itemIndex, newItem){
	
}