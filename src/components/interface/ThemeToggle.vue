<template>
    <button :aria-label="on ? 'Toggle to light mode' : 'Toggle to dark mode'" @click="toggle()">
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
    mounted() {
        this.$nextTick(() => {
            if (!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                this.toggle()
            }
        })
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
