<template>
  <ModBtn class="btn" @click="$emit('click')">cansel</ModBtn>
</template>

<script>
import ModBtn from '~/components/ModBtn.vue'

export default {
  components: {
    ModBtn
  }
}
</script>

<style lang="scss" scoped>
.btn {
  color: red;

  &:hover {
    background-color: blue;
  }
}
</style>
