<script setup>
import {ref, computed} from 'vue'
import AppTable from '@/components/UI/Table/AppTable.vue'
import TableRow from '@/components/UI/Table/TableRow.vue'
import TableColumn from '@/components/UI/Table/TableColumn.vue'
import Button from '@/components/UI/AppButton.vue'

const tableHeads = ['Id', 'Author', 'Tatle', 'Cover', '']
const tableSizeColumns = '50px 1fr 2fr 150px 140px'

const sortField = ref('id')
const typeSort = ref('asc')

const books = ref([
  {
    id: 1,
    author: 'Dmitry Glukhovsky',
    title: 'Metro 2033',
    image: 'https://images.app.goo.gl/j9HhhkHEX4qzvvfm8',
    bg: '#FFA26B'
  },
  {
    id: 12,
    author: 'AJames Clear',
    title: 'Atomic Habits: An Easy',
    image: 'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
    bg: '#00C48C'
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
        let modifier = 1
        if(typeSort.value === 'desc') modifier = -1
        if(a[sortField.value] < b[sortField.value]) return -1 * modifier
        if(a[sortField.value] > b[sortField.value]) return 1 * modifier
        return 0
    })
})

const setSort = (name) => {
    if(sortField.value === name) {
        if(typeSort.value === 'asc') {
            typeSort.value = 'desc'
        } else {
            typeSort.value = 'asc'
        }
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