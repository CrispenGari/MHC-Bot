import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BotPrediction = {
  __typename?: 'BotPrediction';
  confidence: Scalars['Float'];
  pattern: Scalars['String'];
  tag: Scalars['String'];
  tagId: Scalars['Int'];
};

export type BotResponse = {
  __typename?: 'BotResponse';
  message: Scalars['String'];
};

export type ChatWithBotInputType = {
  message: Scalars['String'];
};

export type ChatWithBotMutation = {
  __typename?: 'ChatWithBotMutation';
  response?: Maybe<ChatWithBotResponse>;
};

export type ChatWithBotResponse = {
  __typename?: 'ChatWithBotResponse';
  error?: Maybe<ErrorType>;
  prediction?: Maybe<BotPrediction>;
  response?: Maybe<BotResponse>;
  success: Scalars['Boolean'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type MetaResponse = {
  __typename?: 'MetaResponse';
  description: Scalars['String'];
  language: Scalars['String'];
  libraries: Array<Maybe<Scalars['String']>>;
  main: Scalars['String'];
  programmer: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  chat?: Maybe<ChatWithBotMutation>;
};


export type MutationChatArgs = {
  input: ChatWithBotInputType;
};

export type Query = {
  __typename?: 'Query';
  meta: MetaResponse;
};

export type BotPredictionFragment = { __typename?: 'BotPrediction', confidence: number, tagId: number, tag: string, pattern: string };

export type BotResponseFragmentFragment = { __typename?: 'BotResponse', message: string };

export type ChatWithBotResponseFragmentFragment = { __typename?: 'ChatWithBotResponse', success: boolean, prediction?: { __typename?: 'BotPrediction', confidence: number, tagId: number, tag: string, pattern: string } | null, error?: { __typename?: 'ErrorType', field: string, message: string } | null, response?: { __typename?: 'BotResponse', message: string } | null };

export type ErrorFragmentFragment = { __typename?: 'ErrorType', field: string, message: string };

export type SendMessageToBotMutationVariables = Exact<{
  input: ChatWithBotInputType;
}>;


export type SendMessageToBotMutation = { __typename?: 'Mutation', chat?: { __typename?: 'ChatWithBotMutation', response?: { __typename?: 'ChatWithBotResponse', success: boolean, prediction?: { __typename?: 'BotPrediction', confidence: number, tagId: number, tag: string, pattern: string } | null, error?: { __typename?: 'ErrorType', field: string, message: string } | null, response?: { __typename?: 'BotResponse', message: string } | null } | null } | null };

export const BotPredictionFragmentDoc = gql`
    fragment BotPrediction on BotPrediction {
  confidence
  tagId
  tag
  pattern
}
    `;
export const ErrorFragmentFragmentDoc = gql`
    fragment ErrorFragment on ErrorType {
  field
  message
}
    `;
export const BotResponseFragmentFragmentDoc = gql`
    fragment BotResponseFragment on BotResponse {
  message
}
    `;
export const ChatWithBotResponseFragmentFragmentDoc = gql`
    fragment ChatWithBotResponseFragment on ChatWithBotResponse {
  success
  prediction {
    ...BotPrediction
  }
  error {
    ...ErrorFragment
  }
  response {
    ...BotResponseFragment
  }
}
    ${BotPredictionFragmentDoc}
${ErrorFragmentFragmentDoc}
${BotResponseFragmentFragmentDoc}`;
export const SendMessageToBotDocument = gql`
    mutation SendMessageToBot($input: ChatWithBotInputType!) {
  chat(input: $input) {
    response {
      ...ChatWithBotResponseFragment
    }
  }
}
    ${ChatWithBotResponseFragmentFragmentDoc}`;
export type SendMessageToBotMutationFn = Apollo.MutationFunction<SendMessageToBotMutation, SendMessageToBotMutationVariables>;

/**
 * __useSendMessageToBotMutation__
 *
 * To run a mutation, you first call `useSendMessageToBotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageToBotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageToBotMutation, { data, loading, error }] = useSendMessageToBotMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendMessageToBotMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageToBotMutation, SendMessageToBotMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageToBotMutation, SendMessageToBotMutationVariables>(SendMessageToBotDocument, options);
      }
export type SendMessageToBotMutationHookResult = ReturnType<typeof useSendMessageToBotMutation>;
export type SendMessageToBotMutationResult = Apollo.MutationResult<SendMessageToBotMutation>;
export type SendMessageToBotMutationOptions = Apollo.BaseMutationOptions<SendMessageToBotMutation, SendMessageToBotMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    