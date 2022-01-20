<template>
    <h2 class="title-large margin-bottom-small">what</h2>

    <div class="width-content-medium">
        <theme-stat-bar :target="62" title="Javascript" subTitle="Vue, Alpine, jQuery"></theme-stat-bar>
        <theme-stat-bar :target="75" title="PHP" subTitle="Patterns, Laravel"></theme-stat-bar>
        <theme-stat-bar :target="55" title="MySQL" subTitle="Admin, Complex Queries"></theme-stat-bar>
        <theme-stat-bar :target="25" title="Visual Design" subTitle="CSS, Tailwind"></theme-stat-bar>
        <theme-stat-bar :target="49" title="Tooling" subTitle="Docker, Git, Yarn"></theme-stat-bar>
    </div>
</template>

<script>
import ThemeStatBar from '../interface/ThemeStatBar.vue'

export default {
    name: 'WhatContent',
    components: {
        ThemeStatBar,
    },
}
</script>
