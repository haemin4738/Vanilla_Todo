function Header({ $target }) {
  const $header = document.createElement("h1");
  //$header.innerText = "오늘 할 일";
  $target.appendChild($header);

  this.state = "오늘 할 일";

  // const [{text, setText}] = useState() -> text -> state, setText -> setState

  this.setState = (nextState) => {
    console.log(nextState);
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $header.textContent = this.state;
  };

  this.render();
}

export default Header;
