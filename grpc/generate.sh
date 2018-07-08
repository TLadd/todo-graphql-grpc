#!/bin/sh

PROTOC_PLUGIN="node_modules/.bin/grpc_tools_node_protoc_plugin"
OUT_DIR="."

./node_modules/.bin/grpc_tools_node_protoc \
  --js_out="import_style=commonjs,binary:${OUT_DIR}" \
  --grpc_out="${OUT_DIR}" \
  --plugin="protoc-gen-grpc=${PROTOC_PLUGIN}" \
  src/todo.proto

protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out="${OUT_DIR}" \
  src/todo.proto