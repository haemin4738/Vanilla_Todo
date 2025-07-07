function App({ $target }) {
  const $div = document.createElement("div");
  $target.appendChild($div);
  console.log($target);

  new TodoForm();
  new TodoList();
}
export default App;
