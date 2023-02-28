<template>
    <div class="container">
        <div class="container__menu">
            <!--            <h1>fdsaflgs</h1>-->
            <card-item
                v-for="item in cardData"
                :key="item.id"
                :card_item="item"
            />
        </div>
    </div>
</template>

<script>
import CardItem from "@/newComponents/card-item.vue";

export default {
  name: "ContentWrapper",
  components: {CardItem},
  data() {
    return {
      cardData: [
        {
          id: 1,
          title: 'The analysis',
          text: 'To take into account on user level data',
          text_two: 'Do you have one user in more than one variant of the same AB test?',
          text_three: 'Are you users actually getting the treatment we expect them to get?',
          text_four: 'Do we have enough users in our AB test? Are those users representative for the total population?'
        },
        {
          id: 2,
          title: 'Our data',
          text: 'To take into account on user level data',
          text_two: 'Do you have one user in more than one variant of the same AB test?',
          text_three: 'Are you users actually getting the treatment we expect them to get?',
          text_four: 'Do we have enough users in our AB test? Are those users representative for the total population?'
        },
        {
          id: 3,
          title: 'Our study case',
          text: 'To take into account on user level data',
          text_two: 'Do you have one user in more than one variant of the same AB test?',
          text_three: 'Are you users actually getting the treatment we expect them to get?',
          text_four: 'Do we have enough users in our AB test? Are those users representative for the total population?'
        },
        {
          id: 4,
          title: 'Hands on analyzing',
          text: 'To take into account on user level data',
          text_two: 'Do you have one user in more than one variant of the same AB test?',
          text_three: 'Are you users actually getting the treatment we expect them to get?',
          text_four: 'Do we have enough users in our AB test? Are those users representative for the total population?'
        },

        {
          id: 5,
          title: 'Hands on analyzing',
          text: 'To take into account on user level data',
          text_two: 'Do you have one user in more than one variant of the same AB test?',
          text_three: 'Are you users actually getting the treatment we expect them to get?',
          text_four: 'Do we have enough users in our AB test? Are those users representative for the total population?'
        }
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
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 4px 17px rgba(0, 0, 0, 0.14), 0px 4px 22px rgba(0, 0, 0, 0.12)
    border-radius: 8px
    @media (max-width: 320px)
      width: 95%

</style>