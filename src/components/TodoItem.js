function TodoItem({ $target, todo, onToggle, onDelete }) {
  const $li = document.createElement("li");
  $target.appendChild($li);

  $li.addEventListener("click", (e) => {
    if (e.target.classList.contains("del_btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      onDelete(id);
    } else if (e.target.classList.contains("toggle_btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      onToggle(id);
    }
  });

  this.render = () => {
    $li.style.textDecoration = todo.checked ? "line-through" : "none";
    $li.innerHTML = `
        <input 
            type="checkbox"
            ${todo.checked ? "checked" : ""}
            data-id="${todo.id}" 
            class="toggle_btn"
        />
        ${todo.id} / 
        <span>${todo.text}</span>
        <button 
            data-id="${todo.id}" 
            class="del_btn"
        >
        X
        </button>
    `;
  };

  this.render();
}

export default TodoItem;
