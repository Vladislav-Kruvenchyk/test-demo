<template>
    <carousel-3d>
        <slide
            v-for="(item, index) in items"
            :key="item.id"
            :index="index"
        >
            <p>{{ item.name }}</p>
            <!--            <img-->
            <!--                :src="require('/lib/img/' + item.img)"-->
            <!--                alt=""-->
            <!--            >-->
        </slide>
    </carousel-3d>
</template>

<script>
import {Carousel3d, Slide} from "vue-carousel-3d";

export default {
  name: "BaseSlider",
  components: {
    Carousel3d,
    Slide
  },
  props: {
    items: {
      type: [Object, Array],
      default: () => {}
    }

  }
}
</script>

<style scoped>

</style>