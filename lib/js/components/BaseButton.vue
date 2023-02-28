<template>
    <button
        v-if="!isLoading"
        class="agri-button"
        :class="computedType"
        :style="buttonStyle"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <slot v-if="!isLoading" />
        <icon-loading
            v-else
            size="40px"
            color="#eed713"
        />
    </button>
</template>

<script>
export default {
    name: "BaseButton",
    inheritAttrs: false,
    props: {
        buttonType: {
            type: String,
            default: () => 'primary',
            styleBoard(value) {
            return [
              'primary',
              'dismiss',
              'empty',
              'lightgrey',
              'delete',
              'white',
              'show-details',
              'yellow',
              'red',
              'orange',
              'blue',
            ].includes(value)
            },
        },
        buttonStyle: {
            type: [String, Object]
        },
        isLoading: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        computedType() {
            if (this.isLoading) {
                return 'agri-button-loading';
            }
            return 'agri-button-' + this.buttonType.trim();
        }
    }
}
</script>

<style lang="sass" scoped>
    @import 'lib/css/src/partials/_geometrics'
    @import 'lib/css/src/partials/_colors'
    @import 'lib/css/src/partials/_typography.sass'
    @import 'lib/css/src/mixins/setTypography.mixin.sass'
    @import 'lib/css/src/mixins/breakpoints.mixin.sass'

    .agri-button
        width: 228px
        height: 48px
        background: none
        border: none
        outline: none
        display: flex
        align-items: center
        justify-content: center
        column-gap: 7px
        color: #fff
        font-size: 12px
        line-height: $default-line-height
        text-transform: uppercase
        @include respond-to('small')
            width: unset
            min-width: 97px
            height: 40px
        &:disabled
            background: $grey-4
            color: $grey-3
            pointer-events: none
            box-shadow: none

    .agri-button-loading
        opacity: .5
        pointer-events: none

    .agri-button-primary
        background: $green-1
        border-radius: $default-border-radius
        //box-shadow: 0 21px 20px -15px rgba($green-1, 0.24)
        transition: 0.2s all
        & *
            @include set-button-text
        &:hover
            box-shadow: 0 21px 20px -15px rgba($red-3, 0.35)
            background: $green-2
    .agri-button-blue
        background: #2280D3
        border-radius: $default-border-radius
        //box-shadow: 0 21px 20px -15px rgba($green-1, 0.24)
        transition: 0.2s all
        & *
            @include set-button-text
        &:hover
            box-shadow: 0 21px 20px -15px rgba(#2280D3, 0.35)
            background: #2280D3

    .agri-button-dismiss
        background: $grey-3
        border-radius: $default-border-radius
        //box-shadow: 0 21px 20px -15px rgba($grey-3, 0.24)
        transition: 0.2s all
        & *
            @include set-button-text
        &:hover
            box-shadow: 0 21px 20px -15px rgba(#a2a2a2, 0.35)
            background: #a2a2a2

    .agri-button-empty
        width: unset
        height: unset
        background: none
        border-radius: $default-border-radius
        box-shadow: none
        transition: 0.2s all
        color: $grey-6
        padding: 0
        & *
            @include set-button-text
        &:hover
            color: $green-1

    .agri-button-lightgrey
        background: $grey-8
        border-radius: $default-border-radius
        //box-shadow: 0 21px 20px -15px rgba($grey-3, 0.14)
        transition: 0.2s all
        color: #646464
        & *
            @include set-button-text
        &:hover
            box-shadow: 0 21px 20px -15px rgba($grey-3, 0.10)
            background: $grey-1


    .agri-button-delete
        background: $red-1
        border-radius: $default-border-radius
        transition: 0.2s all

        &:hover
            box-shadow: 0px 21px 20px -15px rgba($red-1, 0.24)

    .agri-button-white
        background: white
        border: solid 1px $green-1
        border-radius: $default-border-radius
        //box-shadow: 0 21px 20px -15px rgba($grey-3, 0.14)
        transition: 0.2s all
        color: $green-1

        & *
            @include set-button-text
        &:hover
            box-shadow: 0 21px 20px -15px rgba($grey-3, 0.10)

    .agri-button-red
        background: white
        border: solid 1px $red-1
        border-radius: $default-border-radius
        //box-shadow: 0 21px 20px -15px rgba($red-1, 0.14)
        transition: 0.2s all
        color: $red-1

        & *
            @include set-button-text
        &:hover
            box-shadow: 0 21px 20px -15px rgba($grey-3, 0.10)

    .agri-button-orange
        background: #f1a527
        border: solid 1px #f1a527
        border-radius: $default-border-radius
        //box-shadow: 0 21px 20px -15px rgba(#ffdb59, 0.14)
        transition: 0.2s all
        color: #fff

        & *
            @include set-button-text
        &:hover
            box-shadow: 0 21px 20px -15px rgba(#ffebc9, 0.35)

    .agri-button-yellow
        background: #ffdb59
        border: solid 1px #ffdb59
        border-radius: $default-border-radius
        //box-shadow: 0 21px 20px -15px rgba(#ffdb59, 0.14)
        transition: 0.2s all
        color: #5e5e5e

        & *
            @include set-button-text
        &:hover
            box-shadow: 0 21px 20px -15px rgba(#ffdb59, 0.10)

    .agri-button-show-details
        @extend .agri-button-empty
        color: $green-1
        display: inline
    @media (max-width: 768px)
        .agri-button
            min-width: 0
</style>