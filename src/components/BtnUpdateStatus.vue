<template>
  <button @click="updateStatusTask(id)">End Task</button>

</template>

<script setup>
import api from "@/services/api";
import {defineEmits} from "vue";

// eslint-disable-next-line no-undef
defineProps(["id"]);
const emit = defineEmits(['task-updated']);

const updateStatusTask = async (id) => {
  try {
    api.updateTask(id);
    emit('task-updated')
  } catch (error) {
    console.error('Erreur lors de la récupération du titre :', error);
  }
}


</script>


<style scoped>

</style>