function TodoForm({ $target }) {
  const $form = document.createElement("form");
  $form.innerText = "할일 등록 폼";
  $form.innerHTML = "<input /><button>등록</button>";
  $target.appendChild($form);
}

export default TodoForm;
