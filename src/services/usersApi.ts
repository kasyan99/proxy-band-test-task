// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Album, Post, User } from "../models/models"

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], string>({
      query: () => `users`,
    }),
    getPosts: builder.query<Post[], number>({
      query: (userId: number) => `posts?userId=${userId}`,
    }),
    getAlbums: builder.query<Album[], number>({
      query: (userId: number) => `albums?userId=${userId}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery, useGetPostsQuery, useGetAlbumsQuery } =
  usersApi
