function TodoList({ $target, intialState }) {
  const $list = document.createElement("div");
  $target.appendChild($list);

  this.state = intialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.state = intialState;

    this.setState = (nextState) => {
      this.state = nextState;
      this.render();
    };

    this.render = () => {
      $list.innerHTML = `
        <ul>
            ${this.state.map((item) => `<li>${item}</li>`).join("")}
        </ul>
    `;
    };

    this.render();
  };

  this.render();
}

export default TodoList;
