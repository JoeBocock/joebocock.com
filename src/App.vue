<template>
    <theme-toggle class="absolute right-none top-none margin-medium padding-small"/>
    <div class="fill-space flex flex-column flex-center">
        <home-content v-if="page === 'home'"></home-content>
        <who-content v-else-if="page === 'who'"></who-content>
        <what-content v-else-if="page === 'what'"></what-content>
        <work-content v-else-if="page === 'work'"></work-content>
        <theme-footer :page="page" @change-page="updatePage"></theme-footer>
    </div>
</template>

<script>
import ThemeToggle from './components/interface/ThemeToggle.vue'
import HomeContent from './components/sections/HomeContent.vue'
import WhoContent from './components/sections/WhoContent.vue'
import WhatContent from './components/sections/WhatContent.vue'
import WorkContent from './components/sections/WorkContent.vue'
import ThemeFooter from './components/sections/ThemeFooter.vue'

export default {
    name: 'App',
    components: {
        ThemeToggle,
        HomeContent,
        WhoContent,
        WhatContent,
        WorkContent,
        ThemeFooter,
    },
    data() {
        return {
            page: 'home',
            validPages: ['who', 'what', 'work'],
        }
    },
    methods: {
        updatePage(pageName) {
            this.page = (pageName === this.page || !this.validPages.includes(pageName)) ? 'home' : pageName
        },
    },
}
</script>
