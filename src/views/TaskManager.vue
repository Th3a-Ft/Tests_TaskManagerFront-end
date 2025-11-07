<template>
  <div>
    <Hello/>
  </div>
  <h2>Add a task</h2>
  <BtnAdd @task-added="handleTaskAdded"/>
  <TasksTable ref="tasksTable"/>
</template>

<script>
import Hello from '../components/Hello.vue';
import TasksTable from "@/components/TasksTable.vue";
import BtnAdd from "@/components/BtnAdd.vue";

export default {
  components: { BtnAdd, TasksTable, Hello },
  methods: {
    handleTaskAdded() {
      this.$refs.tasksTable.fetchTasks();
    }
  }
};
</script>

<style>

</style>