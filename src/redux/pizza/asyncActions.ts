import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Pizza, SearchPizzaParams } from "./types";


export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>('pizza/fetchPizzasStatus', async (params) => {
  const { search, category, order, sortBy, currentPage } = params;
  const { data } = await axios.get<Pizza[]>(
    `https://631604a05b85ba9b11ed85ad.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data;
  }
);