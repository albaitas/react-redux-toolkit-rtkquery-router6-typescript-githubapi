import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerResponse, IUser } from '../../types';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/'
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search) => ({
        url: `search/users`,
        params: {
          q: search,
          per_page: 14
        }
      }),
      transformResponse: (response: ServerResponse) => response.items
    }),
    getUser: build.query<IUser, string>({
      query: (username) => `users/${username}`
    })
  })
});

export const { useSearchUsersQuery, useGetUserQuery } = githubApi;
