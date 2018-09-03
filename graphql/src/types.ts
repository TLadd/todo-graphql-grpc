/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export type SubscriptionResolver<
  Result,
  Parent = any,
  Context = any,
  Args = any
> = {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
};

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

export enum CacheControlScope {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE"
}

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    todos?: TodosResolver<Todo[] | null, any, Context>;
  }

  export type TodosResolver<
    R = Todo[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace TodoResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = any> {
    createTodo?: CreateTodoResolver<CreateTodoPayload | null, any, Context>;
    deleteTodo?: DeleteTodoResolver<DeleteTodoPayload | null, any, Context>;
  }

  export type CreateTodoResolver<
    R = CreateTodoPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreateTodoArgs>;
  export interface CreateTodoArgs {
    input: CreateTodoInput;
  }

  export type DeleteTodoResolver<
    R = DeleteTodoPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeleteTodoArgs>;
  export interface DeleteTodoArgs {
    input: DeleteTodoInput;
  }
}

export namespace CreateTodoPayloadResolvers {
  export interface Resolvers<Context = any> {
    todo?: TodoResolver<Todo | null, any, Context>;
  }

  export type TodoResolver<
    R = Todo | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace DeleteTodoPayloadResolvers {
  export interface Resolvers<Context = any> {
    success?: SuccessResolver<boolean | null, any, Context>;
  }

  export type SuccessResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
