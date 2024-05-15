<template>
  <div>
    <p>{{ title }}</p>

    <div class="q-pa-md" style=" min-width: 80vw; min-height: 75vh;">
      <q-table
        title="Ansers"
        :rows="allQuestions"
        :columns="columns"
        row-key="Name"
        :pagination="initialPagination"
      >
      </q-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import vars from '../assets/vars.json';
import optionGroups from '../assets/optiongroups.json';
//import answers from '../assets/answers.json';
import options from '../assets/optiongroupoptions.json';

import { OptionGroupOptionType, OptionGroupType, QuestionType } from './models';

//Table setup
const columns: any = [
  { name: 'label', label: 'label', align: 'left', field: 'label', sortable: true },
  { name: 'Name', label: 'Name', align: 'left', field: 'Name', sortable: true },
  { name: 'Type', align: 'left', label: 'Type', field: 'Type', sortable: true },
  { name: 'optionGroup.label', align: 'left', label: 'OptionGroup',   field: row => row.optionGroup,
    format: val => `${val?.label || ' '}`,
    sortable: true },
];
const optionColumns: any = [
  { name: 'label', label: 'label', align: 'left', field: 'label', sortable: true },
  { name: 'Name', label: 'Name', align: 'left', field: 'Name', sortable: true },
  { name: 'Value', align: 'left', label: 'Value', field: 'Value', sortable: true }
];
const initialPagination = {
  rowsPerPage: 12
}

//Assignment: Complete this function return alle questions and optionGroup containing all options.
function getAllQuestions(vars: QuestionType[], optionGroups: OptionGroupType[], options: OptionGroupOptionType[]): QuestionType[] {
  const questionsToReturn : QuestionType[] = [];
  vars.forEach((questionVar) => {
    const currentValCopy: QuestionType = { ...questionVar };
    if (currentValCopy.SelectionField) {
      const selectedOptionGroup: any = optionGroups.find((optionGroup) => optionGroup.optionGroupName === currentValCopy.SelectionField);
      if (selectedOptionGroup) {
        selectedOptionGroup.option = options.filter((option) => option.optionGroupName === selectedOptionGroup.optionGroupName);
        currentValCopy.optionGroup = selectedOptionGroup;
      }
    }
    questionsToReturn.push(currentValCopy);
  });
  console.log('%c questionsToReturn ', 'color: orange;', questionsToReturn);
  return questionsToReturn;
}

//  This wil give the questions to the table
const allQuestions = computed(() => getAllQuestions(vars, optionGroups, options));



</script>
