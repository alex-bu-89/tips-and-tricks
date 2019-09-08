<template>
  <ul class="task-list">
    <task-list-item
      v-for="task in tasks"
      :task="task"
      :key="task.id"
    />
  </ul>
</template>

<script>
import TaskListItem from './TaskListItem.vue'

export default {
  components: {
    TaskListItem
  },
  data () {
    return {
      tasks: [
        {
          id: 124245,
          text: 'Die Liste ist nur sichtbar, wenn das Input-Feld einen Wert hat'
        },
        {
          id: 1,
          text: 'Zeige max. fünf Ergebnisse'
        },
        {
          id: 1242342420,
          text: 'Zeige eine Fallback-Nachricht, wenn kein Ergebnis gefunden werden konnte'
        },
        {
          id: 2,
          text: 'Die Combobox kommuniziert, welches Ergebnis angeklickt wurde'
        },
        {
          id: 224523454,
          text: 'Die App zeigt Titel und Text des angeklickten Ergebnisses'
        },
        {
          id: 0,
          text: 'Leert das Eingabefeld, wenn <code>ESC</code> gedrückt wird'
        }
      ]
    }
  }
}
</script>

<style>

.task-list {
  padding: 0;
  margin: 0;
}

</style>
