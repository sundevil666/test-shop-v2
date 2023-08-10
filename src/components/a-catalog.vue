<template>
  <ul class="row">
    <li
      v-for="item in products"
      :key="item.name"
      class="col-12 col-md-6 col-lg-4 mb-3"
    >
      <aCatalogItem
        :title="item.name"
        :description="item.about"
        :image="`img/${item.image}`"
        :price="item.price"
        :article="item.article"
        @emitAddToCart="addToCart(item)"
      />
    </li>
  </ul>
</template>

<script>
import aCatalogItem from '@/components/a-catalog-item.vue'

export default {
  components: {
    aCatalogItem
  },
  data () {
    return {

    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    addToCart (val) {
      this.$store.commit('SET_CART', val)
      console.log(val)
    }
  },
  created () {
    this.$store.dispatch('GET_PRODUCTS')
  }
}
</script>
