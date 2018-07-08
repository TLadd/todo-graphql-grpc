

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTodos
// ====================================================

export type GetTodos_todos = {
  id: string,
  title: ?string,
};

export type GetTodos = {
  todos: ?Array<GetTodos_todos>
};


/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTodo
// ====================================================

export type CreateTodo_createTodo_todo = {
  id: string,
  title: ?string,
};

export type CreateTodo_createTodo = {
  todo: ?CreateTodo_createTodo_todo
};

export type CreateTodo = {
  createTodo: ?CreateTodo_createTodo
};

export type CreateTodoVariables = {
  input: CreateTodoInput
};


/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteTodo
// ====================================================

export type DeleteTodo_deleteTodo = {
  success: ?boolean
};

export type DeleteTodo = {
  deleteTodo: ?DeleteTodo_deleteTodo
};

export type DeleteTodoVariables = {
  input: DeleteTodoInput
};

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export type CreateTodoInput = {|
  title: string
|};

export type DeleteTodoInput = {|
  id: string
|};

//==============================================================
// END Enums and Input Objects
//==============================================================