import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi"
const AUTH_URL = "/";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userRegister: build.mutation({
        query: (registerData) => ({
            url:'auth/signup',
            method: "POST",
            data: registerData
        }),
        invalidatesTags:[tagTypes.user]
    }),
    userLogin: build.mutation({
        query: (loginData) => ({
            url:'auth/signin',
            method: "POST",
            data: loginData
        }),
        invalidatesTags:[tagTypes.user]
    }),
  }),
  
})

export const { useUserLoginMutation , useUserRegisterMutation} = authApi