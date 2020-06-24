<template>
  <div class="container">
    <h1 class="title">モジュール集</h1>
    <section class="mod-cassette">
      <h2 class="mod-title">ボタンエフェクト一覧</h2>
      <ul class="btn-list">
        <li class="btn-item">
          <ModBtn>Button</ModBtn>
        </li>
        <li class="btn-item">
          <ModBtn :class-name="{ btn2: use }">Button</ModBtn>
        </li>
        <li class="btn-item">
          <ModBtn :class-name="{ btn3: use }">Button</ModBtn>
        </li>
        <li class="btn-item">
          <ModBtn :class-name="{ btn4: use }">Button</ModBtn>
        </li>
        <li class="btn-item">
          <ModBtn :class-name="{ btn5: use }">Button</ModBtn>
        </li>
        <li class="btn-item">
          <ModBtn :class-name="{ btn6: use }">Button</ModBtn>
        </li>
        <li class="btn-item">
          <CancelBtn />
        </li>
      </ul>
    </section>
    <section class="mod-cassette">
      <h2 class="mod-title">アニメーション一覧</h2>
      <ul class="anm-list">
        <li class="anm-item">
          <SpinnerAnimeition />
          <div class="default-btn">
            <button @click="puase">puase</button>
          </div>
        </li>
        <li class="anm-item">
          <DoubleSpinnerAnimeition />
          <div class="default-btn">
            <button @click="puase">puase</button>
          </div>
        </li>
        <li class="anm-item">
          <SpinnerSquareAnimeition />
          <div class="default-btn">
            <button @click="puase">puase</button>
          </div>
        </li>
        <li class="anm-item">
          <SpinnerRectangleAnimeition />
          <div class="default-btn">
            <button @click="puase">puase</button>
          </div>
        </li>
        <li class="anm-item">
          <MobileMenu />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import ModBtn from '~/components/ModBtn.vue'
import CancelBtn from '~/components/CancelBtn.vue'
import SpinnerAnimeition from '~/components/SpinnerAnimeition.vue'
import SpinnerSquareAnimeition from '~/components/SpinnerSquareAnimeition.vue'
import DoubleSpinnerAnimeition from '~/components/DoubleSpinnerAnimeition.vue'
import SpinnerRectangleAnimeition from '~/components/SpinnerRectangleAnimeition.vue'
import MobileMenu from '~/components/MobileMenu.vue'

export default {
  components: {
    ModBtn,
    CancelBtn,
    SpinnerAnimeition,
    SpinnerSquareAnimeition,
    DoubleSpinnerAnimeition,
    SpinnerRectangleAnimeition,
    MobileMenu,
  },
  data: () => {
    return {
      use: true
    }
  },
  methods: {
    puase: (event) => {
      return document.querySelectorAll('.bounce').classList.toggle('paused')
    }
  }
}
</script>

<style lang="scss">
@import "~assets/sass/variables.scss";

.container {
  width: 1080px;
  margin: 0 auto;

  .title {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 20px;
  }
}

.default-btn {
  display: inline-block;
  padding: 5px 10px;
  margin: 10px 40px;
  border: 1px solid $cBlack;
}

.mod-cassette {
  padding-top: 20px;

  .mod-title {
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 20px;
  }
}

.btn-list, .anm-list {
  display: flex;
  justify-content: space-between;
}

.paused {
  animation-play-state: paused!important;
}

</style>
