<template>
  <div class="stats">
    <div class="bio">
      <p>{{ currentProduct.copy }}</p>
    </div>
    <button @click="toggleFollow" class="follow" key="follow">
      <span v-if="following">&#10004; Following</span>
      <span v-else>Add to Cart</span>
    </button>
  </div>

</template>

<script>
export default {
  data(){
    return {

      following: false,
    }
  },

  props: {
    currentProduct: {
      type: Object
    }
  },
   methods: {

     toggleFollow() {
      if (this.following) {
        this.$store.commit('removeFollower')
      } else {
        this.$store.commit('addFollower')
      }
      this.following = !this.following
    }
   }
}
</script>

<style lang="scss" scoped>
.stats {
    font-family: 'Playfair Display', serif;
    position: absolute;
    right: 0;
    top: 112px;
    width: 60%;
    justify-content: space-between;
    line-height: 1.2;
    opacity: 0;
    animation: 0.4s fadeIn;
    animation-delay: 0.8s;
    animation-fill-mode: forwards;
    transform:translate3d(0, -40px, 0) scale(1);
}
@keyframes fadeIn{
  from {
    opacity: 0;
    transform:translate3d(0, -40px, 0) scale(1);
  }
  to{
    opacity:1;
    transform:translate3d(0, 0, 0) scale(1);
  }
}
@mixin group($top, $left) {

  padding: 15px;

  display: block;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: 0.4s all ease-out;
}
.follow {
  font-weight: bold;
  width: 150px;
  transition: 1s all ease;
  margin-top: 15px;
  @include group(320px, 220px);
  &:focus {
    outline: 1px dotted rgb(5, 134, 106);
  }
}
.lg {
  font-size: 40px;
}

.bio {
  width: 60%;
  line-height: 1.4;
}

@media screen and (max-width: 980px) {
  .bio {
    display: none;
  }
  .stats {
    justify-content: flex-end;
    div {
      padding-left: 20px;
    }
  }
}

@media screen and (max-width: 600px) {
  .stats {
    display: none;
  }
}
</style>