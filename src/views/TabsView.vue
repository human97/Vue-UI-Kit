<script setup>
import {ref} from 'vue'
import AppTabs from '@/components/UI/AppTabs.vue'

const tabs = [
    {name: 'About', label: 'By project'},
    {name: 'Vue', label: 'By Vue'},
    {name: 'React', label: 'By React'},
]
const selectedTab = ref('About')

const changeTab = (tabName) => {
    selectedTab.value = tabName
}
</script>

<template>
    <h1 class="heading-1">Tabs</h1>

    <app-tabs
        :names="tabs"
        :selectedTab="selectedTab"
        @changeTab="changeTab"
    >
        <div v-if="selectedTab === 'Vue'">
            VUE. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, corporis!
        </div>
        <div v-if="selectedTab === 'React'">
            REACT. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, tempore! Neque et sunt odio voluptate adipisci alias nihil fugit illum!
        </div>
        <div v-if="selectedTab === 'About'">
            PROJECT. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil a fugiat facere sint dolores beatae soluta? Laudantium doloribus eligendi quis dolorem nostrum at sint dicta, dolores in non et?
        </div>
    </app-tabs>
</template>