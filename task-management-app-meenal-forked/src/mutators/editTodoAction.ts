import { mutatorAction } from "satcheljs";
import getStore from "../store/store";

const editTodo = mutatorAction("EDIT_TODO", function editTodo(text: string) {
  let jsonData = JSON.parse(JSON.stringify(text));
  const dataId = getStore().todos.find((a) => a.id === jsonData.id);
  dataId.title = jsonData.title;
  dataId.priority = jsonData.priority;
  dataId.date = jsonData.date;
  dataId.progress = jsonData.progress;
});

export default editTodo;
