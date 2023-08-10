<template>
  <div>
    <aCatalog />
    <aCart
      v-if="carts.length > 0"
      :carts="carts"
    />
  </div>
</template>

<script>
import aCatalog from '@/components/a-catalog.vue'
import aCart from '@/components/a-cart.vue'

export default {
  name: 'v-main-wrapper',
  components: {
    aCatalog,
    aCart
  },
  computed: {
    carts () {
      return this.$store.state.cart
    }
  }
}
</script>
