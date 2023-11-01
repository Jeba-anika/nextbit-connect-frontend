import {  IMeta, IService } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const SERVICE_URL = "services";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all services
    services: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: SERVICE_URL,
          method: "GET",
          params: arg,
        };
      },
      providesTags: [tagTypes.services],
    }),
    // get single service
    service: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.services],
    }),
    // create a new service
    addService: build.mutation({
      query: (data) => ({
        url: SERVICE_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.services],
    }),
    // update existing service
    updateService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.services],
    }),
    // delete existing service
    deleteService: build.mutation({
      query: (id) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.services],
    }),
  }),
});

export const {
  useAddServiceMutation,
  useServiceQuery,
  useServicesQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
