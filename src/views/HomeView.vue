<template>
  <main>
    <div class="max-w-7xl mx-auto">
      <h1>Front Loja</h1>

      <div class="grid grid-cols-4 gap-4" v-if="homeStore.products.length">
        <div
          class="w-[290px]"
          v-for="product of homeStore.products"
          :key="product.id"
        >
          <img
            :src="`http://localhost/storage/${product.photo}`"
            :alt="`Foto Produto: ${product.name}`"
            v-if="product.photo"
            class="w-[290px] h-[170px]"
          />
          <img
            src="@/assets/no-photo.jpg"
            :alt="`Imagem Produto Sem Foto`"
            v-if="!product.photo"
            class="w-[290px] h-[170px]"
          />
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <h3>{{ product.price_float }}</h3>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { mapStores } from "pinia";
import { useHome } from "@/stores/home";

export default {
  created() {
    this.homeStore.getHomeProducts();
  },
  computed: {
    ...mapStores(useHome),
  },
};
</script>
