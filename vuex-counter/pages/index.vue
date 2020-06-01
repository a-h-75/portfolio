<template>
  <div class="container">
    <div class="">
      <Counter></Counter>
      <hr>
      <Counter></Counter>
      <hr>
      <Counter></Counter>
      <hr>
    </div>
  </div>
</template>

<script>
import Counter from '~/components/counter.vue'

export default {
  components: {
    Counter
  }
}
</script>

<style>

</style>
