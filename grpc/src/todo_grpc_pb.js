// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_todo_pb = require('../src/todo_pb.js');

function serialize_CreateTodoRequest(arg) {
  if (!(arg instanceof src_todo_pb.CreateTodoRequest)) {
    throw new Error('Expected argument of type CreateTodoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CreateTodoRequest(buffer_arg) {
  return src_todo_pb.CreateTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateTodoResponse(arg) {
  if (!(arg instanceof src_todo_pb.CreateTodoResponse)) {
    throw new Error('Expected argument of type CreateTodoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CreateTodoResponse(buffer_arg) {
  return src_todo_pb.CreateTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DeleteTodoRequest(arg) {
  if (!(arg instanceof src_todo_pb.DeleteTodoRequest)) {
    throw new Error('Expected argument of type DeleteTodoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_DeleteTodoRequest(buffer_arg) {
  return src_todo_pb.DeleteTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DeleteTodoResponse(arg) {
  if (!(arg instanceof src_todo_pb.DeleteTodoResponse)) {
    throw new Error('Expected argument of type DeleteTodoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_DeleteTodoResponse(buffer_arg) {
  return src_todo_pb.DeleteTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetTodosRequest(arg) {
  if (!(arg instanceof src_todo_pb.GetTodosRequest)) {
    throw new Error('Expected argument of type GetTodosRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_GetTodosRequest(buffer_arg) {
  return src_todo_pb.GetTodosRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetTodosResponse(arg) {
  if (!(arg instanceof src_todo_pb.GetTodosResponse)) {
    throw new Error('Expected argument of type GetTodosResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_GetTodosResponse(buffer_arg) {
  return src_todo_pb.GetTodosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodoManagerService = exports.TodoManagerService = {
  createTodo: {
    path: '/TodoManager/CreateTodo',
    requestStream: false,
    responseStream: false,
    requestType: src_todo_pb.CreateTodoRequest,
    responseType: src_todo_pb.CreateTodoResponse,
    requestSerialize: serialize_CreateTodoRequest,
    requestDeserialize: deserialize_CreateTodoRequest,
    responseSerialize: serialize_CreateTodoResponse,
    responseDeserialize: deserialize_CreateTodoResponse,
  },
  getTodos: {
    path: '/TodoManager/GetTodos',
    requestStream: false,
    responseStream: false,
    requestType: src_todo_pb.GetTodosRequest,
    responseType: src_todo_pb.GetTodosResponse,
    requestSerialize: serialize_GetTodosRequest,
    requestDeserialize: deserialize_GetTodosRequest,
    responseSerialize: serialize_GetTodosResponse,
    responseDeserialize: deserialize_GetTodosResponse,
  },
  deleteTodo: {
    path: '/TodoManager/DeleteTodo',
    requestStream: false,
    responseStream: false,
    requestType: src_todo_pb.DeleteTodoRequest,
    responseType: src_todo_pb.DeleteTodoResponse,
    requestSerialize: serialize_DeleteTodoRequest,
    requestDeserialize: deserialize_DeleteTodoRequest,
    responseSerialize: serialize_DeleteTodoResponse,
    responseDeserialize: deserialize_DeleteTodoResponse,
  },
};

exports.TodoManagerClient = grpc.makeGenericClientConstructor(TodoManagerService);
