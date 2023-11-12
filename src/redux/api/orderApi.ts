import { IAdmin, IMeta, IOrder } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const ORDER_API = "orders";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    orders: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ORDER_API,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any, meta: IMeta) => {
        return {
          orders: response,
          meta,
        };
      },
      providesTags: [tagTypes.order],
    }),
    
    createOrder: build.mutation({
      query: (data) => ({
        url: `${ORDER_API}/create-order`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.order],
    }),


    deleteAdmin: build.mutation({
      query: (id) => ({
        url: `${ORDER_API}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useOrdersQuery,
  useDeleteAdminMutation,
} = adminApi;
