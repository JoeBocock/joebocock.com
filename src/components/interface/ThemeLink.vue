<template>
    <a :href="link"><slot></slot></a>
</template>

<script>

export default {
    name: 'ThemeLink',
    props: {
        link: {
            type: String,
            required: true,
        },
    },
}
</script>
