<template>
    <button class="p-3" @click="toggle()">
         <light-mode-icon v-if="on"></light-mode-icon>

         <dark-mode-icon v-else></dark-mode-icon>
    </button>
</template>

<script>
export default {
    data () {
        return { on: true }
    },
    methods: {
        toggle () {
            this.on = !this.on
            document.getElementsByTagName("html")[0].classList.toggle('dark')
        }
    }
}
</script>
