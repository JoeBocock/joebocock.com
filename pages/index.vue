<template>
    <div>
        <dark-mode-toggle class="absolute right-2 top-2"></dark-mode-toggle>
        <div class="flex flex-col w-screen h-screen justify-center items-center">
            <h2 class="text-5xl md:text-6xl font-bold text-title dark:text-title-dark mb-3">Hey there,</h2>
            <h2 class="text-3xl md:text-4xl font-bold text-title dark:text-title-dark">I'm Joe</h2>
            <desk-svg class="md:mt-5" aria-label="Flat art desk with iMac, coffee mug and potted plant cactus."></desk-svg>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
