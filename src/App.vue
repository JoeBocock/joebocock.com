<template>
    <theme-toggle class="absolute right-none top-none margin-medium padding-small"/>
    <div class="fill-space flex flex-column flex-center">
        <vue-writer class="title-large" :array="['Hey there,']" :eraseSpeed="-1" />
        <vue-writer class="title-medium" :array="['I\'m Joe']" />
        <desk-vector-graphic />
    </div>
</template>

<script>
import VueWriter from 'vue-writer'
import ThemeToggle from './components/interface/ThemeToggle.vue'
import DeskVectorGraphic from './components/svgs/DeskVectorGraphic.vue'

export default {
    name: 'App',
    components: {
        DeskVectorGraphic,
        ThemeToggle,
        VueWriter,
    },
}
</script>
