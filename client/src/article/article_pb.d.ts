import * as jspb from 'google-protobuf'

import * as common_pb from './common_pb';


export class Article extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): Article;

  getContents(): string;
  setContents(value: string): Article;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Article.AsObject;
  static toObject(includeInstance: boolean, msg: Article): Article.AsObject;
  static serializeBinaryToWriter(message: Article, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Article;
  static deserializeBinaryFromReader(message: Article, reader: jspb.BinaryReader): Article;
}

export namespace Article {
  export type AsObject = {
    title: string,
    contents: string,
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

