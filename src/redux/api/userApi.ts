import { IMeta, IMyCourse, IStudent, IUser } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const USERS_URL = "users";
export const studentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    users: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${USERS_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any, meta: IMeta) => {
        return {
          users: response?.data,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),
    
    user: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${USERS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    // update user
    updateUser: build.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    // delete user
    deleteUser: build.mutation({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
   
    
   
  }),
});

export const {
  useUsersQuery, 
  useUpdateUserMutation, 
  useDeleteUserMutation, 
  useUserQuery
} = studentApi;
