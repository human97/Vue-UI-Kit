<script setup>
import AppProgressBar from '@/components/UI/Progress/AppProgressBar.vue'
import AppProgressCircle from '@/components/UI/Progress/AppProgressCircle.vue'
import AppButton from '@/components/UI/AppButton.vue'
import {ref} from 'vue'

const progressBar = ref(40)
const progressCircle = ref(60)

const increaseProgressBar = () => {
    if (progressBar.value < 100) {
        progressBar.value += 10
    }
}

const decreaseProgressBar = () => {
    if (progressBar.value > 0) {
        progressBar.value -= 10
    }
}

const increaseProgressCircle = () => {
    if (progressCircle.value < 100) {
        progressCircle.value += 10
    }
}

const decreaseProgressCircle = () => {
    if (progressCircle.value > 0) {
        progressCircle.value -= 10
    }
}
</script>

<template>
    <h1 class="heading-1">Progress</h1>

    <h2 class="heading-2">Progress Bar</h2>
    <div class="line line_block">
        <app-progress-bar 
            maxWidth="500px"
            :progress="progressBar"
            color="warning"
        />

        <div class="line wrap-btn-bar">
            <app-button
                color="danger"
                label="Minus 10%"
                fixed="medium"
                :disabled="progressBar === 0"
                @click="decreaseProgressBar"
            />
            <app-button
                color="success"
                label="Plus 10%"
                fixed="medium"
                :disabled="progressBar === 100"
                @click="increaseProgressBar"
            />
        </div>
    </div>

    <h2 class="heading-2">Progress Circle</h2>
    <div class="line wrap-circle-block m-r-type">
        <app-progress-circle
            :progress="progressCircle"
            color="info"
        />

        <div class="wrap-btn-circle m-b-type">
            <app-button
                color="danger"
                label="Minus 10%"
                fixed="medium"
                :disabled="progressCircle === 0"
                @click="decreaseProgressCircle"
            />
            <app-button
                color="success"
                label="Plus 10%"
                fixed="medium"
                :disabled="progressCircle === 100"
                @click="increaseProgressCircle"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrap-btn-bar {
    width: 500px;
    justify-content: space-between;
}

.wrap-btn-circle {
    display: flex;
    flex-direction: column;
}

.wrap-circle-block {
    align-items: center;
}
</style>