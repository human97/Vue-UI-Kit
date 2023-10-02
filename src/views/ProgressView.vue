<script setup>
import AppProgressBar from '@/components/UI/Progress/AppProgressBar.vue'
import AppButton from '@/components/UI/AppButton.vue'
import {ref} from 'vue'

const progressBar = ref(50)

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

        <div class="line wrap-btn">
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
</template>

<style lang="scss" scoped>
.wrap-btn {
    width: 500px;
    justify-content: space-between;
}
</style>