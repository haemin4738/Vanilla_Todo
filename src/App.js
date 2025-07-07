import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";
import Header from "./components/Header.js";

function App({ $target }) {
  const $div = document.createElement("div");
  $target.appendChild($div);
  console.log($target);

  const header = new Header({ $target: $div });
  new TodoForm({ $target: $div });
  new TodoList({ $target: $div });
}
export default App;
