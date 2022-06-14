import { mutatorAction } from "satcheljs";
import getStore from "../store/store";

const addTodo = mutatorAction("ADD_TODO", function addTodo(text: string) {
  let jsonData = JSON.parse(JSON.stringify(text));
  getStore().todos.push({
    id: Math.random(),
    title: jsonData.title,
    priority: jsonData.priority,
    date: jsonData.date,
    progress: "Active"
  });
});

export default addTodo;
