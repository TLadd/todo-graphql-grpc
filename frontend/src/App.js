// @flow

import React, { Component } from "react";
import {
  GetTodosQuery,
  CreateTodoMutation,
  DeleteTodoMutation
} from "./ApolloComps";
import { GetTodos } from "./queries.graphql";
import type { GetTodos_todos } from "./types";

const TodoItem = ({ onDelete, todo }) => {
  return (
    <li>
      <div className="view">
        <label>{todo.title}</label>
        <button className="destroy" onClick={onDelete} />
      </div>
    </li>
  );
};

const TodosList = ({ onDelete, todos }) => {
  return (
    <section className="main">
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            onDelete={() => onDelete(todo.id)}
            todo={todo}
          />
        ))}
      </ul>
    </section>
  );
};

type AppProps = {
  onCreate: (title: string) => mixed,
  onDelete: (id: string) => mixed,
  todos: Array<GetTodos_todos>
};
type AppState = {
  newTodo: string
};

class App extends Component<AppProps, AppState> {
  state = {
    newTodo: ""
  };

  render() {
    const { onCreate, onDelete, todos } = this.props;

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
                onCreate(val);
                this.setState({ newTodo: "" });
              }
            }}
            onChange={(e: SyntheticInputEvent<>) =>
              this.setState({ newTodo: e.target.value })
            }
            autoFocus={true}
          />
        </header>
        {todos.length ? <TodosList onDelete={onDelete} todos={todos} /> : null}
      </section>
    );
  }
}

const ApolloApp = () => {
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

                return (
                  <App
                    onCreate={(title: string) =>
                      createTodo({
                        variables: {
                          input: {
                            title
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
                      })
                    }
                    onDelete={(id: string) =>
                      deleteTodo({
                        variables: {
                          input: {
                            id
                          }
                        },
                        update: (cache, response) => {
                          cache.writeQuery({
                            query: GetTodos,
                            data: {
                              todos: todos.filter(item => item.id !== id)
                            }
                          });
                        }
                      })
                    }
                    todos={todos}
                  />
                );
              }}
            </CreateTodoMutation>
          )}
        </DeleteTodoMutation>
      )}
    </GetTodosQuery>
  );
};

export default ApolloApp;
