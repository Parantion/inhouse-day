<template>
  <div>
    <q-input
      v-model="search"
      debounce="500"
      filled
      placeholder="Search"
      hint="Debouncing 500ms"
    >
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>

    <div class="q-pa-md" style=" min-width: 80vw; min-height: 75vh;">
      <q-table
        title="Questions"
        :rows="allQuestions"
        :columns="columns"
        row-key="name"
        :pagination="initialPagination"
      >
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width></q-th>
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td auto-width>
              <q-btn v-if="props.row.selectionField" size="sm" color="accent" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'"></q-btn>
            </q-td>
            <q-td
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.value }}
            </q-td>
          </q-tr>
          <q-tr v-show="props.expand" :props="props">
            <q-td colspan="100%">
              <div class="text-left"><strong>Label:</strong> {{ props.row.optionGroup?.label }}</div>
              <div class="text-left"><strong>Multiple:</strong>  {{ props.row.optionGroup?.multiple }}</div>
              <div class="text-left"><strong>Name:</strong>  {{ props.row.optionGroup?.optionGroupName }}</div>
              <br><br>
              <q-table
                v-if="props.row.optionGroup?.option"
                title="Options"
                :rows="props.row.optionGroup?.option"
                :columns="optionColumns"
                row-key="Name"
              />
              <br><br>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import vars from '../assets/vars.json';
import optionGroups from '../assets/optiongroups.json';
import options from '../assets/optiongroupoptions.json';

import { OptionGroupOptionType, OptionGroupType, QuestionType } from '@/components/models';

// Bonus search function
const search = ref('')

const columns: any = [
  { name: 'label', label: 'Label', align: 'left', field: 'label', sortable: true },
  { name: 'name', label: 'Name', align: 'left', field: 'name', sortable: true },
  { name: 'type', align: 'left', label: 'Type', field: 'type', sortable: true },
  { name: 'optionGroup.label', align: 'left', label: 'OptionGroup',   field: row => row.optionGroup,
    format: val => `${val?.label || ' '}`,
    sortable: true },
];
const optionColumns: any = [
  { name: 'label', label: 'label', align: 'left', field: 'label', sortable: true },
  { name: 'name', label: 'Name', align: 'left', field: 'name', sortable: true },
  { name: 'value', align: 'left', label: 'Value', field: 'value', sortable: true }
];
const initialPagination = {
  rowsPerPage: 12
}

//Assignment 1: Complete this function return all questions and optionGroup containing all options.
function getAllQuestions(vars: QuestionType[], optionGroups: OptionGroupType[], options: OptionGroupOptionType[]): QuestionType[] {
  return [];
}

//  This wil give the questions to the table
const allQuestions = computed(() => getAllQuestions(vars, optionGroups, options));


</script>
