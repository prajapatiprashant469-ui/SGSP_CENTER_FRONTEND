import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    Accept: "application/json",
  },
});

export const getAllProducts = () =>
  api.get("/api/admin/v1/products");
