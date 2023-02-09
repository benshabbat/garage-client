import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (cerdentials) => ({
        url: "/auth",
        method: "POST",
        body: { ...cerdentials },
      }),
    }),
  }),
});
