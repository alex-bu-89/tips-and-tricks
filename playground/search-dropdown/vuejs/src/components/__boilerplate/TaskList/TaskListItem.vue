<template>
  <li class="task-list-item">
    <input type="checkbox" :name="task.id" :id="task.id">
    <label :for="task.id">
      <span v-html="task.text" />
    </label>
  </li>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.task-list-item {
  display: flex;
  align-items: flex-start;
  list-style: none;
  margin-bottom: 1em;
}

input[type="checkbox"] {
  display: inline-block;
  margin-right: .5rem;;
}

input:checked + label {
  text-decoration: line-through;
}
</style>
