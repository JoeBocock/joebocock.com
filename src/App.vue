<template>
    <theme-toggle class="absolute right-none top-none margin-medium padding-small"/>
    <div class="fill-space flex flex-column flex-center">
        <h2 class="title-large">Hey there,</h2>
        <span class="title-medium">I'm Joe</span>
        <desk-vector-graphic />
        <div class="flex space-between flex-center space-between" style="width: 26rem">
            <button class="navigation-button padding-small">who</button>
            <button class="navigation-button padding-small">what</button>
            <button class="navigation-button padding-small">work</button>
        </div>
    </div>
</template>

<script>
import ThemeToggle from './components/interface/ThemeToggle.vue'
import DeskVectorGraphic from './components/svgs/DeskVectorGraphic.vue'

export default {
    name: 'App',
    components: {
        DeskVectorGraphic,
        ThemeToggle,
    },
}
</script>
