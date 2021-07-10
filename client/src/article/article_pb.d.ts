import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Article extends jspb.Message {
  getId(): string;
  setId(value: string): Article;

  getTitle(): string;
  setTitle(value: string): Article;

  getContents(): string;
  setContents(value: string): Article;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Article;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Article;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Article;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Article;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Article.AsObject;
  static toObject(includeInstance: boolean, msg: Article): Article.AsObject;
  static serializeBinaryToWriter(message: Article, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Article;
  static deserializeBinaryFromReader(message: Article, reader: jspb.BinaryReader): Article;
}

export namespace Article {
  export type AsObject = {
    id: string,
    title: string,
    contents: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ArticleList extends jspb.Message {
  getArticleList(): Array<Article>;
  setArticleList(value: Array<Article>): ArticleList;
  clearArticleList(): ArticleList;
  addArticle(value?: Article, index?: number): Article;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArticleList.AsObject;
  static toObject(includeInstance: boolean, msg: ArticleList): ArticleList.AsObject;
  static serializeBinaryToWriter(message: ArticleList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArticleList;
  static deserializeBinaryFromReader(message: ArticleList, reader: jspb.BinaryReader): ArticleList;
}

export namespace ArticleList {
  export type AsObject = {
    articleList: Array<Article.AsObject>,
  }
}

