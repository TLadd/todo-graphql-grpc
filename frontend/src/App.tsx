// @flow

import React, { Component } from "react";
import { GetTodos } from "./queries.graphql";
import { GetTodos_todos } from "./types";
import {
  GetTodosQuery,
  CreateTodoMutation,
  DeleteTodoMutation
} from "./ApolloComps";

type TodosListProps = {
  onDelete: (id: string) => {};
  todos: Array<GetTodos_todos>;
};
const TodosList = ({ onDelete, todos }: TodosListProps) => {
  return (
    <section className="main">
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            <div className="view">
              <label>{todo.title}</label>
              <button className="destroy" onClick={() => onDelete(todo.id)} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

type AppProps = {
  onCreate: (title: string) => {};
  onDelete: (id: string) => {};
  todos: Array<GetTodos_todos>;
};
type AppState = {
  newTodo: string;
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
            onKeyDown={(e: React.KeyboardEvent) => {
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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
                        update: cache => {
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
