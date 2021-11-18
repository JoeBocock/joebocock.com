<template>
    <button class="float-right bg-button p-3" @click="toggle()">
        Dark Mode
    </button>
</template>

<script>
export default {
    methods: {
        toggle () {
            document.getElementsByTagName("html")[0].classList.toggle('dark')
        }
    }
}
</script>
