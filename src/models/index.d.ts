import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Interests {
  STAYINGACTIVE = "STAYINGACTIVE",
  WRITING = "WRITING",
  SCIENCE = "SCIENCE",
  PSYCHOLOGY = "PSYCHOLOGY",
  TECH = "TECH",
  MUSIC = "MUSIC",
  DEBATE = "DEBATE"
}



type MatchMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Match {
  readonly id: string;
  readonly User1?: User;
  readonly User2?: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly matchUser1Id?: string;
  readonly matchUser2Id?: string;
  constructor(init: ModelInit<Match, MatchMetaData>);
  static copyOf(source: Match, mutator: (draft: MutableModel<Match, MatchMetaData>) => MutableModel<Match, MatchMetaData> | void): Match;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly image?: string;
  readonly bio: string;
  readonly birthDate?: string;
  readonly interest: Interests | keyof typeof Interests;
  readonly prompt1: string;
  readonly prompt2: string;
  readonly prompt3: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}