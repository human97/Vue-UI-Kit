<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  totalItems: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    default: 10
  },
  maxVisibleButtons: {
    type: Number,
    default: 5
  },
  value: {
    type: Number,
    default: 1
  }
})

const emits = defineEmits(['update:value'])

const currentPage = ref(props.value)

watch(currentPage, (newPage) => {
  emits('update:value', newPage)
})

const pageCount = computed(() => Math.ceil(props.totalItems / props.pageSize))

/**
 * Вычисляет диапазон видимых номеров страниц.
 * @returns {number[]} Массив видимых номеров страниц.
 */
const getPageNumbers = () => {
  const pages = []
  let startPage, endPage
  let showLeftDots = false // флаг для отображения точек слева
  let showRightDots = false // флаг для отображения точек справа

  if (pageCount.value <= props.maxVisibleButtons) {
    // Показываем все страницы, если их меньше или равно maxVisibleButtons
    startPage = 1
    endPage = pageCount.value
  } else {
    // Расчет диапазона страниц вокруг текущей
    const maxPagesBefore = Math.floor(props.maxVisibleButtons / 2)
    const maxPagesAfter = Math.ceil(props.maxVisibleButtons / 2) - 1

    if (currentPage.value <= maxPagesBefore + 1) {
      // Близко к началу
      startPage = 1
      endPage = props.maxVisibleButtons
      showRightDots = true
    } else if (currentPage.value + maxPagesAfter >= pageCount.value) {
      // Близко к концу
      startPage = pageCount.value - props.maxVisibleButtons + 1
      endPage = pageCount.value
      showLeftDots = true
    } else {
      // В середине
      startPage = currentPage.value - maxPagesBefore
      endPage = currentPage.value + maxPagesAfter
      showLeftDots = true
      showRightDots = true
    }
  }

  for (let page = startPage; page <= endPage; page++) {
    pages.push(page)
  }

  return {
    pages,  // Возвращаем массив страниц
    showLeftDots,  // Возвращаем флаг для точек слева
    showRightDots, // Возвращаем флаг для точек справа
  }
};

const pageNumbers = computed(() => {
  const result = getPageNumbers()
  return {
    pages: result.pages, // Массив видимых страниц
    showLeftDots: result.showLeftDots, // Флаг для точек слева
    showRightDots: result.showRightDots // Флаг для точек справа
  }
});

const goToPage = (page) => {
  if (page < 1) {
    page = 1
  } else if (page > pageCount.value) {
    page = pageCount.value
  }
  currentPage.value = page
};

// Следим за внешними изменениями props.value
watch(() => props.value, (newValue) => {
  if (newValue !== currentPage.value) {
    currentPage.value = newValue
  }
});
</script>

<template>
  <nav aria-label="Навигация по страницам">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage <= 1 }">
        <a class="page-link" href="javascript:void(0)" @click="goToPage(currentPage - 1)">Previous</a>
      </li>

      <!-- Добавлено: Точки слева -->
      <li 
        v-if="pageNumbers.showLeftDots" 
        class="page-item disabled"
      >
        <span class="page-link">...</span>
      </li>

      <!-- Видимые страницы -->
      <li class="page-item"
          v-for="page in pageNumbers.pages"
          :key="page"
          :class="{ active: currentPage === page }">
        <a class="page-link" href="javascript:void(0)" @click="goToPage(page)">{{ page }}</a>
      </li>

      <!-- Добавлено: Точки справа -->
      <li 
        v-if="pageNumbers.showRightDots" 
        class="page-item disabled"
      >
        <span class="page-link">...</span>
      </li>

      <li class="page-item" :class="{ disabled: currentPage >= pageCount }">
        <a class="page-link" href="javascript:void(0)" @click="goToPage(currentPage + 1)">Next</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  list-style: none;
  padding: 0;

  .page-item {
    margin: 0 2px;

    &.disabled .page-link {
      cursor: not-allowed;
      color: gray;
    }

    &.active .page-link {
      background-color: #007bff;
      color: white;
      border-radius: 50%;
    }
  }

  .page-link {
    display: block;
    padding: 5px 10px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>