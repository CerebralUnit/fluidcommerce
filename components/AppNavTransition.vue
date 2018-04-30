<template>
  <transition-group tag="div">




  </transition-group>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import IconBase from './IconBase.vue'
import IconMail from './IconMail.vue'
import IconPlus from './IconPlus.vue'
import IconMapPin from './IconMapPin.vue'
import IconCalendar from './IconCalendar.vue'

export default {
  components: {
    IconBase,
    IconMail,
    IconPlus,
    IconMapPin,
    IconCalendar
  },
  data() {
    return {
      following: false,
      follow: 'follow',
      followclass: 'active-follow',
      activeUser: 'profile-photo',
      secondaryUser: 'profile-photo-secondary'
    }
  },
  computed: {
    ...mapState(['page', 'users', 'indexedUser']),
    ...mapGetters(['selectedUser'])
  },
  methods: {
    changeUser(i) {
      this.$store.commit('changeUser', i)
      if (this.page === 'category') {

        const el = this.$refs.profile0[0]
        //transform: translate3d(100% * floor($i%4), 200px * floor($i/4), 0);
        el.style.transform = `translate3d(${100 *
          Math.floor(this.indexedUser % 4)}%, ${ 200 * Math.floor(this.indexedUser / 4)}px, 0)`
        let $router = this.$router;
        setTimeout(function(){
           $router.push('/');
        })
      }
    },
    toggleFollow() {
      if (this.following) {
        this.$store.commit('removeFollower')
      } else {
        this.$store.commit('addFollower')
      }
      this.following = !this.following
    },
    addPlace() {
      if (!this.saved && this.page !== 'index') {
        this.addAnimation()
        this.saved = true
      } else {
        this.removeAnimation()
        this.saved = false
      }
    },
    addAnimation() {
      //I love prettier, but it does make this animation code a lot longer and less legible than it could be :/
      const tl = new TimelineMax()

      tl.add('start')
      tl.to(
        '.plus',
        0.75,
        {
          rotation: -360,
          transformOrigin: '50% 50%',
          ease: Expo.easeOut
        },
        'start'
      )
      tl.to(
        '.line2',
        0.7,
        {
          scaleY: 0.5,
          x: -2,
          rotation: -45,
          transformOrigin: '50% 100%',
          ease: Expo.easeOut
        },
        'start'
      )
      tl.to(
        '.line1',
        0.7,
        {
          rotation: -50,
          x: 7,
          scaleX: 3,
          transformOrigin: '50% 100%',
          ease: Expo.easeOut
        },
        'start'
      )
      tl.fromTo(
        '.saveinfo',
        0.5,
        {
          autoAlpha: 0
        },
        {
          autoAlpha: 1,
          ease: Sine.easeOut
        },
        'start'
      )
      tl.to(
        '.saveinfo',
        0.4,
        {
          autoAlpha: 0,
          ease: Expo.easeIn
        },
        'start+=1'
      )

      return tl
    },
    removeAnimation() {
      const tl = new TimelineMax()

      tl.add('begin')
      tl.to(
        '.plus',
        0.75,
        {
          rotation: 0,
          transformOrigin: '50% 50%',
          ease: Expo.easeOut
        },
        'begin'
      )
      tl.to(
        '.line2',
        0.7,
        {
          scaleY: 1,
          x: 0,
          rotation: 0,
          transformOrigin: '50% 100%',
          ease: Expo.easeOut
        },
        'begin'
      )
      tl.to(
        '.line1',
        0.7,
        {
          rotation: 0,
          x: 0,
          scaleX: 1,
          transformOrigin: '50% 100%',
          ease: Back.easeOut
        },
        'begin'
      )

      tl.timeScale(1.2)

      return tl
    }
  }
}
</script>

<style lang="scss" scoped>
aside p {
  text-align: right;
  position: absolute;
  right: 0;
  top: 250px;
  color: white;
}

.calendar,
.map-pin {
  transition: 0.4s all ease-out;
  opacity: 0;
}

@mixin group($top, $left) {
  position: absolute;
  top: $top;
  left: $left;
  display: block;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: 0.4s all ease-out;
}

@mixin online($size, $position, $border) {
  position: absolute;
  background: #07dc3c;
  width: $size;
  height: $size;
  right: $position;
  bottom: $position;
  border: $border;
  opacity: 0;
}

.profile-photo {
  width: 200px;
  @include group(150px, 0);
  img {
    border-radius: 4px;
  }
  .online {
    @include online(5px, 15px, none);
  }
}

.profile-photo-secondary {
  @include group(150px, 0);
  width: 200px;
  opacity: 0;
  transition: none;
  img {
    border-radius:0;
  }
  .online {
    @include online(5px, 15px, none);
  }
}

.profile-photo,
.profile-photo-secondary {
  img {
    transition: 0.4s all ease;
    width: 100%;
    cursor: pointer;
  }
}

@for $i from 0 through 23 {
  .profile-#{$i}
  {
      transform: translate3d(100% * floor($i%4), 200px * floor($i/4), 0);

  }
}


.follow {
  font-weight: bold;
  width: 150px;
  transition: 1s all ease;
  @include group(320px, 220px);
  &:focus {
    outline: 1px dotted rgb(5, 134, 106);
  }
}

.saveinfo {
  color: white;
  position: absolute;
  top: 194px;
  font-size: 20px;
  right: 56px;
  text-align: right;
  visibility: hidden;
  opacity: 0;
}

.active-follow {
  background: rgb(5, 134, 106);
}

.profile-name {
  font-size: 35px;
  @include group(355px, 0);
}

.side-icon {
  position: absolute;
  top: 220px;
  right: 0;
  display: block;
  transition: 0.4s all ease-out;
  padding: 12px 12px 9px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0;
  cursor: pointer;
}

//animations
.place {
  .follow {
    transform: translate3d(-215px, -80px, 0);
  }
  .profile-photo {
    transform: translate3d(-20px, -100px, 0) scale(0.75);
  }
  .profile-name {
    transform: translate3d(140px, -125px, 0) scale(0.75);
    color: white;
  }
  .side-icon {
    transform: translate3d(0, -40px, 0);
    background: rgba(255, 255, 255, 0.9);
  }
  .calendar {
    opacity: 1;
  }
}

.category {
  .follow {
    opacity: 0;
    transition: none;
  }
  .profile-photo {
    transform: translate3d(0, 0, 0);
    img {
      border-radius: 0;
    }
  }
  .profile-photo,
  .profile-photo-secondary  {
    transition: 0.4s all ease-in-out;
    opacity: 1;
    z-index: 1;
  }
  .profile-photo,
  .profile-photo-secondary {
    img:hover {
      transition: 0.2s all ease;
      border: 10px solid white;
    }
  }
  .online {
    opacity: 1;
  }
  .profile-name {
    transform: translate3d(0px, -125px, 0);
    color: white;
  }
  .side-icon {
    transform: translate3d(0, -40px, 0);
    background: rgba(255, 255, 255, 0.9);
  }
  .map-pin {
    opacity: 1;
  }
}

.index {
  .profile-photo {
    transform: translate3d(0, 0, 0) scale(1);
  }
}

.index .profile-photo.profile-0 {
  transform: translate3d(0, 0, 0) scale(1) !important;
}

//make the icon aligned with the avatars that are similar on mobile
@media screen and (max-width: 600px) {
  .category,
  .place {
    .side-icon {
      transform: translate3d(0, -65px, 0);
      padding: 14px 14px 12px;
    }
  }
}

.items,
.list-move {
  transition: all 0.4s ease;
}

.list-leave-active {
  position: absolute;
}

#text {
  transform-origin: 50% 50%;
}

svg {
  fill: #a8dadc;
}

@media screen and (max-width: 600px) {
  ul,
  aside {
    display: none;
  }
}
</style>