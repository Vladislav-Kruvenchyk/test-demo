<template>
    <div class="card">
        <div class="card__item">
            <div
                class="card__item title"
                @click="isShow"
            >
                <span>{{ card_item.title }}</span>
                <icon-arrow
                    :class="{'active': isActive}"
                    :width="10"
                    :height="10"
                    style-arrow="margin-top: 7px;"
                />
            </div>
            <div
                v-if="isActive"
                class="card__item text header"
            >
                <div class="card__item text-title">
                    <h1
                        class="card__item"
                    >
                        {{ card_item.text }}
                    </h1>
                    <div>
                        <icon-arrow-top
                            :class="{'active-arrow': isActive}"
                            :width="10"
                            :height="10"
                        />
                    </div>
                </div>

                <div class="card__item block-circle">
                    <div class="card__item circle" /> <span>{{ card_item.text_two }}</span>
                </div>
                <div class="card__item block-circle">
                    <div class="card__item circle" /> <span>{{ card_item.text_three }}</span>
                </div>
                <div class="card__item block-circle">
                    <div class="card__item circle" /> <span>{{ card_item.text_four }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IconArrowTop from "../../lib/js/icons/IconArrowTop.vue";
import IconArrow from "../../lib/js/icons/IconArrow.vue";
export default {
  name: "CardItem",
  components: {IconArrowTop, IconArrow},
  props: {
    card_item: {
      type: [Object, Array],
      default: () => null
    }
  },
  data() {
    return {
        isActive: false,
        width: 320
    }
  },
  mounted() {

  },
  methods: {
    isShow() {
        this.isActive = !this.isActive
    },
  }

}
</script>

<style lang="sass" scoped>
.card
  display: flex
  flex-direction: column
  border-bottom:  2px solid #D0DBF1
  &__item
    display: flex
    flex-direction: column
    &.text-title
      padding: 20px 20px 20px 20px
      align-items: center
      justify-content: space-between
      flex-direction: row
    &.block-circle
      flex-direction: row
      padding: 0px 20px 20px 20px
    &.circle
      min-width: 12px
      height: 12px
      border-radius: 50%
      border: 2px solid #2B41B7
      margin-top: 6px
      margin-right: 10px
    &.title
      justify-content: space-between
      width: 100%
      flex-direction: row
      padding: 20px 20px 20px 20px
      cursor: pointer
      span
        font-weight: 800
        font-size: 16px
        line-height: 24px
    &.text
      flex-direction: column
      background: #FAF8F6
      h1
        font-weight: 800
        font-size: 16px
        line-height: 24px
        color: #2B41B7
      span
        font-weight: 600
        font-size: 14px
        line-height: 24px
        color: #0D2A54


.active
  transition: 1s ease
  transform: rotate(180deg)

.active-arrow
  margin-bottom: 26px

.header
  overflow: hidden
  top: 15px
  height: 320px
  animation: ani 1s linear forwards
  @media (max-width: 390px)
      height: 390px


@keyframes ani
    0%
      left: 40px
      width: 0
    100%
      left: 0
      width: 100%

</style>