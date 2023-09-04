<script setup>
import {ref} from 'vue'
import AppCheckbox from '@/components/UI/AppCheckbox.vue'
import AppCheckboxGroup from '@/components/UI/AppCheckboxGroup.vue'

const checkboxActive = ref(true)
const checkboxDisabled = ref(true)
const checkboxDisabledChecked = ref(true)

const frameworksList = ref([
    {name: 'Angular', id: 'f1'},
    {name: 'Vue JS', id: 'f2'},
    {name: 'React JS', id: 'f3'},
    {name: 'Svelte JS', id: 'f4'},
    {name: 'Ember JS', id: 'f5'},
    {name: 'Preact', id: 'f6'},
    {name: 'BackBone JS', id: 'f7'},
])
const selectedFrameworks = ref([])
</script>

<template>
    <h1 class="heading-1">Checkbox</h1>
    <h2 class="heading-2">Checkbox Active</h2>
    <div class="line">
        <app-checkbox
            label="Checkbox Active"
            id="checkboxActive"
            name="checkboxActive"
            value="I like it"
            v-model:checked="checkboxActive"
        />
    </div>

    <h2 class="heading-2">Checkbox Disabled</h2>
    <div class="line">
        <app-checkbox
            label="Checkbox Disabled"
            id="checkboxDisabled"
            name="checkboxDisabled"
            value="I like it"
            :disabled="checkboxDisabled"
            v-model:checked="checkboxDisabledChecked"
        />
    </div>

    <h2 class="heading-2">Checkbox Group</h2>
    <div class="line line_block">
        <p>Selected Frameworks: {{ selectedFrameworks }}</p>
        <app-checkbox-group
            v-model:value="selectedFrameworks"
            :options="frameworksList"
            name="frameworks"
        />
    </div>
</template>