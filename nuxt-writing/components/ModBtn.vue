<template>
  <button class="btn" :class="className" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['className',]
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/variables.scss";

.btn {
  background-color: $cWhite;
  color: $cBlack;
  border: 1px solid $cBlack;
  padding: 10px 40px;
  margin: 50px 0;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: $cBlack;
    color: $cWhite;
  }
}

.btn2 {

  &:hover {
    letter-spacing: 3px;
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.5);
  }
}

.btn3 {
  background-color: $cBlack;
  color: $cWhite;

  &:hover {
    background-color: $cWhite;
    color: $cBlack;
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.5);
  }
}

.btn4 {

  &:hover {
    background-color: transparent;
    color: initial;
    box-shadow: 5px 5px 0 0 $cBlack;
    transform: translate(-5px, -5px);
  }
}

.btn5 {
  border-radius: 7px;
  box-shadow: 4px 4px 0 0 $cBlack;

  &:hover {
    background-color: transparent;
    color: initial;
    box-shadow: none;
    transform: translate(4px, 4px);
  }
}

.btn6 {
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    display: inline;
    width: 100%;
    height: 100%;
    background-color: $cBlack;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    transition: transform 0.3s;
    z-index: -1;
  }

  &:hover {
    color: $cWhite;

    &::before {
      transform: none;
    }
  }
}

</style>
