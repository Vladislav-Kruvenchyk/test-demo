<template>
    <svg
        :width="width"
        :height="height"
        viewBox="0 0 12 8"
        :style="styleArrow"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1 1L6 6L11 1"
            stroke="#0D2A54"
            stroke-width="2"
        />
    </svg>
</template>

<script>
export default {
  name: "IconArrow",
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