import { createStore } from "satcheljs";

let getStore = createStore("todoStore", {
  todos: []
});

export default getStore;
