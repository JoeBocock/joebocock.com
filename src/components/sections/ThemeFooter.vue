<template>
        <div class="width-content flex space-around flex-center text-medium">
            <theme-button @page-selected="changePage" :class="{ selected: 'who' === page }" page="who" ariaLabel="Who am I?"></theme-button>
            <theme-button @page-selected="changePage" :class="{ selected: 'what' === page }" page="what" ariaLabel="What do I enjoy?"></theme-button>
            <theme-button @page-selected="changePage" :class="{ selected: 'work' === page }" page="work" ariaLabel="Work I've done"></theme-button>
        </div>
</template>

<script>
import ThemeButton from '../interface/ThemeButton.vue'

export default {
    name: 'ThemeFooter',
    components: {
        ThemeButton,
    },
    props: {
        page: {
            type: String,
            default: 'home',
        },
    },
    methods: {
        changePage(pageName) {
            this.$emit('changePage', pageName)
        },
    },
}
</script>
