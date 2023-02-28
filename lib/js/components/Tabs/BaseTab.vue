<template>
    <div
        v-show="isActive"
        :style="styleChildren"
    >
        <slot />
    </div>
</template>

<script>
export default {
  name: "BaseTab",
  props: {
    selected: {
      type:Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    styleChildren: {
      type: String,
      default: () => '',
    }
  },

  data() {
    return {
      isActive: false
    };

  },
  mounted() {
    this.isActive = this.selected;

  }
}
</script>

<style scoped>

</style>