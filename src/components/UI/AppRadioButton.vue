<script setup>
const emits = defineEmits(['update:value'])
  const props = defineProps({
    name: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    group: {
      type: Boolean,
      default: false
    }
  })

  const handleClick = (event) => {
    emits('update:value', event.target.value)
  }
</script>

<template>
    <input
        class="radio-button" 
        type="radio"
        :name="name"
        :id="id"
        :value="value"
        :checked="checked"
        :disabled="disabled"
        @input="handleClick($event)"
    >
    <label 
      :for="id"
    >
        {{ label }}
    </label>
</template>

<style lang="scss" scoped>
.radio-button {
  position: absolute;
  z-index: -1;
  opacity: 0;
  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
  }
  & + label::before {
        content: '';
        display: inline-block;
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid darken(#fafafa, 25%);
        border-radius: 50%;
        background: #fafafa;
        margin-right: 10px; 
        transition: .3s;
  }
  &:checked + label::before {
    background-color: var(--primary);
    box-shadow: inset 0 0 0 5px #fafafa;
  }
  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: var(--primary-hover);
  }
  &:not(:disabled):active + label::before {
    background-color: var(--primary);
    border: 1px solid #ECEBED;
  }
  &:focus + label::before {
    border-color: var(--primary);
  }
  &:focus:not(:checked) + label::before {
    border-color: var(--primary);
  }
  &:disabled + label {
    cursor: default;
  }
  &:disabled + label::before {
    background-color: #e9ecef;
    border: 1px solid #ECEBED;
  }
}
</style>