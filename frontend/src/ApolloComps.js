/* DO NOT EDIT Generated using apollo-flow-components */
// @flow
import * as React from "react";
import { Query, Mutation } from "react-apollo";
import { GetTodos, CreateTodo, DeleteTodo } from "./queries.graphql";
import type {
  GetTodos as GetTodosType,
  CreateTodo as CreateTodoType,
  CreateTodoVariables,
  DeleteTodo as DeleteTodoType,
  DeleteTodoVariables
} from "types";

class GetTodosQueryClass extends Query<GetTodosType, {}> {}
class CreateTodoMutationClass extends Mutation<
  CreateTodoType,
  CreateTodoVariables
> {}
class DeleteTodoMutationClass extends Mutation<
  DeleteTodoType,
  DeleteTodoVariables
> {}

export const GetTodosQuery = (
  props: $Diff<React.ElementConfig<typeof GetTodosQueryClass>, { query: any }>
) => <GetTodosQueryClass query={GetTodos} {...props} />;
export const CreateTodoMutation = (
  props: $Diff<
    React.ElementConfig<typeof CreateTodoMutationClass>,
    { mutation: any }
  >
) => <CreateTodoMutationClass mutation={CreateTodo} {...props} />;
export const DeleteTodoMutation = (
  props: $Diff<
    React.ElementConfig<typeof DeleteTodoMutationClass>,
    { mutation: any }
  >
) => <DeleteTodoMutationClass mutation={DeleteTodo} {...props} />;
