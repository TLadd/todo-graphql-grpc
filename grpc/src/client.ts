import grpc from "grpc";
import { TodoManagerClient } from "./todo_grpc_pb";

export const createClient = () => {
  return new TodoManagerClient(
    "0.0.0.0:50051",
    grpc.credentials.createInsecure()
  );
};
