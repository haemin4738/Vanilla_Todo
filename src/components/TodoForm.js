function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement("form");
  $form.innerText = "할일 등록 폼";
  $target.appendChild($form);

  this.state;

  this.setState = () => {};

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    const $input = $form.querySelector("input");
    const text = $input.value;

    if (text.length > 0) {
      onSubmit(text);
    }
  });

  this.render = () => {
    $form.innerHTML = `
        <input type="text" />
        <button>등록</button>
    `;
  };

  this.render();
}

export default TodoForm;
