import { mutatorAction } from "satcheljs";
import getStore from "../store/store";

const addTodo = mutatorAction("DELETE_TODO", function deleteTodo(
  idDelete: any
) {
  for (const todo of getStore().todos) {
    if (todo.id === idDelete) {
      const index = getStore().todos.indexOf(todo);
      getStore().todos.splice(index, 1);
    }
  }
});

export default addTodo;
