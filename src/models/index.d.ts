import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ContentType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO"
}



export declare class TimelineItem {
  readonly id: string;
  readonly description?: string;
  readonly postTime?: string;
  readonly author?: User;
  readonly content?: Content;
  readonly comments?: (Comment | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TimelineItem>);
  static copyOf(source: TimelineItem, mutator: (draft: MutableModel<TimelineItem>) => MutableModel<TimelineItem> | void): TimelineItem;
}

export declare class User {
  readonly id: string;
  readonly username?: string;
  readonly profilepic?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Content {
  readonly id: string;
  readonly source?: string;
  readonly type?: ContentType | keyof typeof ContentType;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Content>);
  static copyOf(source: Content, mutator: (draft: MutableModel<Content>) => MutableModel<Content> | void): Content;
}

export declare class Comment {
  readonly id: string;
  readonly body?: string;
  readonly timelineitemID?: string;
  readonly author?: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Todo>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}