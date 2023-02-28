<template>
    <div class="container">
        <div class="container__menu">
            <h1>fdsaflgs</h1>
            <card-item
                v-for="item in cardData"
                :key="item.id"
                :card_item="item"
            />
        </div>
    </div>
</template>

<script>
import CardItem from "@/components/card-item.vue";

export default {
  name: "ContentWrapper",
  components: {CardItem},
  data() {
    return {
      cardData: [
        {id: 1, title: 'foo1', text: '1'},
        {id: 2, title: 'foo2', text: '2'},
        {id: 3, title: 'foo3', text: '3'},
        {id: 4, title: 'foo4', text: '4'}
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

.container
  display: flex
  justify-content: center
  align-items: center
  height: 100vh

  &__menu
    width: 30%
    border: 2px solid red
    border-radius: 8px

</style>