<template>
    <div>
        <nav :class="isMobile ? 'mobile-nav' : ''">
            <ul
                id="nav-tab"
                class="nav nav-tabs"
            >
                <li
                    v-for="(item, index) of items"
                    :key="index"
                    class="nav-item"
                    @click="$emit('change', index)"
                >
                    <a
                        :class="[
                            'nav-link tab-name',
                            isMobile ? 'nav-link-mobile' : '',
                            activeTab === index + 1 ? 'active' : ''
                        ]"
                        :style="linkStyle"
                        data-toggle="tab"
                        :href="`#${item.id}`"
                    >
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </nav>
        <div class="tab-content">
            <slot />
        </div>      
    </div>
</template>

<script>

export default {
    name: 'BaseNav', 
    components: {
    },
    props: {
        items: {
            type: Array,
            required: true 
        },
        linkStyle: {
            type: String
        },
        isMobile: {
            type: Boolean,
            default: false
        },
        activeTab: {
            type: Number,
            default: 1,
        },
    }
}
</script>

<style lang="sass" scoped>
@import 'lib/css/src/partials/_geometrics'
@import 'lib/css/src/partials/_colors'
.mobile-nav
    background-color: $white-1
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2)
    //border-radius: $big-border-radius
    padding: 15px
</style>