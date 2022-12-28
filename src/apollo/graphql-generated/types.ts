/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']>;
  userErrors: Array<UserError>;
};

export type CredentialsInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  postCreate: PostPayload;
  postDelete: PostPayload;
  postPublish: PostPayload;
  postUpdate: PostPayload;
  signin: AuthPayload;
  signup: AuthPayload;
};


export type MutationPostCreateArgs = {
  input: PostCreateInput;
};


export type MutationPostDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPostPublishArgs = {
  input: PostPublishInput;
};


export type MutationPostUpdateArgs = {
  input: PostUpdateInput;
};


export type MutationSigninArgs = {
  input: CredentialsInput;
};


export type MutationSignupArgs = {
  input: SignupInput;
};

export type Post = {
  __typename?: 'Post';
  content: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type PostCreateInput = {
  content: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
};

export type PostPayload = {
  __typename?: 'PostPayload';
  post?: Maybe<Post>;
  userErrors: Array<UserError>;
};

export type PostPublishInput = {
  postId: Scalars['ID'];
  published?: InputMaybe<Scalars['Boolean']>;
};

export type PostUpdateInput = {
  content?: InputMaybe<Scalars['String']>;
  postId: Scalars['ID'];
  published?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Profile = {
  __typename?: 'Profile';
  bio: Scalars['String'];
  id: Scalars['ID'];
  isMyProfile: Scalars['Boolean'];
  user: User;
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  getPost?: Maybe<Post>;
  getProfile?: Maybe<Profile>;
  getUser?: Maybe<User>;
  posts: Array<Post>;
};


export type QueryGetPostArgs = {
  id: Scalars['ID'];
};


export type QueryGetProfileArgs = {
  userId: Scalars['ID'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};

export type SignupInput = {
  bio: Scalars['String'];
  credentials: CredentialsInput;
  name: Scalars['String'];
  passwordConfirm: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  posts: Array<Post>;
};

export type UserError = {
  __typename?: 'UserError';
  message: Scalars['String'];
};
