// package: 
// file: src/todo.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class CreateTodoRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTodoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTodoRequest): CreateTodoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTodoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTodoRequest;
    static deserializeBinaryFromReader(message: CreateTodoRequest, reader: jspb.BinaryReader): CreateTodoRequest;
}

export namespace CreateTodoRequest {
    export type AsObject = {
        title: string,
    }
}

export class CreateTodoResponse extends jspb.Message { 

    hasTodo(): boolean;
    clearTodo(): void;
    getTodo(): Todo | undefined;
    setTodo(value?: Todo): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTodoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTodoResponse): CreateTodoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTodoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTodoResponse;
    static deserializeBinaryFromReader(message: CreateTodoResponse, reader: jspb.BinaryReader): CreateTodoResponse;
}

export namespace CreateTodoResponse {
    export type AsObject = {
        todo?: Todo.AsObject,
    }
}

export class GetTodosRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTodosRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTodosRequest): GetTodosRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTodosRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTodosRequest;
    static deserializeBinaryFromReader(message: GetTodosRequest, reader: jspb.BinaryReader): GetTodosRequest;
}

export namespace GetTodosRequest {
    export type AsObject = {
    }
}

export class GetTodosResponse extends jspb.Message { 
    clearResultsList(): void;
    getResultsList(): Array<Todo>;
    setResultsList(value: Array<Todo>): void;
    addResults(value?: Todo, index?: number): Todo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTodosResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTodosResponse): GetTodosResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTodosResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTodosResponse;
    static deserializeBinaryFromReader(message: GetTodosResponse, reader: jspb.BinaryReader): GetTodosResponse;
}

export namespace GetTodosResponse {
    export type AsObject = {
        resultsList: Array<Todo.AsObject>,
    }
}

export class DeleteTodoRequest extends jspb.Message { 
    getTodoId(): string;
    setTodoId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTodoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTodoRequest): DeleteTodoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTodoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTodoRequest;
    static deserializeBinaryFromReader(message: DeleteTodoRequest, reader: jspb.BinaryReader): DeleteTodoRequest;
}

export namespace DeleteTodoRequest {
    export type AsObject = {
        todoId: string,
    }
}

export class DeleteTodoResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTodoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTodoResponse): DeleteTodoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTodoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTodoResponse;
    static deserializeBinaryFromReader(message: DeleteTodoResponse, reader: jspb.BinaryReader): DeleteTodoResponse;
}

export namespace DeleteTodoResponse {
    export type AsObject = {
        success: boolean,
    }
}

export class Todo extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getTitle(): string;
    setTitle(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Todo.AsObject;
    static toObject(includeInstance: boolean, msg: Todo): Todo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Todo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Todo;
    static deserializeBinaryFromReader(message: Todo, reader: jspb.BinaryReader): Todo;
}

export namespace Todo {
    export type AsObject = {
        id: string,
        title: string,
    }
}
