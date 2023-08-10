<template>
  <div class="cart">
    <h1><router-link :to="{ name: 'HomePage' }">Home</router-link></h1>
    <aCart
      v-if="carts.length > 0"
      :carts="carts"
    />
    <div v-else>Cart is empty</div>
  </div>
</template>

<script>
import aCart from '@/components/a-cart.vue'
import HomePage from '@/views/HomePage.vue'

export default {
  components: {
    aCart
  },
  computed: {
    HomePage () {
      return HomePage
    },
    carts () {
      return this.$store.state.cart
    }
  }
}
</script>
