// CONTROLLER====================================================>

import { model } from "./model.js";
import { view } from "./view.js";


export const controller = {
    deleteTodo: function(i){
      (model.todos).splice(i, 1);
      model.setLocalStorage();
      view.render();
    },
    completeTodo: function(i){
        if(model.todos[i].isDone) {
            model.todos[i].isDone = false;
        } else {
            model.todos[i].isDone = true;
        }
        model.setLocalStorage();
        view.render();
    },
    addTodo: function(modal){
            let todo = {};
            const inputText = document.getElementById("inputText");
            const inputTitle = document.getElementById("inputTitle");

            let today = new Date;

            todo.title = inputTitle.value;
            todo.text = inputText.value;

            inputText.value = '';
            inputTitle.value = '';

            todo.time = String(today.getHours()).padStart(2, '0') + ':' +  String(today.getMinutes()).padStart(2, '0');
            todo.isDone = false;

            (model.todos).push(todo);
            model.setLocalStorage();
            view.closeModal(modal);
            view.render();   
    },

    cancelAddTodo: function(modal){
        inputText.value = '';
        inputTitle.value = '';
        view.closeModal(modal);
    },

    deleteAllTodos: function(){
            model.todos = [];
            model.setLocalStorage();
            view.render();
    },
    deleteLastTodo: function(){
        if(model.todos.length!=0) {
            model.todos.shift();
            model.setLocalStorage();
        }
        view.render();
    }
}
