<template>
  <transition-group tag="div">


    <div v-for="(product, i) in products"
      @click="selectProduct(i)"
      :key="product.sku"
      :class="[product === currentProduct ? activeProduct : secondaryProduct, `profile-${i}`]"
      :ref="`profile${i}`"
    >
      <img :src="product.img" />
    </div>
    <div v-for="(product, i) in products"
      @click="selectProduct(i)"
      :key="'sku-' + product.sku"
      :class="[product === currentProduct ? activeProductSku : secondaryProductSku, `product-sku-${i}`,`product-sku`]"
      :ref="`productsku${i}`"
    >
      <div>{{product.sku}}</div>
    </div>
     <div v-for="(product, i) in products"
      @click="selectProduct(i)"
      :key="'name-' + product.sku"
      :class="[product === currentProduct ? activeProductName : secondaryProductName, `product-name-${i}`,`product-name`]"
      :ref="`productname${i}`"
    >

      <div>{{product.name}}</div>
    </div>
     <div v-for="(product, i) in products"
      @click="selectProduct(i)"
      :key="'price-' + product.sku"
      :class="[product === currentProduct ? activeProductPrice : secondaryProductPrice, `product-price-${i}`,`product-price`]"
      :ref="`productprice${i}`"
    >
      <div>${{product.currentPrice}}</div>
    </div>






    <div key="saveinfo" class="saveinfo">Saved!</div>

    <aside key="aside">
      <p class="map-pin">
        <icon-base icon-name="map pin" width="18" height="18">
          <icon-map-pin />
        </icon-base>
        United States
      </p>

      <p class="calendar">
        <icon-base icon-name="calendar" width="18" height="18">
          <icon-calendar />
        </icon-base>
        {{ currentProduct.copy }} days traveling
      </p>
    </aside>
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
      activeProduct: 'profile-photo',
      activeProductPrice: 'primary-attribute product-price',
      activeProductSku: 'primary-attribute product-sku',
      activeProductName: 'primary-attribute product-name',
      secondaryUser: 'profile-photo-secondary',
      secondaryProduct: 'profile-photo-secondary',
      secondaryProductPrice: 'secondary-attribute product-price-secondary',
      secondaryProductSku: 'secondary-attribute product-sku-secondary',
      secondaryProductName: 'secondary-attribute product-name-secondary'

    }
  },
  computed: {
    ...mapState(['page', 'users', 'indexedUser', 'products', 'indexedProduct']),
    ...mapGetters(['selectedUser', 'currentProduct'])
  },
  methods: {
    changeUser(i) {
      this.$store.commit('changeUser', i)
      if (this.page === 'category') {

        const el = this.$refs.profile0[0];
        //transform: translate3d(100% * floor($i%4), 200px * floor($i/4), 0);
        el.style.transform = `translate3d(${100 *
          Math.floor(this.indexedUser % 5)}%, ${ 200 * Math.floor(this.indexedUser / 5)}px, 0)`
        let $router = this.$router;
        setTimeout(function(){
           $router.push('/');
        })
      }
    },
    selectProduct(i) {
      const el = this.$refs.profile0[0];
      const sku    = this.$refs.productsku0[0];
      const price  = this.$refs.productname0[0];
      const name   = this.$refs.productprice0[0];

      this.$store.commit('selectProduct', i)
      if (this.page === 'category') {

        // console.log(el);

        // el.style.transform = `translate3d(${100 *
        //   Math.floor(this.indexedProduct % 5)}%, ${ 400 * Math.floor(this.indexedProduct / 5)}px, 0)`

        // sku.style.transform = `translate3d(${100 *
        //   Math.floor(this.indexedProduct % 5)}%, ${ 400 * Math.floor(this.indexedProduct / 5)}px, 0)`

        // price.style.transform = `translate3d(${100 *
        //   Math.floor(this.indexedProduct % 5)}%, ${ 400 * Math.floor(this.indexedProduct / 5)}px, 0)`

        // name.style.transform = `translate3d(${100 *
        //   Math.floor(this.indexedProduct % 5)}%, ${ 400 * Math.floor(this.indexedProduct / 5)}px, 0)`


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
  top: 0;
  left: $left;
  padding: 15px;

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
  width: 20%;
  @include group(400px, 0);

  height: 400px;
  img {
    border-radius: 4px;
  }
  .online {
    @include online(5px, 15px, none);
  }
}

.profile-photo-secondary {
  @include group(400px, 0);
  width: 20%;
  opacity: 0;
  transition: none;

  height: 400px;

  img {
    border-radius:0;
  }
  .online {
    @include online(5px, 15px, none);
  }
}

.secondary-attribute{
   opacity: 0;
  transition: none;
}

.profile-photo,
.profile-photo-secondary {
  img {
    transition: 0.4s all ease;
    width: 100%;
    cursor: pointer;
  }
}
.product-sku,
.product-name,
.product-price{
   @include group(400px, 0);
   height: auto;
   margin-top: 225px;
   z-index: 1;
   padding: 0 15px;
   border: none;
   width: 20%;
   background:transparent;
}

.product-sku {

   height: auto;
   margin-top: 265px;
}

.product-name {

   height: auto;
   margin-top: 285px;
}

.product-price{

   height: auto;
   margin-top: 325px;
}
@for $i from 0 through 63 {
  .profile-#{$i},
  .product-sku-#{$i},
  .product-name-#{$i},
  .product-price-#{$i}
  {
      transform: translate3d(100% * floor($i%5), 400px * floor($i/5), 0);
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

    img {
      border-radius: 0;
    }
  }
  .profile-photo,
  .profile-photo-secondary  {
    transition: 0.4s all ease-in-out;
    opacity: 1;
    z-index: 1;
      background:#fff;
  border: 1px solid #f2f2f2;
  }

  .secondary-attribute  {
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
  .profile-name
  {
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
  .profile-photo{
    width: 40%;
  }
   .product-name.primary-attribute {
    left: 40%;
    font-size: 30px;
    width: 60%;
    margin-top: 10px;
    padding: 0;
  }
  .primary-attribute.product-price {
    left: 40%;
    margin-top: 75px;
    padding: 0;
    font-size: 24px;
}
  .profile-photo,
  .primary-attribute {
    transform: translate3d(0, 0, 0) scale(1);
  }
   .primary-attribute.product-sku {
    left: 40%;
    margin-top: 45px;
    padding: 0;
    font-size: 18px;
    color: #888;
}
  .profile-photo-secondary,
  .secondary-attribute{
    z-index: -1;
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