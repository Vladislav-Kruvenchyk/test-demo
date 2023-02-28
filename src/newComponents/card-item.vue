<template>
    <div class="card">
        <div class="card__item">
            <div class="card__item title">
                <span @click="show">{{ card_item.title }}</span>
                <icon-arrow-right :class="{'active': isActive}" />
            </div>
            <div
                v-if="isActive"
                class="card__item text"
            >
                <span @click="close">close</span>
                <span>{{ card_item.text }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import IconArrowRight from "../../lib/js/icons/IconArrowRight.vue";

export default {
  name: "CardItem",
  components: {IconArrowRight},
  props: {
    card_item: {
      type: [Object, Array],
      default: () => null
    }
  },
  data() {
    return {
        isActive: false
    }
  },
  methods: {
    show() {
        this.isActive = true
    },
    close() {
      this.isActive = false
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  display: flex
  flex-direction: column
  &__item
    display: flex
    flex-direction: column
    &.title
      justify-content: space-between
      width: 100%
      flex-direction: row
    &.text
      flex-direction: column
      background-color: #0F2026

.active
  transition: 2s ease
  transform: rotate(180deg)

</style>