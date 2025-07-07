import TodoItem from "./TodoItem.js";

function TodoList({ $target, intialState, onDelete, onToggle }) {
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
      $list.innerHTML = ``;
      const $ul = document.createElement("ul");
      this.state.forEach((todo) => {
        new TodoItem({ $target: $ul, todo, onDelete, onToggle });
      });
      $list.appendChild($ul);
    };

    this.render();
  };

  this.render();
}

export default TodoList;
