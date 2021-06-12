/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as article_pb from './article_pb';
import * as common_pb from './common_pb';


export class ArticleServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetList = new grpcWeb.AbstractClientBase.MethodInfo(
    article_pb.ArticleList,
    (request: common_pb.none) => {
      return request.serializeBinary();
    },
    article_pb.ArticleList.deserializeBinary
  );

  getList(
    request: common_pb.none,
    metadata: grpcWeb.Metadata | null): Promise<article_pb.ArticleList>;

  getList(
    request: common_pb.none,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: article_pb.ArticleList) => void): grpcWeb.ClientReadableStream<article_pb.ArticleList>;

  getList(
    request: common_pb.none,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: article_pb.ArticleList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ArticleService/GetList',
        request,
        metadata || {},
        this.methodInfoGetList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ArticleService/GetList',
    request,
    metadata || {},
    this.methodInfoGetList);
  }

}

