<template>
  <input v-model="newDescription" placeholder="Enter a description"/>
  <button @click="addTask">Add Task (enter description)</button>
</template>

<script setup>
import api from "@/services/api";
import { ref, defineEmits } from "vue";

const newDescription = ref('');
const emit = defineEmits(['task-added']);

const addTask = async () => {
  if (!newDescription.value.trim()) return;
  try {
    await api.addTask({ description: newDescription.value });
    newDescription.value = '';
    emit('task-added');
  } catch (error) {
    console.error("Erreur lors de la création de la task :", error);
  }
};
</script>