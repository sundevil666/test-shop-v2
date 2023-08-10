<template>
  <div class="card" style="width: 18rem;">
    <img :src="image" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <div class="d-flex justify-content-between items-center">
        <p>Price: ${{ price }}</p>
        <button class="btn btn-primary" @click="addToCart">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'a-catalog-item',
  props: {
    title: {
      type: String,
      default: 'default title'
    },
    description: {
      type: String,
      default: 'default description'
    },
    image: {
      type: String,
      default: 'default image'
    },
    price: {
      type: Number,
      default: 0
    },
    article: {
      type: String,
      required: true
    }
  },
  methods: {
    addToCart () {
      this.$emit('emitAddToCart', this.article)
    }
  }
}
</script>
