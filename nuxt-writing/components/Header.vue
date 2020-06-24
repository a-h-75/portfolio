<template>
  <header class="header mb-lg sp-non">
      <div class="header__inner content-width">
        <div class="logo">
          <img src="~/assets/images/logo.svg" alt="" class="logo__img">
          <span class="logo__text">Main</span>
          <span class="logo__text-sub">Header</span>
        </div>
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item active"><nuxt-link to="/">Top Page</nuxt-link></li>
            <li class="header__item"><nuxt-link to="#">Other Page</nuxt-link></li>
            <li class="header__item">
              <nuxt-link to="#">
                <ModBtn :class-name="{ btn2 : use }">CONTACT</ModBtn>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
</template>

<script>
import ModBtn from '~/components/ModBtn.vue'

export default {
  components: {
    ModBtn,
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

.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  background-color: rgba(255, 255, 255,0.6);
  box-shadow: 0 1px rgba(0, 0, 0, 0.2);
  z-index: 3;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  &__nav {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    text-align: center;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    text-transform: uppercase;
  }

  &__item {
    padding: 0;
    margin-left: 0;
    margin-right: 30px;
    color: gray;

    .btn {
      margin: 0;
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
    font-size: 38px;
    justify-content: center;
  }

  &__img {
    width: 0.7em;
  }

  &__text {
    color: $cWineRed;
  }
}
</style>
