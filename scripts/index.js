import { model } from "./model.js";
import { controller } from "./controller.js";
import { modal, card, header, todoList } from "./templates.js"
import { view } from "./view.js";

// ROOT====================================================>
export const root = document.getElementById('root');

// APP====================================================>

function app(){
    model.getLocalStorage();
    view.printApp(root);
    view.render(root);
}

app();

