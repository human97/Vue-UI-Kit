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
        <Button label="Primary" color="primary" disabled />
        <Button label="Secondary" color="second" disabled />
        <Button label="Success" color="success" disabled />
        <Button label="Info" color="info" disabled />
        <Button label="Warning" color="warning" disabled />
        <Button label="Danger" color="danger" disabled />
    </div>
    <h2 class="heading-2">Rounded</h2>
    <div class="line">
        <Button label="Primary" color="primary" rounded />
        <Button label="Secondary" color="second" rounded />
        <Button label="Success" color="success" rounded />
        <Button label="Info" color="info" rounded />
        <Button label="Warning" color="warning" rounded />
        <Button label="Danger" color="danger" rounded />
    </div>
    <h2 class="heading-2">Outlined</h2>
    <div class="line">
        <Button label="Primary" color="primary" outlined />
        <Button label="Secondary" color="second" outlined />
        <Button label="Success" color="success" outlined />
        <Button label="Info" color="info" outlined />
        <Button label="Warning" color="warning" outlined />
        <Button label="Danger" color="danger" outlined />
    </div>
    <h2 class="heading-2">Icon</h2>
    <div class="line">
        <Button label="Primary" color="primary" icon="heart" />
        <Button label="Secondary" color="second" icon="hand" outlined />
        <Button label="Success" color="success" icon="address-book" />
        <Button label="Info" color="info" icon="credit-card" outlined />
        <Button label="Warning" color="warning" icon="lemon" />
        <Button label="Danger" color="danger" icon="hourglass" outlined />
    </div>
    <h2 class="heading-2">Size</h2>
    <div class="line">
        <Button label="Normal" color="primary" />
        <Button label="Large" color="primary" size="large" />
        <Button label="Large" color="success" size="large" />
        <Button label="Normal" color="info" outlined />
    </div>
    <h2 class="heading-2">Event</h2>
    <div class="line">
        <Button label="@click" color="danger" size="large" @click="eventForButton" />
    </div>
</template>

<style lang="scss" scoped>

</style>