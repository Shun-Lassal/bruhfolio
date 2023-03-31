<script setup>
const props = defineProps({
  imageUrl: String,
  ProjectTitle: String,
  ProjectDesc: String,
});
</script>

<template>
  <div
    class="flex flex-col justify-center text-white border border-gray-400 rounded bg-dark-900"
  >
    <div
      class="flex mx-4 mt-4 mb-2 <lg:(flex-col justify-center items-center space-y-2)"
    >
      <div class="lg:(h-50 w-lg) md:(h-auto w-auto)">
        <img
          class="lg:(h-full w-full) <lg:(h-auto) <md:(h-40) h-auto w-auto rounded"
          :src="props.imageUrl"
          alt=""
        />
      </div>
      <div
        class="flex flex-col ml-4 <lg:(mx-auto) justify-evenly bg-dark-700 rounded"
      >
        <div class="my-2 mx-4">
          <span class="text-4xl">{{ props.ProjectTitle }}</span>
        </div>
        <div class="py-2 px-4">
          <span>{{ props.ProjectDesc }}</span>
        </div>
      </div>
    </div>
    <div
      class="flex <md:(flex-col justify-center items-center) justify-start mx-4 mb-4"
    >
      <div class="py-2 px-4 bg-dark-700 w-full rounded">
        <span class="text-2xl font-bold">Stack</span>
        <div
          class="flex flex-wrap justify-start <md:(justify-center items-center space-x-0 gap-4) space-x-4 mt-1"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
