<template>
    <div>
        <div class="tabs">
            <ul :style="stylesTabs">
                <li
                    v-for="(item, index) in tabs"
                    :key="index"
                    :class="{ 'is-active' : item.isActive }"
                    :style="styleElement"
                >
                    <span
                        :class="{ 'is-active' : item.isActive }"
                        @click="selectTab(item)"
                    >
                        {{ item.name }}
                    </span>
                </li>
            </ul>
        </div>

        <div
            class="tabs-details"
        >
            <slot />
        </div>
    </div>
</template>

<script>
export default {
  name: "BaseTabs",
  props: {
    stylesTabs: {
      type: String,
      default: () => ''
    },
    styleElement: {
      type: String,
      default: () => ''
    },
    styleDetails: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {tabs: [], };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(item => {
        item.isActive = (item.name == selectedTab.name);
      });
    }
  }
}
</script>

<style lang="sass" scoped>
@import "/lib/css/src/partials/colors"
span
  cursor: pointer
.is-active
  span
    color: $grey-1
    //color: #333
    font-weight: 700
    cursor: pointer
    border-bottom: 2px solid #f60
//.tabs-details
//  display: grid
//  grid-template-columns: repeat(6, 1fr)
</style>