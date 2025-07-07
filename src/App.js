import Header from "./components/Header.js";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

function App({ $target }) {
  const $div = document.createElement("div");
  $target.appendChild($div);

  const header = new Header({ $target: $div });
  header.setState("!!오늘 할일!!");

  new TodoForm({ $target: $div });

  const intialState = ["할일1", "할일2", "할일3"];
  const list = new TodoList({ $target: $div, intialState });
  list.setState([...intialState, "할일4"]);
}

export default App;
