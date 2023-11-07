<script setup>
import {ref, computed} from 'vue'
import useVuelidate from '@vuelidate/core'
import { helpers, minLength, email, sameAs } from '@vuelidate/validators'

import AppInput from '@/components/UI/AppInput.vue'
import AppButton from '@/components/UI/AppButton.vue'

const nameField = ref('')
const emailField = ref('')
const passwordField = ref('')
const confirmPasswordField = ref('')
const textField = ref('')

const mustBeText = (value) => value.includes('Validate')

const rules = computed(() => ({
    nameField: {
        minLength: minLength(3)
    },
    emailField: {
        email: email
    },
    confirmPasswordField: {
        sameAsPassword: sameAs(passwordField.value)
    },
    textField: {
        textField: helpers.withMessage('The line must contain the word "Validate"', mustBeText)
    }
}))
const v = useVuelidate(rules, {nameField, emailField, confirmPasswordField, textField})

console.log(v)

const submitForm = () => {
    v.value.$touch()
    if (v.value.$error) return
    alert('Form submitted')
}
</script>

<template>
    <h1 class="heading-1">Inputs</h1>

    <form  @submit.prevent="submitForm">
        <app-input
            label="Your name"
            name="name"
            placeholder="Input your name"
            v-model:value="v.nameField.$model"
            type="text"
            :error="v.nameField.$errors"
        />

        <app-input
            label="Your email"
            name="email"
            placeholder="Input your email"
            v-model:value="v.emailField.$model"
            :error="v.emailField.$errors"
        />

        <app-input
            label="Your password"
            name="password"
            placeholder="Input your password"
            v-model:value="passwordField"
            type="password"
        />

        <app-input
            label="Confirm password"
            name="confirm"
            placeholder="Confirm your password"
            v-model:value="v.confirmPasswordField.$model"
            type="password"
            :error="v.confirmPasswordField.$errors"
        />

        <app-input
            label="Validate"
            name="validate"
            placeholder="Enter the word 'Validate'"
            v-model:value="v.textField.$model"
            :error="v.textField.$errors"
        />

        <app-button
            label="Submit"
            color="primary"
        />
    </form>
</template>