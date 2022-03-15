import { Component } from "react";

export class ToDoList extends Component {
  state = {
    userInput: "",
    toDoList: [],
  };

  onChangeEvent = (e) => {
    this.setState({ userInput: e });
  };

  addItem(input) {
    if (input === "") {
      alert("Please, enter to add...");
    } else {
      let listArray = this.state.toDoList;
      listArray.push(input);
      this.setState({ toDoList: listArray, userInput: "" });
      console.log(listArray);
    }
  }

  crossedWord(event) {
    const li = event.target;
    li.classList.toggle("crossed");
  }

  deleteItem() {
    let listArray = this.state.toDoList;
    listArray = [];
    this.setState({ toDoList: listArray });
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <div className="header">
            <h1>To-Do list</h1>
          </div>

          <div className="input-field">
            <input
              type="text"
              placeholder="Enter..."
              onChange={(e) => {
                this.onChangeEvent(e.target.value);
              }}
              value={this.state.userInput}
            />
          </div>

          <div className="btn btn-add">
            <button onClick={() => this.addItem(this.state.userInput)}>
              Add
            </button>
          </div>

          <div className="list-box">
            <ul>
              {this.state.toDoList.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="btn btn-del">
            <button onClick={() => this.deleteItem()}>Clear list</button>
          </div>
        </form>
      </div>
    );
  }
}
