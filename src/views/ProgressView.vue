<script setup>
import AppProgressBar from '@/components/UI/Progress/AppProgressBar.vue'
import {ref} from 'vue'

const percentBar = ref(40)
</script>

<template>
    <h1 class="heading-1">Progress</h1>
    <h2 class="heading-2">Progress Bar</h2>
    <app-progress-bar 
        maxWidth="500px"
        :percent="percentBar"
        color="warning"
    />
</template>