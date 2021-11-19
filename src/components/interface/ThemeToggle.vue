<template>
    <button @click="toggle()">
         <light-mode-icon v-if="on"></light-mode-icon>

         <dark-mode-icon v-else></dark-mode-icon>
    </button>
</template>

<script>
import LightModeIcon from '../svgs/LightModeIcon.vue'
import DarkModeIcon from '../svgs/DarkModeIcon.vue'

export default {
    name: 'ThemeToggle',
    components: {
        LightModeIcon,
        DarkModeIcon,
    },
    data() {
        return { on: true }
    },
    methods: {
        toggle() {
            this.on = !this.on
            document.getElementsByTagName('html')[0].classList.toggle('theme--dark')
            document.getElementsByTagName('html')[0].classList.toggle('theme--default')
        },
    },
}
</script>
