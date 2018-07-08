// @flow

import React, { Component } from "react";
import {
  GetTodosQuery,
  CreateTodoMutation,
  DeleteTodoMutation
} from "./ApolloComps";
import { GetTodos } from "./queries.graphql";

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
    return (
      <GetTodosQuery>
        {({ data }) => (
          <DeleteTodoMutation>
            {deleteTodo => (
              <CreateTodoMutation>
                {createTodo => {
                  if (!data || !data.todos) {
                    return null;
                  }

                  const todos = data.todos;
                  let main = todos.length ? (
                    <section className="main">
                      <ul className="todo-list">
                        {todos.map(todo => (
                          <TodoItem
                            key={todo.id}
                            onDestroy={() =>
                              deleteTodo({
                                variables: {
                                  input: {
                                    id: todo.id
                                  }
                                },
                                update: (cache, response) => {
                                  cache.writeQuery({
                                    query: GetTodos,
                                    data: {
                                      todos: todos.filter(
                                        item => item.id !== todo.id
                                      )
                                    }
                                  });
                                }
                              })
                            }
                            todo={todo}
                          />
                        ))}
                      </ul>
                    </section>
                  ) : null;

                  return (
                    <section className="todoapp">
                      <header className="header">
                        <h1>{"todos"}</h1>
                        <input
                          className="new-todo"
                          placeholder="What needs to be done?"
                          value={this.state.newTodo}
                          onKeyDown={(e: SyntheticKeyboardEvent<>) => {
                            if (e.keyCode !== 13) {
                              return;
                            }
                            e.preventDefault();

                            var val = this.state.newTodo.trim();

                            if (val) {
                              createTodo({
                                variables: {
                                  input: {
                                    title: val
                                  }
                                },
                                update: (cache, response) => {
                                  const createdTodo =
                                    response.data &&
                                    response.data.createTodo &&
                                    response.data.createTodo.todo;
                                  if (createdTodo) {
                                    cache.writeQuery({
                                      query: GetTodos,
                                      data: {
                                        todos: [...todos, createdTodo]
                                      }
                                    });
                                  }
                                }
                              });
                              this.setState({ newTodo: "" });
                            }
                          }}
                          onChange={(e: SyntheticInputEvent<>) =>
                            this.setState({ newTodo: e.target.value })
                          }
                          autoFocus={true}
                        />
                      </header>
                      {main}
                    </section>
                  );
                }}
              </CreateTodoMutation>
            )}
          </DeleteTodoMutation>
        )}
      </GetTodosQuery>
    );
  }
}

export default App;
