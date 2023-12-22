<script setup>
import {ref, computed} from 'vue'
import AppTable from '@/components/UI/Table/AppTable.vue'
import TableRow from '@/components/UI/Table/TableRow.vue'
import TableColumn from '@/components/UI/Table/TableColumn.vue'
import Button from '@/components/UI/AppButton.vue'

const tableHeads = ['Id', 'Author', 'Title', 'Cover', '']
const tableSizeColumns = '50px 1fr 2fr 150px 140px'

const sortField = ref('author')
const typeSort = ref('asc')

const books = ref([
  {
    id: 1,
    author: 'dmitry Glukhovsky',
    title: 'Metro 2033',
    image: 'https://images.app.goo.gl/j9HhhkHEX4qzvvfm8',
    bg: '#FFA26B'
  },
  {
    id: 12,
    author: 'AJames Clear',
    title: 'atomic Habits: An Easy',
    image: 'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
    bg: '#FF4500'
  },
  {
    id: 2,
    author: 'J. K. Rowling',
    title: 'Harry Potter and the Order of the Phoenix',
    image: 'https://www.imdb.com/title/tt0373889/mediaviewer/rm3414694144/?ref_=tt_ov_i',
    bg: '#00C48C'
  }
])

const bookSorting = computed(() => {
    return books.value.sort((a, b) => {
        let modifier = typeSort.value === 'desc' ? -1 : 1
        let aValue = a[sortField.value]
        let bValue = b[sortField.value]
        if (aValue === undefined || bValue === undefined) return 0
        if (typeof aValue === 'string') aValue = aValue.toLowerCase()
        if (typeof bValue === 'string') bValue = bValue.toLowerCase()
        return (typeof aValue === 'number' && typeof bValue === 'number') 
            ? (aValue - bValue) * modifier 
            : aValue.localeCompare(bValue) * modifier
    })
})

const setSort = (name) => {
    if(name === 'Cover') return // Ignore sorting when clicking on the "Cover" field
    if(sortField.value === name) {
        typeSort.value = typeSort.value === 'asc' ? 'desc' : 'asc'
    } else {
        sortField.value = name
    }
}
</script>

<template>
    <h1 class="heading-1">Table</h1>

    <app-table
        :head="tableHeads"
        :columnTemplates="tableSizeColumns"
        @sorting="setSort"
    >
        <table-row
            v-for="book in bookSorting"
            :key="book.id"
            :columnTemplates="tableSizeColumns"
            :bgRow="book.bg"
        >
            <table-column :columnTitle="tableHeads[0]">
                {{ book.id }}
            </table-column>
            <table-column :columnTitle="tableHeads[1]">
                {{ book.author }}
            </table-column>
            <table-column :columnTitle="tableHeads[2]">
                {{ book.title }}
            </table-column>
            <table-column
                :image="true"
                :srcImage="book.image"
            />
            <table-column>
                <Button label="Read Online" />
            </table-column>    
        </table-row>
    </app-table>
</template>