<template>
  <div class="home-main">
    <div class="home-title">HOME</div>

    <div><img class="home-hr" :src="require(`~/assets/hr.png`)" alt="" /></div>

    <div>
      <Calender />
    </div>

    <div>
      <button class="hw-button1" @click="unchiD">UNCHI</button>
      <button class="hw-button1" @click="urineD">URINE</button>
      <button class="hw-button1" @click="foodD">FOOD</button>
    </div>

    <div class="comp-button-main">
      <div class="comp-button" v-if="isunchiD">
        <UnchiData />
      </div>

      <div class="comp-button" v-if="isurineD">
        <UrineData />
      </div>

      <div class="comp-button" v-if="isfoodD">
        <FoodData />
      </div>
    </div>
  </div>
</template>

<script>
import UnchiData from '~/components/UnchiData'
import UrineData from '~/components/UrineData'
import FoodData from '~/components/FoodData'

export default {
  components: {
    UnchiData,
    UrineData,
    FoodData,
  },
  data() {
    return {
      isunchiD: false,
      isurineD: false,
      isfoodD: false,
    }
  },

  mounted() {
    this.$store.dispatch('nuxtClientInit')
  },

  methods: {
    data() {
      console.log(new Date())
    },

    unchiD() {
      this.isunchiD = !this.isunchiD
    },
    urineD() {
      this.isurineD = !this.isurineD
    },
    foodD() {
      this.isfoodD = !this.isfoodD
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@700&display=swap');

$button-opacity: 0.8;

@mixin button-style(
  $background-color: rgb(235, 139, 139),
  $color: rgb(46, 0, 0),
  $overflow: hidden,
  $padding: 1% 5% 1% 5%,
  $margin: 0 1.5% 0 1.5%,
  $position: relative,
  $border-radius: 5%
) {
  background-color: $background-color;
  color: $color;
  overflow: $overflow;
  padding: $padding;
  margin: $margin;
  position: $position;
  border-radius: $border-radius;
}
@mixin button-style-before(
  $background-color: #fff,
  $content: '',
  $display: block,
  $opacity: 0.3,
  $transform: rotate(-50deg),
  $position: absolute,
  $bottom: -10px,
  $right: -330px,
  $width: 500px,
  $height: 500px
) {
  background-color: $background-color;
  content: $content;
  display: $display;
  opacity: $opacity;
  transform: $transform;
  position: $position;
  bottom: $bottom;
  right: $right;
  width: $width;
  height: $height;
}
@mixin button-style-after(
  $background-color: #fff,
  $content: '',
  $display: block,
  $opacity: 0.3,
  $transform: rotate(-70deg),
  $position: absolute,
  $bottom: -100px,
  $right: -500px,
  $width: 500px,
  $height: 500px
) {
  background-color: $background-color;
  content: $content;
  display: $display;
  opacity: $opacity;
  transform: $transform;
  position: $position;
  bottom: $bottom;
  right: $right;
  width: $width;
  height: $height;
}

.home-title {
  text-align: center;
  font-size: 200%;
  margin-top: 2%;
  margin: 5% 0 5% 0;
  font-family: 'Gluten', cursive;
  color: rgb(133, 110, 110);
}
.home-hr {
  width: 40%;
  margin: -5% auto 5% auto;
}


.hw-button1 {
  @include button-style();

  &::before {
    @include button-style-before();
  }

  &::after {
    @include button-style-after();
  }
  &:hover {
    opacity: $button-opacity;
  }
}

.home-main {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.comp-button {
  width: 80%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
}
.comp-button-main {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
}
</style>
