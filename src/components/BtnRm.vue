<template>
  <button @click="removeTask(id)">Remove Task</button>

</template>

<script setup>

import api from "@/services/api";
import {defineEmits} from "vue";


// eslint-disable-next-line no-undef
defineProps (["id"]);
const emit = defineEmits(['task-deleted']);

const removeTask = async (id) => {
  try {
    await api.rmTasks(id);
    emit('task-deleted')
  } catch (error) {
    console.error('Erreur lors de la récupération du titre :', error);
  }


}
</script>


<style scoped>

</style>