// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ContentType = {
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO"
};

const { TimelineItem, User, Content, Comment, Todo } = initSchema(schema);

export {
  TimelineItem,
  User,
  Content,
  Comment,
  Todo,
  ContentType
};