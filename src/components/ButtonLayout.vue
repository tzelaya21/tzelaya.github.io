<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<template>
  <button @click="onClick" class="buttonContainer" :class="'classes'">
    <slot>Button</slot>
  </button>
</template>

<style>
  .buttonContainer {
    padding: 0;
    outline: none;
    border: 1px solid transparent;
    border-radius: 50px;
    cursor: pointer;
    color: var(--darker-blue);
    transition: background-color .2s ease-out;
  }

  .buttonContainer:hover {
    background-color: transparent;
    border-color: #fff;
    color: white;
  }
</style>
