<template>
  <q-item
    :active="activeRoute"
    clickable
    tag="a"
    @click="navigateTo(path)">
    <q-item-section
      v-if="icon"
      avatar>
      <q-icon :name="icon"/>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'
import {computed} from "vue";

defineOptions({
  name: 'NavigationItem',
});

const router = useRouter()

export interface NavigationItemProps {
  title: string;
  path: string;
  icon?: string;
}

const props = withDefaults(defineProps<NavigationItemProps>(), {
  caption: '',
  path: '',
  icon: '',
});

function navigateTo(route: string) {
  if (router.currentRoute.value.path !== route) router.replace(route)
}
const currentPath = computed(() => {
  return router.currentRoute.value.path;
})

const activeRoute = computed(() => {
  return props.path.includes(currentPath.value)
})
</script>
