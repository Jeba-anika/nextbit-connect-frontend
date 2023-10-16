import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const CATEGORY_URL = "/services";

export const categoryApi = baseApi.injectEndpoints({
    endpoints: (build)=>({
        categories: build.query({
            query: (arg: Record<string, any>)=>{
                return {
                    url: CATEGORY_URL,
                    method: "GET",
                    params: arg
                }
            },
            providesTags: [tagTypes.category],
        })
    })
})

export const {useCategoriesQuery} = categoryApi