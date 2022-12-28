/* eslint-disable */
import * as Types from '../../graphql-generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPostsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, title: string, content: string, createdAt: string, published: boolean, user: { __typename?: 'User', email: string, name: string, id: string } }> };

export type PostCreateMutationVariables = Types.Exact<{
  input: Types.PostCreateInput;
}>;


export type PostCreateMutation = { __typename?: 'Mutation', postCreate: { __typename?: 'PostPayload', post?: { __typename?: 'Post', id: string, title: string, content: string } | null, userErrors: Array<{ __typename?: 'UserError', message: string }> } };

export type PostPublishMutationVariables = Types.Exact<{
  input: Types.PostPublishInput;
}>;


export type PostPublishMutation = { __typename?: 'Mutation', postPublish: { __typename?: 'PostPayload', userErrors: Array<{ __typename?: 'UserError', message: string }>, post?: { __typename?: 'Post', id: string, published: boolean } | null } };


export const GetPostsDocument = gql`
    query getPosts {
  posts {
    id
    title
    content
    createdAt
    published
    user {
      email
      name
      id
    }
  }
}
    `;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const PostCreateDocument = gql`
    mutation PostCreate($input: PostCreateInput!) {
  postCreate(input: $input) {
    post {
      id
      title
      content
    }
    userErrors {
      message
    }
  }
}
    `;
export type PostCreateMutationFn = Apollo.MutationFunction<PostCreateMutation, PostCreateMutationVariables>;

/**
 * __usePostCreateMutation__
 *
 * To run a mutation, you first call `usePostCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postCreateMutation, { data, loading, error }] = usePostCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostCreateMutation(baseOptions?: Apollo.MutationHookOptions<PostCreateMutation, PostCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostCreateMutation, PostCreateMutationVariables>(PostCreateDocument, options);
      }
export type PostCreateMutationHookResult = ReturnType<typeof usePostCreateMutation>;
export type PostCreateMutationResult = Apollo.MutationResult<PostCreateMutation>;
export type PostCreateMutationOptions = Apollo.BaseMutationOptions<PostCreateMutation, PostCreateMutationVariables>;
export const PostPublishDocument = gql`
    mutation PostPublish($input: PostPublishInput!) {
  postPublish(input: $input) {
    userErrors {
      message
    }
    post {
      id
      published
    }
  }
}
    `;
export type PostPublishMutationFn = Apollo.MutationFunction<PostPublishMutation, PostPublishMutationVariables>;

/**
 * __usePostPublishMutation__
 *
 * To run a mutation, you first call `usePostPublishMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPublishMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPublishMutation, { data, loading, error }] = usePostPublishMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostPublishMutation(baseOptions?: Apollo.MutationHookOptions<PostPublishMutation, PostPublishMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostPublishMutation, PostPublishMutationVariables>(PostPublishDocument, options);
      }
export type PostPublishMutationHookResult = ReturnType<typeof usePostPublishMutation>;
export type PostPublishMutationResult = Apollo.MutationResult<PostPublishMutation>;
export type PostPublishMutationOptions = Apollo.BaseMutationOptions<PostPublishMutation, PostPublishMutationVariables>;