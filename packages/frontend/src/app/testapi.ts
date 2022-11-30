import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const testApi = createApi({
  reducerPath: 'testApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/app/test' }),
  endpoints: (builder) => ({
    getTest: builder.query<string, string>({
      query: (id) => `/?id=${id}`,
    }),
  }),
});

export const { useGetTestQuery } = testApi;
