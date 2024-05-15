<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <NavigationItem
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import NavigationItem from 'components/NavigationItem.vue';
import {NavigationItemProps} from "@/components/NavigationItem.vue";

defineOptions({
  name: 'MainLayout',
});

const linksList: NavigationItemProps[] = [
  {
    title: 'Questions',
    icon: 'question_mark',
    path: '/questions',
  },
  {
    title: 'Answers',
    icon: 'school',
    path: '/answers',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

</script>

<style>
.q-header{
  background: linear-gradient(145deg, rgba(253,97,227,1) 10%, rgba(140,98,236,1) 34%, rgba(43,99,243,1) 64%, rgba(49,225,247,1) 90%);
}
</style>
