<template>
  <section :class="{
    'main place' : (page === 'place'),
    'main category' : (page === 'category'),
    'main index' : (page === 'index')
  }">


    <app-body-transition />

        <app-stats v-if="page === 'index'" :currentProduct="currentProduct" />
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { TimelineMax, Expo, Sine, Back } from 'gsap'
import AppStats from './AppStats.vue'
import IconBase from './IconBase.vue'
import AppBodyTransition from './AppBodyTransition.vue'

export default {
  data() {
    return {
      saved: false,
      menuOpened: false
    }
  },
  components: {
    AppStats,
    IconBase,
    AppBodyTransition
  },
  methods: {
    openMenu() {
      TweenMax.to('.first', 0.2, {
        x: 18,
        ease: Sine.easeOut
      })
      TweenMax.to('.last', 0.2, {
        x: -18,
        ease: Sine.easeOut
      })
      TweenMax.staggerTo(
        '.first, .middle, .last',
        0.2,
        {
          fill: '#7eebe6',
          ease: Sine.easeOut
        },
        0.04
      )
    },
    closeMenu() {
      TweenMax.to('.first', 0.2, {
        x: 0,
        ease: Sine.easeIn
      })
      TweenMax.to('.last', 0.2, {
        x: 0,
        ease: Sine.easeIn
      })
      TweenMax.to('.first, .middle, .last', 0.2, {
        fill: '#fff'
      })
    }
  },
  computed: {
    ...mapState(['page']),
    ...mapGetters(['selectedUser']),
    ...mapGetters(['currentProduct'])
  },
  filters: {
    firstName(input) {
      var lastIndex = input.lastIndexOf(' ')
      return input.substring(0, lastIndex)
    }
  },
  watch: {
    menuOpened(val) {
      if (val) {
        this.openMenu()
      } else {
        this.closeMenu()
      }
    }
  }
}
</script>

<style scoped lang="scss">
section.main {
    max-width: 1400px;
    margin: 0 auto;
    display: block;
    position: relative;
    min-height: calc(100vh - 288px);
}
header {
  width: 100vw;
  height: 80px;
  position: relative;
  &:before {
    content: '';
    z-index: 10;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: -moz-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 36%,
      rgba(0, 0, 0, 0.65) 100%
    ); /* FF3.6-15 */
    background: -webkit-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 36%,
      rgba(0, 0, 0, 0.65) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 36%,
      rgba(0, 0, 0, 0.65) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient(
        startColorstr='#00000000',
        endColorstr='#a6000000',
        GradientType=1
      ); /* IE6-9 fallback on horizontal gradient */
    opacity: 0.6;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
  }
}

@mixin header ($imgurl) {
  background: url($imgurl) center center;
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 300px;
}

.header-img1 {
  @include header('/header1.jpg');
}

.header-img2 {
  @include header('/header2.jpg');
}

.header-img3 {
  @include header('/header3.jpg');
}

.bk-enter-active,
.bk-leave-active {
  transition: all 0.4s ease;
}

.bk-enter,
.bk-leave-to {
  transform: scale(1.1) translateZ(0);
  opacity: 0;
}



.nav-wrapper {
  width: 100vw;
  position: relative;
  z-index: 1000;
  background: rgba(4, 67, 98, 0.25);
}

@media screen and (max-width: 1030px) {
  .nav-wrapper {
    padding: 0 20px;
  }
}

ul {
  list-style: none;
  padding: 15px 0;
  li {
    display: inline-block;
    margin-right: 40px;
  }
  a,
  a:active,
  a:visited {
    color: white;
    text-decoration: none;
  }
}

@media screen and (max-width: 600px) {
  ul {
    display: none;
  }
}

.nuxt-link-active {
  font-weight: bold;
}

nav {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.menu {
  position: absolute;
  right: 0;
  top: 8px;
  cursor: pointer;
}
</style>