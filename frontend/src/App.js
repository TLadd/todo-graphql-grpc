// @flow

import React, { Component } from "react";

const TodoItem = ({ onDestroy, todo }) => {
  return (
    <li>
      <div className="view">
        <label>{todo.title}</label>
        <button className="destroy" onClick={onDestroy} />
      </div>
    </li>
  );
};

type AppState = {
  newTodo: string
};

class App extends Component<{}, AppState> {
  state = {
    newTodo: ""
  };

  render() {
    const todosYo = [
      { id: 1, title: "Title 1" },
      { id: 2, title: "Title 2" },
      { id: 3, title: "Title 3" }
    ];
    let main = todosYo.length ? (
      <section className="main">
        <ul className="todo-list">
          {todosYo.map(todo => (
            <TodoItem key={todo.id} onDestroy={() => {}} todo={todo} />
          ))}
        </ul>
      </section>
    ) : null;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={this.state.newTodo}
            onKeyDown={e => {
              if (e.keyCode !== 13) {
                return;
              }
              e.preventDefault();

              var val = this.state.newTodo.trim();

              if (val) {
                this.setState({ newTodo: "" });
              }
            }}
            onChange={e => this.setState({ newTodo: e.target.value })}
            autoFocus={true}
          />
        </header>
        {main}
      </section>
    );
  }
}

export default App;
