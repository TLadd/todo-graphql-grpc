

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTodos
// ====================================================

export interface GetTodos_todos {
  id: string;
  title: string | null;
}

export interface GetTodos {
  todos: GetTodos_todos[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTodo
// ====================================================

export interface CreateTodo_createTodo_todo {
  id: string;
  title: string | null;
}

export interface CreateTodo_createTodo {
  todo: CreateTodo_createTodo_todo | null;
}

export interface CreateTodo {
  createTodo: CreateTodo_createTodo | null;
}

export interface CreateTodoVariables {
  input: CreateTodoInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteTodo
// ====================================================

export interface DeleteTodo_deleteTodo {
  success: boolean | null;
}

export interface DeleteTodo {
  deleteTodo: DeleteTodo_deleteTodo | null;
}

export interface DeleteTodoVariables {
  input: DeleteTodoInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * 
 */
export interface CreateTodoInput {
  title: string;
}

/**
 * 
 */
export interface DeleteTodoInput {
  id: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================