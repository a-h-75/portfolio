<template>
  <header class="mobile-header pc-non">
    <div class="mobile-header__inner content-width">
      <div class="logo">
        <img src="~/assets/images/logo.svg" alt="" class="logo__img">
        <span class="logo__text">Mobile</span>
        <span class="logo__text-sub">Header</span>
      </div>
      <nav class="mobile-header__nav">
        <ul class="mobile-header__list">
          <li class="mobile-header__item active"><nuxt-link to="/">Top Page</nuxt-link></li>
          <li class="mobile-header__item"><nuxt-link to="#">Other Page</nuxt-link></li>
          <li class="mobile-header__item"><nuxt-link to="#">Other Page</nuxt-link></li>
          <li class="mobile-header__item"><nuxt-link to="#">Other Page</nuxt-link></li>
        </ul>
      </nav>
      <MobileMenu />
    </div>
  </header>
</template>

<script>
import ModBtn from '~/components/ModBtn.vue'
import MobileMenu from '~/components/MobileMenu.vue'

export default {
  components: {
    ModBtn,
    MobileMenu,
  },
  data: () => {
    return {
      use: true
    }
  }
}
</script>

<style lang="scss">
@import "~assets/sass/variables.scss";

.mobile-header {
  position: fixed;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  background-color: rgba(255, 255, 255,0.6);
  box-shadow: 0 1px rgba(0, 0, 0, 0.2);
  z-index: 999;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
  }

  &__nav {
    display: none;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    text-align: center;
    @media screen and(max-width: 768px){
      text-align: inherit;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    text-transform: uppercase;
    @media screen and(max-width: 768px){
      display: block;
      flex-direction: column;
    }
  }

  &__item {
    padding: 0;
    margin-left: 0;
    margin-right: 30px;
    color: gray;
    @media screen and(max-width: 768px){
      color: $cBlack;
      margin-bottom: 15px;
    }
  }

  & .active {
    color: $cBlack;
  }

}

.logo {
  display: flex;
  font-size: 42px;
  @media screen and(max-width: 768px){
    font-size: 25px;
    justify-content: center;
  }

  &__img {
    width: 0.7em;
  }

  &__text {
    color: $cWineRed;
  }
}

.menu-open {
  .container {
    transform: translate(-200px, 60px);
    transition: all 0.2s;
    box-shadow: 30px -30px 5px -15px rgba(0, 0, 0, 0.7);
  }

  .mobile-header {
    height: 100%;

    &__nav {
      display: flex;
    }

    &__list {
      position: absolute;
      top: 0;
      right: -50%;
      list-style: decimal;
    }

    &__item {
      margin-right: 0;
    }

    .logo {
      display: none;
    }
  }
}
</style>
