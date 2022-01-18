<template>
    <div class="stat-bar margin-bottom">
        <span class="title-small margin-bottom-small">
            {{ title }}
            <small v-if="subTitle">[{{ subTitle }}]</small>
        </span>
        <div class="margin-top-tiny">
            <div :style="{ width: actual + '%' }" class="internal-bar" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'ThemeStatBar',
    props: {
        target: {
            type: Number,
            required: true,
            validator: (value) => value >= 0 && value <= 100,
        },
        title: {
            type: String,
            required: true,
        },
        subTitle: {
            type: String,
            required: false,
        },
    },
    created() {
        setInterval(() => {
            if (this.actual >= this.target) {
                clearInterval()
            } else {
                this.actual += 1
            }
        }, 10)
    },
    data() {
        return {
            actual: 0,
        }
    },
}
</script>
