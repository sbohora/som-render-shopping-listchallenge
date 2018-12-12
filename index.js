'use strict';

const STORE = [
  {name: 'apples', checked: false},
  {name: 'oranges', checked: false},
  {name: 'milk', checked: true},
  {name: 'bread', checked: false}
];

function generateItemElement(item, itemIndex, template){
  return `
      <li class="js-item-index-element" data-item-index="${itemIndex}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
        <button class="shopping-item-edit js-item-edit">
            <span class="button-label">edit</span>
        </button>
      </div>
    </li>`;
};

function generateEditItemElement(itemValue){
  return `
    <form id="js-shopping-list-form">
      <label for="shopping-list-entry">Edit this item</label>
      <input type="text" value = ${itemValue} name="shopping-list-entry" class="js-shopping-list-entry" placeholder="${itemValue}">
    </form>`
}

function generateOriginalForm(){
  return `
    <form id="js-shopping-list-form">
      <label for="shopping-list-entry">Add an item</label>
      <input type="text" name="shopping-list-entry" class="js-shopping-list-entry" placeholder="e.g., broccoli">
      <button type="submit">Add item</button>
    </form>`
}


function generateSaveItemElement(item, itemIndex, template){
      return `
      <li class="js-item-index-element" data-item-index="${itemIndex}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
        <button class="shopping-item-save js-item-save">
            <span class="button-label">save</span>
        </button>
      </div>
    </li>`;
}


function generateShoppingItemString(shoppingList){
  console.log('Generating shopping list element.');

  const items = shoppingList.map((item, index) => generateItemElement(item, index));
  return items.join("");
};

function renderShoppingList(){
  console.log('`renderShoppingList` ran');
  const shoppingListItemString = generateShoppingItemString(STORE);

  $('.js-shopping-list').html(shoppingListItemString);
};

function renderEditedShoppingList(shoppingList){
  console.log('`renderShoppingList` ran');
  const items = shoppingList.map((item, index) => generateSaveItemElement(item, index));
  const itemsEdited = items.join("");

  $('.js-shopping-list').html(itemsEdited);
};

function addNewItem(newItem){
  //add new item to the array
  STORE.push({name: newItem, checked: false});  
}

function handleItemCheckClicked(){
  // 1. checks if any item in the shopping list if checked or not
  console.log('`handleItemCheckClicked` ran');
  $('.shopping-list').on('click', '.shopping-item-toggle', function(e){
    e.preventDefault();

    $(e.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
})};

function deleteItem(itemIndex){
  // 1. remove the item that corresponding to the delete button
  STORE.splice(itemIndex, 1);
}

function handleDeleteItemClicked(){
  // 1. event handler to perform deletion if the item is clicked
  //2. deleteItem();
  $('.shopping-list').on('click', '.shopping-item-delete', function(e){
    e.preventDefault();

    const value = $(e.target).closest('li').index();
    deleteItem(value);
    renderShoppingList();
  })
};

function showSelectedStoreValue(itemIndex){
  // 1. show selected value in the text input form
  return STORE[itemIndex].name;
}

function saveEditedItem(itemIndex, newItem){
  // 1. save newItem to the STORE
  return STORE[itemIndex].name = newItem;
}

function handleEditItem(itemIndex, newItem){
  // 1. allows to edit item from STORE
  $('.shopping-list').on('click', '.shopping-item-edit', function(e){
    e.preventDefault();

    const valueIndex = $(e.target).closest('li').index();
    const value = $(e.target).closest('li').val();
    $('.js-shopping-list-entry').val(showSelectedStoreValue(valueIndex));

    $('#js-shopping-list-form').html(generateEditItemElement(showSelectedStoreValue(valueIndex)));
    
    const newValue = $('.js-shopping-list-entry').val();

    $('.js-shopping-list').html(generateSaveItemElement(showSelectedStoreValue(valueIndex)));
    renderEditedShoppingList(STORE);
  })
};

function handleSaveEditedItem(itemIndex, newItem){
  // 1. allows to edit item from STORE
  $('.shopping-list').on('click', '.shopping-item-save', function(e){
    e.preventDefault();
    const valueIndex = $(e.target).closest('li').index();
    const value = $(e.target).closest('li').val();
    const newValue = $('.js-shopping-list-entry').val();

    saveEditedItem(valueIndex, newValue);
    renderEditedShoppingList(STORE);
    $('#js-shopping-list-form').html(generateOriginalForm());
    renderShoppingList();
  })
};


function handleNewItemSubmit(){
  $('#js-shopping-list-form').on('submit', function(e){
    e.preventDefault();

    const value = $('.js-shopping-list-entry').val();
    addNewItem(value);
    $('.js-shopping-list-entry').val('');
    renderShoppingList();
  })

    console.log('`handleNewItemSubmit` ran');
}

function handleShoppingList(){
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
  handleEditItem();
  handleSaveEditedItem();
}

$(handleShoppingList);