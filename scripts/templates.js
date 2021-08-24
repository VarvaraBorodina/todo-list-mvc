// TEMPLATES====================================================>

function header(){
    let a = 6;
    let b = 8;
    return `
    <header id="header" class="header">
  <div class="header__content">
    <h1 class="header__title">Todo List</h1>
    <div class="header__counter">
      <p id="copmleted-counter">${4}</p>
      <p>/</p>
      <p id='counter'>${5}</p>
    </div>
  </div>
  <svg class="header__line" height="45px">
  <line x1="15" y1="25" x2="96%" y2="25" stroke="white" opacity="0.5" stroke-linecap="round" stroke-width="15"/>
  <line x1="15" y1="25" x2="${a/b*100}%" y2="25" stroke-linecap="round" stroke="white" stroke-width="15"/>
 </svg>
  <div class="header__buttons">
    <button id="add-todo" class='header__button'>Add</button>
    <button id="delete-last-todo" class='header__button'>Delete last</button>
    <button id="delete-all-todos" class='header__button'>Delete all</button>
  </div>
</header>
    `
}

function modal() {
    return `<div class="fixed z-10 inset-0 overflow-y-auto hidden" id="modal">
    <div class="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"><span class="hidden sm:inline-block sm:align-middle sm:h-screen"> </span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10 modal__mark">
                <svg class="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#50c9e4" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-2 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900">Create new item</h3>
                <div class="mt-2">
                  <div class="mt-7 modal__inputs">
                    <input type="text" id="inputTitle" placeholder="Enetr title" class="modal__input">
                    <input type="text" id="inputTime" placeholder="Enter time" class="modal__input">
                    <input type="text" id="inputText" placeholder="Enter text" class="modal__input">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button class="w-full inline-flex justify-center rounded-2xl border border-transparent shadow-sm px-7 py-2 text-base font-medium text-white  sm:ml-3 sm:w-auto sm:text-sm modal__okbutton" id="okButton">Add</button>
            <button class="mt-3 w-full inline-flex justify-center rounded-2xl modal__cancelbutton shadow-sm px-4 py-2 bg-white text-base font-medium text-white  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" id="cancelButton">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>`
}

function todoList(){
    return `
        <div id="todo-list" class="todo-list"></div>
    `
}


function card() {
  return `
  <div class="card">
  <div class="card__mark"> </div>
  <div class="card__content">
  <label class="label">
           <input type="checkbox" class="card__checkbox">
           <div class="checkbox__text"></div>
        </label>
  <h2 class="card__header"> Sleep </h2>
    <p class="card__time"> 12:00 </p>
    <p class="card__text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt dicta expedita nulla unde natus ab </p>
    <button class="card__button"> Delete
   </button>
    </div>
  </div>
  `
}



export {header, todoList, modal, card}