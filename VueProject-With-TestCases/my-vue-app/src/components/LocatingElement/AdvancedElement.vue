<template>
  <div class="todo-container">
    <h2>Todo List</h2>

    <input
      v-model="newTask"
      placeholder="Enter task"
      class="task-input"
    />
    <button class="add-btn" @click="addTask">Add</button>

    <ul class="task-list">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        :class="{ completed: task.done }"
        class="task-item"
      >
        <span class="text">{{ task.text }}</span>

        <button
          class="complete-btn"
          @click="toggleComplete(index)"
        >
          {{ task.done ? 'Undo' : 'Complete' }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AdvancedElement",
  data() {
    return {
      newTask: "",
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push({text: this.newTask, done: false});
        this.newTask = "";
      }
    },
    toggleComplete(index) {
      this.tasks[index].done = !this.tasks[index].done;
    }
  }
};
</script>
