<template>
  <div class="gloal-container" id="gloal-container">
    <div class="container" id="container">
      <Header />
      <MobileHeader />
      <div class="content" id="content">
        <div class="hero-content mb-lg" id="hero">
          <!-- Slider main container -->
          <div v-swiper:mySwiper="swiperOption" class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div class="swiper-slide">
                <div class="hero__title">Enjoy Rich</div>
                <img src="~/assets/images/image-1.jpg" />
              </div>
              <div class="swiper-slide">
                <div class="hero__title">Fantastic</div>
                <img src="~/assets/images/image-2.jpg" />
              </div>
              <div class="swiper-slide">
                <div class="hero__title">Experience</div>
                <img src="~/assets/images/image-3.jpg" />
              </div>
            </div>
            <div class="hero__footer">
              <img class="hero__downarrow" src="~/assets/images/arrow.svg" />
              <span class="hero__scrolltext">scroll</span>
            </div>
          </div>
        </div>
        <div class="main-content" id="main-content">
          <div class="main-wraper">
            <section class="travel content-width mb-lg">
              <div class="travel__inner">
                <div class="travel__img cover-slide inview">
                  <img src="~/assets/images/image-1.jpg" alt="" class="img-zoom">
                </div>
                <div class="travel__text">
                  <div class="travel__text-inner">
                    <div class="travel__title mb-sm">
                      <span class="purple">Travel</span> <span>the world</span>
                    </div>
                    <div class="travel__sub mb-sm">
                      サブタイトル
                    </div>
                    <div class="travel__discription">
                      <p class="mb-sm">テキストテキストテキストテキストテキストテキストテキスト<br />
                      テキストテキストテキストテキストテキストテキストテキスト</p>
                      <p>テキストテキストテキストテキストテキストテキスト</p>
                    </div>
                    <div class="travel__btn">
                      <ModBtn :class-name="{ btn3: use }">もっと詳しく</ModBtn>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="houses content-width">
              <div class="houses__header">
                <h2 class="houses__header-title font-lg">Find Your House</h2>
                <p class="houses__header-text font-sm mb-sm">テキスト（リード文）</p>
              </div>
              <div class="houses__inner">
                <div class="houses__item">
                  <div class="cover-slide hover-darken inview">
                    <!-- <div class="bg-img-zoom img-bg50" :style="{ 'background-image': 'url(' + backgroundImageSrc + ')' }"></div> -->
                    <div class="bg-img-zoom img-bg50" style="background-image: url(’~/assets/images/villa-4.jpg’)"></div>
                  </div>
                  <p class="houses__title font-lr mb-sm">Hose 1</p>
                </div>
                <div class="houses__item">
                  <div class="cover-slide hover-darken inview">
                    <div class="bg-img-zoom img-bg50"></div>
                  </div>
                  <p class="houses__title font-lr mb-sm">Hose 2</p>
                </div>
                <div class="houses__item">
                  <div class="cover-slide hover-darken inview">
                    <div class="bg-img-zoom img-bg50"></div>
                  </div>
                  <p class="houses__title font-lr mb-sm">Hose 2</p>
                </div>
                <div class="houses__item">
                  <div class="cover-slide hover-darken inview">
                    <div class="bg-img-zoom img-bg50"></div>
                  </div>
                  <p class="houses__title font-lr mb-sm">Hose 2</p>
                </div>
                <div class="houses__item">
                  <div class="cover-slide hover-darken inview">
                    <div class="bg-img-zoom img-bg50"></div>
                  </div>
                  <p class="houses__title font-lr mb-sm">Hose 2</p>
                </div>
                <div class="houses__item">
                  <div class="cover-slide hover-darken inview">
                    <div class="bg-img-zoom img-bg50"></div>
                  </div>
                  <p class="houses__title font-lr">Hose 2</p>
                </div>
                <div class="houses__btn">
                  <ModBtn :class-name="{ btn2: use }">もっと詳しく</ModBtn>
                </div>
              </div>
            </section>
            <section class="popular">
              <div class="popular__header content-width">
                <h2 class="popular__header-title font-lg">Popular Place</h2>
                <p class="popular__header-text font-sm mb-sm">テキスト（リード文）</p>
              </div>
              <div class="popular__inner">
                <div class="popular__container content-width">
                  <div class="popular__item">
                    <div class="popular__img">
                      <img src="~/assets/images/image-p1.jpg" alt="">
                    </div>
                    <p class="popular__title font-md mb-sm">地名・国名</p>
                  </div>
                  <div class="popular__item">
                    <div class="popular__img">
                      <img src="~/assets/images/image-p2.jpg" alt="">
                    </div>
                    <p class="popular__title font-md mb-sm">地名・国名</p>
                  </div>
                  <div class="popular__item">
                    <div class="popular__img">
                      <img src="~/assets/images/image-p3.jpg" alt="">
                    </div>
                    <p class="popular__title font-md mb-sm">地名・国名</p>
                  </div>
                  <div class="popular__item">
                    <div class="popular__img">
                      <img src="~/assets/images/image-p4.jpg" alt="">
                    </div>
                    <p class="popular__title font-md mb-sm">地名・国名</p>
                  </div>
                </div>
                <div class="popular__btn">
                  <ModBtn :class-name="{ btn6: use }">一覧から探す</ModBtn>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import ModBtn from '~/components/ModBtn.vue'
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
import MobileHeader from '~/components/MobileHeader.vue'

export default {
  components: {
    ModBtn,
    Footer,
    Header,
    MobileHeader,
  },
  data: () => {
    return {
      backgroundImageSrc: '././assets/images/villa-1.jpg',
      use: true,
      swiperOption: {
        loop: true, //無限ループ
        grabCursor: true,
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: 1,
        speed: 1000,
        breakpoints: {
          1024: {
            slidesPerView: 2
          }
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/variables.scss";
@import "~assets/sass/mixin.scss";

.content {
  padding-top: 100px;
}

.swiper-container {
  overflow: hidden;
}

.swiper-slide {
  height: 500px;
  overflow: hidden;

  & > img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.3);
    transition: transform 1.9s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 61, 125, 0.1);
  }

  &-active {
    & > img {
      transform: none;
    }

    & .hero__title {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
}

.hero {
  &__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 20px));
    color: $cWhite;
    font-size: 25px;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease 1s, transform 0.3s ease 1s;
  }

  &__footer {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    z-index: 2;
    width: 22px;
    height: 68px;
    overflow: hidden;
  }

  &__downarrow {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 6px;
    transform: translateY(-15%);
    @include animation(
      $name: kf-arrow-anime,
      $iteration-count: infinite,
      $direction: 2s,
      $timing-function: linear
    );
  }

  &__scrolltext {
    position: absolute;
    top: 12px;
    left: -8px;
    transform: rotate(90deg);
    color: rgba($color: $cWhite, $alpha: 0.7);
    font-size: 1.1em;
    -webkit-font-smoothing: auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
}

@keyframes kf-arrow-anime {
  0%,
  50%,
  100% {
    transform: rotateY(-10%);
  }
  30% {
    transform: none;
  }
}

.houses,
.popular {

  &__header-title {
    font-weight: 600;
    margin-bottom: 6px;
  }

  &__inner {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    @media screen and (max-width: 768px){
      flex-wrap: nowrap;
      flex-direction: column;
    }
  }

  &__item {
    flex-basis: 50%;
    @media screen and (max-width: 768px){
      margin-bottom: 0;
    }

    &:nth-last-child(2),
    &:nth-last-child(3) {
      margin-bottom: 0!important;
    }

  }

  &__title {
    line-height: 1.5;
  }

  &__btn {
    text-align: center;
    flex-basis: 100%;
  }
}

.popular {

  &__inner {
    display: block;
    flex-wrap: nowrap;
    flex-direction: inherit;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 90%;
      width: 100%;
      background-color: $cBgGray;
    }
  }


  &__container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    z-index: 2;
    @media screen and (max-width: 768px){
      flex-wrap: nowrap;
      flex-direction: column;
    }
  }
  &__img {
    height: 150px;
    overflow: hidden;
    margin-bottom: 5px;
    height: 335px;
    @media screen and(max-width: 768px) {
      height: 250px;
    }

    & > img {
      object-fit: cover;
      // object-position: bottom;
      height: 100%;
      width: 100%;
    }
  }

  &__item {
    flex-basis: 23%;
  }
}

.travel {
  &__inner {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
    background-color: $cBgGray;
    position: relative;
    z-index: 0;
    @media screen and (max-width: 768px){
      flex-wrap: nowrap;
      flex-direction: column;
      padding: 15px;
    }
  }

  &__text,
  &__img {
    flex-basis: 47%;
  }

  &__img {
    height: 300px;
    box-shadow: inset 0 0 30px $cBlack;
    @media screen and (max-width: 768px){
      margin-bottom: 16px;
    }

    & > img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      position: relative;
      z-index: -1;
    }
  }

  &__title {
    font-size: 25px;
    font-weight: 600;
  }

  .purple {
    color: $cWineRed;
  }

  &__btn {
    @media screen and(max-width: 768px) {
      text-align: center;
    }
  }
}

</style>
