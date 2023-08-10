<template>
  <div>
    <h1>Cart</h1>
    <ul class="row">
      <li
        v-for="item in carts"
        :key="item.article"
        class="col-12 col-md-6 col-lg-4 mb-3"
      >
        <vCartItem :cart="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import vCartItem from './v-cart-item.vue'

export default {
  props: {
    carts: {
      type: Array,
      default: () => []
    }
  },
  components: {
    vCartItem
  }
}
</script>
