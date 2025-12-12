<template>
  <div class="advanced-form">
    <h2>Advanced Actions</h2>

    <input
      v-model="task"
      class="task-input"
      placeholder="Enter task"
    />

    <select v-model="priority" class="priority-select">
      <option disabled value="">Priority</option>
      <option>Low</option>
      <option>Medium</option>
      <option>High</option>
    </select>

    <input
      type="checkbox"
      v-model="urgent"
      class="urgent-checkbox"
    /> Mark as urgent

    <button @click="addTask" class="add-btn">Add</button>

    <ul class="task-list">
      <li
        v-for="(item, index) in tasks"
        :key="index"
        class="task-item"
      >
        {{ item.text }} - {{ item.priority }} {{ item.urgent ? '(Urgent)' : '' }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from "vue";

const task = ref("");
const priority = ref("");
const urgent = ref(false);
const tasks = ref([]);

const addTask = () => {
  if (!task.value || !priority.value) return;

  tasks.value.push({
    text: task.value,
    priority: priority.value,
    urgent: urgent.value,
  });

  task.value = "";
  priority.value = "";
  urgent.value = false;
};
</script>
