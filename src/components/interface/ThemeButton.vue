<template>
    <button
        @click="pageSelected"
        :aria-label="ariaLabel"
        class="navigation-button padding-small"
        :class="{ selected: page === selectedPage }"
        ><strong>{{ page }}</strong>
    </button>
</template>

<script>

export default {
    name: 'ThemeButton',
    props: {
        page: {
            type: String,
            required: true,
        },
        ariaLabel: {
            type: String,
        },
        selectedPage: {
            type: String,
            default: '',
        },
    },
    methods: {
        pageSelected() {
            this.$emit('pageSelected', this.page)
        },
    },
}
</script>
