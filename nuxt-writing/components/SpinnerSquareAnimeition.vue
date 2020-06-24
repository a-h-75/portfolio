<template>
  <div class="square-spinner">
    <div class="box"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/sass/variables.scss";
@import "~assets/sass/mixin.scss";

.square-spinner {
  padding: 10px 40px;

  .box {
    width: 40px;
    height: 40px;
    background-color: $cBlack;

    @include animation(
      $name: sk-rotateplane,
      $duration: 1.2s,
      $iteration-count: infinite
      );
  }
}

@keyframes sk-rotateplane {
  0% {
    transform: perspective(120px) rotateX(0) rotateY(0);
  }
  50% {
    transform: perspective(120px) rotateX(-180deg) rotateY(0);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
  }
}

</style>
