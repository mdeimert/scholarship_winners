<template>
  <div
    class="w-12 h-12 rounded-full bg-center bg-cover relative overflow-hidden"
    :class="!isLoaded ? 'bg-gray-200 animate-pulse' : ''"
    :style="{
      backgroundImage: isLoaded ? `url(${photo})` : 'none',
    }"
    aria-label="Winner Photo"
  >
    <img
      v-if="photo"
      :src="photo"
      alt="Winner Photo"
      class="hidden"
      @load="isLoaded = true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  photo: string;
}>();

const isLoaded = ref(false);
</script>
