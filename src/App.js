import Header from "./components/Header.js";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

function App({ $target }) {
  const intialState = [
    { id: 1, text: "item1", checked: true },
    { id: 2, text: "item2", checked: false },
    { id: 3, text: "item3", checked: false },
  ];
  let lastId = 4;

  const onSubmit = (text) => {
    const nextState = [...todoList.state, { id: lastId, text, checked: false }];
    todoList.setState(nextState);
    lastId++;
  };

  const onDelete = (id) => {
    const nextState = todoList.state.filter((todo) => todo.id !== id);
    todoList.setState(nextState);
  };

  const $page = document.createElement("div");
  $target.appendChild($page);

  const header = new Header({ $target: $page });
  header.setState("!!오늘 할일!!");

  new TodoForm({ $target: $page, onSubmit });

  const todoList = new TodoList({ $target: $page, intialState, onDelete });
}

export default App;
