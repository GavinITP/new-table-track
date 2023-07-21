import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers", "Transactions", "Sales"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),

    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),

    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),

    getTransactions: build.query({
      query: () => "client/transactions",
      providesTags: ["Transactions"],
    }),

    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetSalesQuery,
} = api;
