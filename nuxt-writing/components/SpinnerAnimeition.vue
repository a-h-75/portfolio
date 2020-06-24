<template>
  <div class="three-dot-spinner">
    <div class="bounce"></div>
    <div class="bounce"></div>
    <div class="bounce"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/sass/variables.scss";

.three-dot-spinner {
  padding: 10px 40px;

  .bounce {
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: $cBlack;
    border-radius: 50%;
    animation: sk-bouncedelay 1.4s infinite;

    &:nth-child(1) {
      animation-delay: -0.32s;
    }
    &:nth-child(2) {
      animation-delay: -0.16s;
    }
  }
}

@keyframes sk-bouncedelay {
  0% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
  80% {
    transform: scale(0);
  }
  100% {
    opacity: 0;
  }
}

</style>
