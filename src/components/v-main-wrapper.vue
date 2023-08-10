<template>
  <div>
    <div class="d-flex justify-content-between">
      <h1>My shop</h1>
      <router-link v-if="cartsLength" :to="{ name: 'CartPage' }">Cart: <b>{{ cartsLength }}</b></router-link>
      <div v-else>Cart: <b>0</b></div>
    </div>

    <aCatalog />
  </div>
</template>

<script>
import aCatalog from '@/components/a-catalog.vue'

export default {
  name: 'v-main-wrapper',
  components: {
    aCatalog
  },
  computed: {
    cartsLength () {
      return this.$store.state.cart.length
    }
  }
}
</script>
