<template>
    <theme-toggle class="absolute right-none top-none margin-medium padding-small"/>
    <div class="fill-space flex flex-column flex-center">
        <h2 class="title-large">Hey There,</h2>
        <span class="title-medium">I'm Joe</span>
        <desk-vector-graphic />
        <!-- <div class="width-content flex space-between flex-center space-between text-medium">
            <button aria-label="Who am I?" class="navigation-button padding-small"><strong>who</strong></button>
            <button aria-label="What do I enjoy?" class="navigation-button padding-small"><strong>what</strong></button>
            <button aria-label="Work I have done" class="navigation-button padding-small"><strong>work</strong></button>
        </div> -->
    </div>
</template>

<script>
import ThemeToggle from './components/interface/ThemeToggle.vue'
import DeskVectorGraphic from './components/svgs/DeskVectorGraphic.vue'

export default {
    name: 'App',
    data() {
        return {
            page: '',
        }
    },
    components: {
        DeskVectorGraphic,
        ThemeToggle,
    },
}
</script>
