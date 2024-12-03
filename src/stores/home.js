import { defineStore } from "pinia";
import httpClient from "@/services/http-client";

export const useHome = defineStore("home", {
  state: () => ({ products: null, product: null }),
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
  actions: {
    getHomeProducts() {
      httpClient
        .get("/home")
        .then((response) => (this.products = response.data));
    },
    getProductBySlug(slug, callback) {
      httpClient.get(`/products/${slug}`).then(callback);
    },
  },
  persist: false,
});
