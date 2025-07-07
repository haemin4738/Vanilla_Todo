import Header from "./components/Header.js";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";
import { getItem, setItem } from "./storage.js";

function App({ $target }) {
  const intialState = getItem("todos", [
    { id: 1, text: "할 일 1", checked: false },
    { id: 2, text: "할 일 2", checked: false },
    { id: 3, text: "할 일 3", checked: false },
  ]);
  let lastId = 4;

  const onSubmit = (text) => {
    const nextState = [...todoList.state, { id: lastId, text, checked: false }];
    todoList.setState(nextState);
    setItem("todos", JSON.stringify(nextState));
    lastId++;
  };

  const onDelete = (id) => {
    const nextState = todoList.state.filter((todo) => todo.id !== id);
    todoList.setState(nextState);
    setItem("todos", JSON.stringify(nextState));
  };

  const onToggle = (id) => {
    const nextState = todoList.state.map((todo) =>
      todo.id == id ? { ...todo, checked: !todo.checked } : todo
    );
    todoList.setState(nextState);
    setItem("todos", JSON.stringify(nextState));
  };

  const $page = document.createElement("div");
  $target.appendChild($page);

  const header = new Header({ $target: $page });
  header.setState("!!오늘 할일!!");

  new TodoForm({ $target: $page, onSubmit });

  const todoList = new TodoList({
    $target: $page,
    intialState,
    onDelete,
    onToggle,
  });
}

export default App;
