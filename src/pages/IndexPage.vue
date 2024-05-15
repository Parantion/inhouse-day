<template>
  <q-page class="row items-center justify-evenly full-width">
    <question-component
      title="Questions Table"
    ></question-component>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import QuestionComponent from 'components/QuestionComponent.vue';

defineOptions({
  name: 'IndexPage',
});

const todos = ref<any[]>([
  {
    id: 1,
    content: 'ct1',
  },
  {
    id: 2,
    content: 'ct2',
  },
  {
    id: 3,
    content: 'ct3',
  },
  {
    id: 4,
    content: 'ct4',
  },
  {
    id: 5,
    content: 'ct5',
  },
]);

const meta = ref<any>({
  totalCount: 1200,
});
</script>
