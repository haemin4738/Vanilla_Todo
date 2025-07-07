import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";
import Header from "./components/Header.js";

function App({ $target }) {
  const $div = document.createElement("div");
  $target.appendChild($div);
  console.log($target);

  const header = new Header({ $target: $div });
  //header.setState("오늘 할 일!!");
  new TodoForm({ $target: $div });
  new TodoList({ $target: $div });
}
export default App;
