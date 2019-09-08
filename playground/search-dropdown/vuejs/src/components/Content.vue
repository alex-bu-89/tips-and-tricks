<template>
  <section v-if='selectedOption'>
    <h1>{{ selectedOption.title }}</h1>
    <p>{{ selectedOption.body }}</p>
  </section>
</template>

<script>
export default {
  props: {
    selectedOption: {
      type: Object,
      default () {
        return null
      }
    }
  }
}
</script>

<style>
</style>
