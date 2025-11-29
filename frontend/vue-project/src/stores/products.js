import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: []
  }),
  actions: {
    async fetchProducts() {
      const res = await fetch("http://localhost:5000/products");
      this.products = await res.json();
    },
    async addProduct(name, price) {
      await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, price})
      });
      this.fetchProducts();
    }
  }
});
