import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

function App({ $target }) {
  const $div = document.createElement("div");
  $target.appendChild($div);
  console.log($target);

  new TodoForm({ $target: $div });
  new TodoList({ $target: $div });
}
export default App;
