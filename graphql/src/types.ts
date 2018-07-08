/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

type Resolver<Result, Args = any> = (
  parent: any,
  args: Args,
  context: any,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

/** The `Upload` scalar type represents a file upload promise that resolves an object containing `stream`, `filename`, `mimetype` and `encoding`. */
export type Upload = any;

export interface Query {
  todos?: Todo[] | null;
}

export interface Todo {
  id: string;
  title?: string | null;
}

export interface Mutation {
  createTodo?: CreateTodoPayload | null;
  deleteTodo?: DeleteTodoPayload | null;
}

export interface CreateTodoPayload {
  todo?: Todo | null;
}

export interface DeleteTodoPayload {
  success?: boolean | null;
}

export namespace QueryResolvers {
  export interface Resolvers {
    todos?: TodosResolver;
  }

  export type TodosResolver = Resolver<Todo[] | null>;
}

export namespace TodoResolvers {
  export interface Resolvers {
    id?: IdResolver;
    title?: TitleResolver;
  }

  export type IdResolver = Resolver<string>;
  export type TitleResolver = Resolver<string | null>;
}

export namespace MutationResolvers {
  export interface Resolvers {
    createTodo?: CreateTodoResolver;
    deleteTodo?: DeleteTodoResolver;
  }

  export type CreateTodoResolver = Resolver<
    CreateTodoPayload | null,
    CreateTodoArgs
  >;
  export interface CreateTodoArgs {
    input: CreateTodoInput;
  }

  export type DeleteTodoResolver = Resolver<
    DeleteTodoPayload | null,
    DeleteTodoArgs
  >;
  export interface DeleteTodoArgs {
    input: DeleteTodoInput;
  }
}

export namespace CreateTodoPayloadResolvers {
  export interface Resolvers {
    todo?: TodoResolver;
  }

  export type TodoResolver = Resolver<Todo | null>;
}

export namespace DeleteTodoPayloadResolvers {
  export interface Resolvers {
    success?: SuccessResolver;
  }

  export type SuccessResolver = Resolver<boolean | null>;
}

export interface CreateTodoInput {
  title: string;
}

export interface DeleteTodoInput {
  id: string;
}
export interface CreateTodoMutationArgs {
  input: CreateTodoInput;
}
export interface DeleteTodoMutationArgs {
  input: DeleteTodoInput;
}
