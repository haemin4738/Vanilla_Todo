function TodoList({ $target, intialState, onDelete, onToggle }) {
  const $list = document.createElement("div");
  $target.appendChild($list);

  this.state = intialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  $list.addEventListener("click", (e) => {
    if (e.target.classList.contains("del_btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      //delete 처리
      onDelete(id);
    } else if (e.target.classList.contains("toggle_btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      //수정 처리
      console.log(id);
      onToggle(id);
    }
  });

  this.render = () => {
    this.state = intialState;

    this.setState = (nextState) => {
      this.state = nextState;
      this.render();
    };

    this.render = () => {
      $list.innerHTML = `
        <ul>
            ${this.state
              .map(
                (item) => `
                <li style = "text-decoration : ${
                  item.checked ? "line-through" : "none"
                }">
                  <span>
                  <input type ="checkbox"  ${item.checked ? "checked" : ""} 
                  data-id = "${item.id} " class = "toggle_btn">
                    ${item.text}
                    <button data-id ="${item.id}" class = "del_btn">X</button>
                  </span>
                </li>`
              )
              .join("")}
        </ul>
    `;
    };

    this.render();
  };

  this.render();
}

export default TodoList;
