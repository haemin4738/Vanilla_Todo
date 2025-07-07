function TodoList({ $target }) {
  const $list = document.createElement("list");
  $list.innerHTML = "<ul><li>씻기</li><li>걷기</li><li>밥 먹기</li><ul>";
  $target.appendChild($list);
}

export default TodoList;
