// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Interests = {
  "STAYINGACTIVE": "STAYINGACTIVE",
  "WRITING": "WRITING",
  "SCIENCE": "SCIENCE",
  "PSYCHOLOGY": "PSYCHOLOGY",
  "TECH": "TECH",
  "MUSIC": "MUSIC",
  "DEBATE": "DEBATE"
};

const { Match, User } = initSchema(schema);

export {
  Match,
  User,
  Interests
};