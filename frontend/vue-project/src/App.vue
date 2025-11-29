<script setup>
import { ref, onMounted } from "vue";
import { useProductStore } from "./stores/products";

const store = useProductStore();
const name = ref("");
const price = ref("");

onMounted(() => {
  store.fetchProducts();
});

function addProduct() {
  store.addProduct(name.value, price.value);
  name.value = "";
  price.value = "";
}
</script>

<template>
  <h1>Simple E-commerce App</h1>

  <input v-model="name" placeholder="Product name" />
  <input v-model="price" placeholder="Price" />
  <button @click="addProduct">Add</button>

  <ul>
    <li v-for="product in store.products" :key="product.id">
      {{ product.name }} - ${{ product.price }}
    </li>
  </ul>
</template>
