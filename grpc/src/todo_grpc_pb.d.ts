// package: 
// file: src/todo.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as src_todo_pb from "../src/todo_pb";

interface ITodoManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTodo: ITodoManagerService_ICreateTodo;
    getTodos: ITodoManagerService_IGetTodos;
    deleteTodo: ITodoManagerService_IDeleteTodo;
}

interface ITodoManagerService_ICreateTodo extends grpc.MethodDefinition<src_todo_pb.CreateTodoRequest, src_todo_pb.CreateTodoResponse> {
    path: string; // "/.TodoManager/CreateTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_todo_pb.CreateTodoRequest>;
    requestDeserialize: grpc.deserialize<src_todo_pb.CreateTodoRequest>;
    responseSerialize: grpc.serialize<src_todo_pb.CreateTodoResponse>;
    responseDeserialize: grpc.deserialize<src_todo_pb.CreateTodoResponse>;
}
interface ITodoManagerService_IGetTodos extends grpc.MethodDefinition<src_todo_pb.GetTodosRequest, src_todo_pb.GetTodosResponse> {
    path: string; // "/.TodoManager/GetTodos"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_todo_pb.GetTodosRequest>;
    requestDeserialize: grpc.deserialize<src_todo_pb.GetTodosRequest>;
    responseSerialize: grpc.serialize<src_todo_pb.GetTodosResponse>;
    responseDeserialize: grpc.deserialize<src_todo_pb.GetTodosResponse>;
}
interface ITodoManagerService_IDeleteTodo extends grpc.MethodDefinition<src_todo_pb.DeleteTodoRequest, src_todo_pb.DeleteTodoResponse> {
    path: string; // "/.TodoManager/DeleteTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_todo_pb.DeleteTodoRequest>;
    requestDeserialize: grpc.deserialize<src_todo_pb.DeleteTodoRequest>;
    responseSerialize: grpc.serialize<src_todo_pb.DeleteTodoResponse>;
    responseDeserialize: grpc.deserialize<src_todo_pb.DeleteTodoResponse>;
}

export const TodoManagerService: ITodoManagerService;

export interface ITodoManagerServer {
    createTodo: grpc.handleUnaryCall<src_todo_pb.CreateTodoRequest, src_todo_pb.CreateTodoResponse>;
    getTodos: grpc.handleUnaryCall<src_todo_pb.GetTodosRequest, src_todo_pb.GetTodosResponse>;
    deleteTodo: grpc.handleUnaryCall<src_todo_pb.DeleteTodoRequest, src_todo_pb.DeleteTodoResponse>;
}

export interface ITodoManagerClient {
    createTodo(request: src_todo_pb.CreateTodoRequest, callback: (error: Error | null, response: src_todo_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    createTodo(request: src_todo_pb.CreateTodoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: src_todo_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    createTodo(request: src_todo_pb.CreateTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: src_todo_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    getTodos(request: src_todo_pb.GetTodosRequest, callback: (error: Error | null, response: src_todo_pb.GetTodosResponse) => void): grpc.ClientUnaryCall;
    getTodos(request: src_todo_pb.GetTodosRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: src_todo_pb.GetTodosResponse) => void): grpc.ClientUnaryCall;
    getTodos(request: src_todo_pb.GetTodosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: src_todo_pb.GetTodosResponse) => void): grpc.ClientUnaryCall;
    deleteTodo(request: src_todo_pb.DeleteTodoRequest, callback: (error: Error | null, response: src_todo_pb.DeleteTodoResponse) => void): grpc.ClientUnaryCall;
    deleteTodo(request: src_todo_pb.DeleteTodoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: src_todo_pb.DeleteTodoResponse) => void): grpc.ClientUnaryCall;
    deleteTodo(request: src_todo_pb.DeleteTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: src_todo_pb.DeleteTodoResponse) => void): grpc.ClientUnaryCall;
}

export class TodoManagerClient extends grpc.Client implements ITodoManagerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createTodo(request: src_todo_pb.CreateTodoRequest, callback: (error: Error | null, response: src_todo_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    public createTodo(request: src_todo_pb.CreateTodoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: src_todo_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    public createTodo(request: src_todo_pb.CreateTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: src_todo_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    public getTodos(request: src_todo_pb.GetTodosRequest, callback: (error: Error | null, response: src_todo_pb.GetTodosResponse) => void): grpc.ClientUnaryCall;
    public getTodos(request: src_todo_pb.GetTodosRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: src_todo_pb.GetTodosResponse) => void): grpc.ClientUnaryCall;
    public getTodos(request: src_todo_pb.GetTodosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: src_todo_pb.GetTodosResponse) => void): grpc.ClientUnaryCall;
    public deleteTodo(request: src_todo_pb.DeleteTodoRequest, callback: (error: Error | null, response: src_todo_pb.DeleteTodoResponse) => void): grpc.ClientUnaryCall;
    public deleteTodo(request: src_todo_pb.DeleteTodoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: src_todo_pb.DeleteTodoResponse) => void): grpc.ClientUnaryCall;
    public deleteTodo(request: src_todo_pb.DeleteTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: src_todo_pb.DeleteTodoResponse) => void): grpc.ClientUnaryCall;
}
