import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import {
  GetTodosRequest,
  CreateTodoRequest,
  DeleteTodoRequest
} from "../../grpc/src/todo_pb";
import { createClient } from "../../grpc/src/client";
import {
  Todo,
  CreateTodoMutationArgs,
  CreateTodoPayload,
  DeleteTodoPayload,
  DeleteTodoMutationArgs
} from "./types";

const todoClient = createClient();

const typeDefs = gql`
  type Query {
    todos: [Todo!]
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): CreateTodoPayload
    deleteTodo(input: DeleteTodoInput!): DeleteTodoPayload
  }

  type Todo {
    id: String!
    title: String
  }

  input CreateTodoInput {
    title: String!
  }

  type CreateTodoPayload {
    todo: Todo
  }

  input DeleteTodoInput {
    id: ID!
  }

  type DeleteTodoPayload {
    success: Boolean
  }
`;

const resolvers: any = {
  Query: {
    todos: (): Promise<Array<Todo>> => {
      const request = new GetTodosRequest();
      return new Promise((resolve, reject) => {
        todoClient.getTodos(request, (error, response) => {
          if (error) {
            reject(error);
          }
          return resolve(response.toObject().resultsList);
        });
      });
    }
  },
  Mutation: {
    createTodo: (
      _obj: object,
      args: CreateTodoMutationArgs
    ): Promise<CreateTodoPayload> => {
      const request = new CreateTodoRequest();
      request.setTitle(args.input.title);
      return new Promise((resolve, reject) => {
        todoClient.createTodo(request, (error, response) => {
          if (error) {
            reject(error);
          }
          return resolve(response.toObject());
        });
      });
    },

    deleteTodo: (
      _obj: object,
      args: DeleteTodoMutationArgs
    ): Promise<DeleteTodoPayload> => {
      const request = new DeleteTodoRequest();
      request.setTodoId(args.input.id);
      return new Promise((resolve, reject) => {
        todoClient.deleteTodo(request, (error, response) => {
          if (error) {
            reject(error);
          }
          return resolve(response.toObject());
        });
      });
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
