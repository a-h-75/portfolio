<template>
  <div class="double-spinner">
    <div class="wrap">
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/sass/variables.scss";
@import "~assets/sass/mixin.scss";

.double-spinner {
  padding: 10px 40px;

  .wrap {
    position: relative;
    width: 40px;
    height: 40px;

    .circle {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #333;
      border-radius: 50%;
      opacity: .6;

      @include animation(
        $name: sk-reduction,
        $iteration-count: infinite,
        $duration: 2s
        );

      &:nth-child(2) {
        animation-delay: -1s;
      }
    }
  }
}

@keyframes sk-reduction {
  0%, 100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}

</style>
