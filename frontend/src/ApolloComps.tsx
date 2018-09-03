/* Generated using apollo-typed-components */
import * as React from "react";
import { Query, Mutation } from "react-apollo";
import {
  GetTodos,
  CreateTodo,
  DeleteTodo
} from "./queries.graphql"
import {
  GetTodos as GetTodosType,
  CreateTodo as CreateTodoType,
  CreateTodoVariables,
  DeleteTodo as DeleteTodoType,
  DeleteTodoVariables
} from "types";

type GetComponentProps<T> = T extends React.Component<infer P> ? P : never;
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

class GetTodosQueryClass extends Query<GetTodosType, {}> {};
class CreateTodoMutationClass extends Mutation<CreateTodoType, CreateTodoVariables> {};
class DeleteTodoMutationClass extends Mutation<DeleteTodoType, DeleteTodoVariables> {};

export const GetTodosQuery = (props: Omit<GetComponentProps<GetTodosQueryClass>, "query">) => <GetTodosQueryClass query={GetTodos} {...props} />;
export const CreateTodoMutation = (props: Omit<GetComponentProps<CreateTodoMutationClass>, "mutation">) => <CreateTodoMutationClass mutation={CreateTodo} {...props} />;
export const DeleteTodoMutation = (props: Omit<GetComponentProps<DeleteTodoMutationClass>, "mutation">) => <DeleteTodoMutationClass mutation={DeleteTodo} {...props} />;