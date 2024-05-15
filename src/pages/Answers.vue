<template>
  <div>
    <div class="q-pa-md">
      <q-list bordered class="rounded-borders">
        <q-expansion-item v-for="user in users"
          expand-separator
          icon="perm_identity"
          :label="user.firstname +  ' ' + user.lastname">
          <q-card>
            <q-table
              title="Answers"
              :rows="user.answers"
              :columns="columns"
              row-key="name"
            />
          </q-card>
        </q-expansion-item>
        </q-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// import answers from '../assets/answers.json';
// import vars from '../assets/vars.json';
// import optiongroupoptions from '../assets/optiongroupoptions.json'


const columns: any = [
  { name: 'questionId', label: 'ID', align: 'left', field: 'questionId', sortable: true },
  { name: 'label', label: 'label', align: 'left', field: 'label', sortable: true },
  { name: 'Answer', label: 'Answer', align: 'left', field: 'answer', sortable: true },
];

//Assignment 2: Complete this function return all questions and optionGroup containing all options.
const users = computed(() => getAllUsers())
function getAllUsers() {
  return []
}



</script>
