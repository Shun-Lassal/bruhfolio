<script setup>
const props = defineProps({
  imageUrl: String,
  name: String,
  scaleIcon: Boolean,
});
</script>

<template>
  <div
    class="h-15 w-15 flex justify-center items-center group select-none"
    v-if="scaleIcon"
  >
    <img class="rounded h-full w-full" :src="props.imageUrl" alt="" />
    <span
      class="group-hover:(text-xl transform-gpu translate-y-10 opacity-100) absolute opacity-0 bg-black transition-all duration-300 p-1 border rounded"
      >{{ props.name }}</span
    >
  </div>
  <div
    class="h-15 w-15 flex justify-center items-center group select-none"
    v-else
  >
    <img class="rounded" :src="props.imageUrl" alt="" />
    <span
      class="group-hover:(text-xl transform-gpu translate-y-10 opacity-100) absolute opacity-0 bg-black transition-all duration-300 p-1 border rounded"
      >{{ props.name }}</span
    >
  </div>
</template>
