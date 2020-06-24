<template>
  <div class="rect-spinner">
    <div class="wrap">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/sass/variables.scss";
@import "~assets/sass/mixin.scss";

.rect-spinner {
  padding: 10px 40px;

  .wrap {
    width: 50px;
    height: 40px;
    text-align: center;
    letter-spacing: -2px;

    .box {
      display: inline-block;
      width: 6px;
      height: 100%;
      background-color: #333;

      @include animation(
        $name: sk-rectdelay,
        $duration: 1.2s,
        $iteration-count: infinite,
        $timing-function: ease-in-out
      );
      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          animation-delay: -1.3s + $i *0.1s;
        }
      }
    }
  }
}

@keyframes sk-rectdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}

</style>
