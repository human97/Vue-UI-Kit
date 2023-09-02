<script setup>
import Button from '@/components/UI/AppButton.vue'

const eventForButton = () => {
    alert('You clicked danger button')
}
</script>

<template>
    <h1 class="heading-1">Button</h1>
    <h2 class="heading-2">Colors</h2>
    <div class="line">
        <Button label="Primary" color="primary" />
        <Button label="Secondary" color="second" />
        <Button label="Success" color="success" />
        <Button label="Info" color="info" />
        <Button label="Warning" color="warning" />
        <Button label="Danger" color="danger" />
    </div>
    <h2 class="heading-2">Disabled</h2>
    <div class="line">
        <Button label="Primary" color="primary" :disabled="true" />
        <Button label="Secondary" color="second" :disabled="true" />
        <Button label="Success" color="success" :disabled="true" />
        <Button label="Info" color="info" :disabled="true" />
        <Button label="Warning" color="warning" :disabled="true" />
        <Button label="Danger" color="danger" :disabled="true" />
    </div>
    <h2 class="heading-2">Rounded</h2>
    <div class="line">
        <Button label="Primary" color="primary" :rounded="true" />
        <Button label="Secondary" color="second" :rounded="true" />
        <Button label="Success" color="success" :rounded="true" />
        <Button label="Info" color="info" :rounded="true" />
        <Button label="Warning" color="warning" :rounded="true" />
        <Button label="Danger" color="danger" :rounded="true" />
    </div>
    <h2 class="heading-2">Outlined</h2>
    <div class="line">
        <Button label="Primary" color="primary" :outlined="true" />
        <Button label="Secondary" color="second" :outlined="true" />
        <Button label="Success" color="success" :outlined="true" />
        <Button label="Info" color="info" :outlined="true" />
        <Button label="Warning" color="warning" :outlined="true" />
        <Button label="Danger" color="danger" :outlined="true" />
    </div>
    <h2 class="heading-2">Icon</h2>
    <div class="line">
        <Button label="Primary" color="primary" icon="heart" />
        <Button label="Secondary" color="second" icon="hand" :outlined="true" />
        <Button label="Success" color="success" icon="address-book" />
        <Button label="Info" color="info" icon="credit-card" :outlined="true" />
        <Button label="Warning" color="warning" icon="lemon" />
        <Button label="Danger" color="danger" icon="hourglass" :outlined="true" />
    </div>
    <h2 class="heading-2">Size</h2>
    <div class="line">
        <Button label="Normal" color="primary" />
        <Button label="Large" color="primary" size="large" />
        <Button label="Large" color="success" size="large" />
        <Button label="Normal" color="info" :outlined="true" />
    </div>
    <h2 class="heading-2">Event</h2>
    <div class="line">
        <Button label="@click" color="danger" size="large" @click="eventForButton" />
    </div>
</template>

<style lang="scss" scoped>

</style>