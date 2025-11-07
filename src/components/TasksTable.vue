<template>
  <table class="custom-table">
    <thead>
    <tr>
      <th v-for="col in columns" :key="col">{{ col }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, index) in data" :key="index">
      <td>{{ item.id }}</td>
      <td>{{ item.description }}</td>
      <td>{{ item.status }}</td>
      <td>
        <BtnRm
            :id="item.id" @task-deleted="fetchTasks"/>
        <BtnUpdateStatus
            :id="item.id" @task-updated="fetchTasks"/>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup>
/* global defineExpose */

import { ref, onMounted } from 'vue';
import api from '../services/api';
import BtnRm from "@/components/BtnRm.vue";
import BtnUpdateStatus from "@/components/BtnUpdateStatus.vue";

const columns = ['Id Task', 'Description', 'Status', 'Actions'];
const data = ref([]);

const fetchTasks = async () => {
  try {
    const response = await api.getTasks();
    data.value = response.data || response;
  } catch (error) {
    console.error('Erreur lors de la récupération des tâches :', error);
  }
};

onMounted(fetchTasks);
defineExpose({ fetchTasks });
</script>

<style scoped>
.custom-table {
  border-collapse: collapse;
  width: 100%;
  text-align: left;
}

.custom-table th,
.custom-table td {
  border: 2px solid black;
  padding: 8px;
}

.custom-table thead tr {
  background-color: #f0f0f0; /* gris clair */
}
</style>
