<template>
  <button class="mobile-menu-icon" @click="open">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
export default {
  methods: {
    open: (event) => {
      return document.querySelector('.gloal-container').classList.toggle('menu-open')
    },
  }
}
</script>

<style lang="scss">
@import "~assets/sass/variables.scss";
@import "~assets/sass/mixin.scss";

.mobile-menu-icon {

  & span {
    display: block;
    background-color: $cBlack;
    width: 35px;
    height: 2px;
    margin-bottom: 9px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.menu-open {
  .mobile-menu-icon {
    position: fixed;
    top: auto;
    right: 0;
  }

  & span:nth-of-type(1) {
  -webkit-transform: translateY(20px) rotate(-45deg);
  transform: translateY(2px) rotate(-45deg);
  transition: 0.4s;
  }
  & span:nth-of-type(2) {
    opacity: 0;
  }
  & span:nth-of-type(3) {
    -webkit-transform: translateY(-20px) rotate(45deg);
    transform: translateY(-20px) rotate(45deg);
    transition: 0.4s;
  }
}

</style>
