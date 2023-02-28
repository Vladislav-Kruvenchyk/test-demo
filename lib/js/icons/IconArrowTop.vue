<template>
    <svg
        :width="width"
        :height="height"
        :style="styleArrow"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M11 7L6 2L1 7"
            stroke="#2B41B7"
            stroke-width="2"
        />
    </svg>
</template>

<script>
export default {
  name: "IconArrowTop",
  props: {
    width: {
      type: Number,
      default: 12
    },
    height: {
      type: Number,
      default: 12
    },
    styleArrow: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>