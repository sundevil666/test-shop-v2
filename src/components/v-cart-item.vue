<template>
  <div class="card" style="width: 18rem;">
    <img :src="`img/${cart.image}`" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ cart.title }}</h5>
      <p class="card-text">{{ cart.description }}</p>
      <div class="d-flex justify-content-between items-center">
        <p>Price: ${{ cart.price }}</p>
        <button class="btn btn-primary" @click="deleteToCart">Delete to cart</button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'vCartItem',
  props: {
    cart: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    deleteToCart () {
      this.$store.commit('DELETE_CART', this.cart.article)
    }
  }
}
</script>

<style scoped>

</style>
