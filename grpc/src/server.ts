import { TodoManagerService } from "./todo_grpc_pb";
import {
  CreateTodoRequest,
  CreateTodoResponse,
  GetTodosRequest,
  GetTodosResponse,
  DeleteTodoRequest,
  DeleteTodoResponse,
  Todo
} from "./todo_pb";
import grpc, { ServerUnaryCall, sendUnaryData } from "grpc";

let id = 1;
let todos: Array<Todo> = [];

const createTodo = (
  call: ServerUnaryCall<CreateTodoRequest>,
  callback: sendUnaryData<CreateTodoResponse>
) => {
  const title = call.request.getTitle();
  const todo = new Todo();
  todo.setId(String(id++));
  todo.setTitle(title);
  todos = [...todos, todo];

  const response = new CreateTodoResponse();
  response.setTodo(todo);
  callback(null, response);
};

const getTodos = (
  call: ServerUnaryCall<GetTodosRequest>,
  callback: sendUnaryData<GetTodosResponse>
) => {
  const response = new GetTodosResponse();
  response.setResultsList(todos);

  callback(null, response);
};

const deleteTodo = (
  call: ServerUnaryCall<DeleteTodoRequest>,
  callback: sendUnaryData<DeleteTodoResponse>
) => {
  const id = call.request.getTodoId();
  todos = todos.filter(item => item.getId() !== id);
  const response = new DeleteTodoResponse();
  response.setSuccess(true);

  callback(null, response);
};

function main() {
  const server = new grpc.Server();
  server.addService(TodoManagerService, { createTodo, getTodos, deleteTodo });
  server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
