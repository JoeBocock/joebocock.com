<template>
        <h2 class="title-large margin-top-tiny">Hey There,</h2>
        <span class="title-medium margin-bottom-small">I'm Joe</span>
        <desk-vector-graphic class="margin-bottom-medium" />
</template>

<script>
import DeskVectorGraphic from '../svgs/DeskVectorGraphic.vue'

export default {
    name: 'HomeContent',
    components: {
        DeskVectorGraphic,
    },
}
</script>
