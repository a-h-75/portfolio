<template>
  <footer class="footer content-width">
      <div class="footer__inner">
        <div class="footer-logo mb-sm">
          <img src="~/assets/images/logo.svg" alt="" class="footer-logo__img">
          <span class="footer-logo__text">Main</span>
          <span class="footer-logo__text-sub">Footer</span>
        </div>
        <nav class="footer__nav">
          <ul class="footer__list">
            <li class="footer__item active"><nuxt-link to="/">Top Page</nuxt-link></li>
            <li class="footer__item"><nuxt-link to="#">Other Page</nuxt-link></li>
            <li class="footer__item"><nuxt-link to="#">Other Page</nuxt-link></li>
            <li class="footer__item"><nuxt-link to="#">Other Page</nuxt-link></li>
          </ul>
          <div class="footer__copyright">
            &copy; Nuxt.js
          </div>
        </nav>
      </div>
    </footer>
</template>

<script>

export default {
}

</script>>
<style lang="scss">
@import "~assets/sass/variables.scss";

.footer {
  padding: 60px 0;

  &__nav {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    @media screen and(max-width: 768px){
    text-align: inherit;
    align-items: flex-end;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    @media screen and(max-width: 768px){
    flex-direction: column;
    }
  }

  &__item {
    padding: 0;
    margin-left: 0;
    margin-right: 30px;
    color: gray;
    @media screen and(max-width: 768px){
      margin-bottom: 5px;
    }
  }

  & .active {
    color: $cBlack;
  }

  &__copyright {
    @media screen and(max-width: 768px){
      font-size: 12px;
    }
  }
}

.footer-logo {
  display: flex;
  font-size: 42px;
  @media screen and(max-width: 768px){
    font-size: 25px;
    justify-content: flex-start;
  }

  &__img {
    width: 0.7em;
  }

  &__text {
    color: $cWineRed;
  }
}
</style>
