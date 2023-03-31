<script setup>
const emits = defineEmits(["nextProject", "previousProject"]);
console.log(emits);
</script>

<template>
  <div
    class="h-full bg-black text-gray-50 text-6xl font-bold flex justify-center items-center select-none transition-all duration-200 hover:(bg-dark-500) px-2"
    @click="emits('previousProject', -1)"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="48"
      height="48"
      class="fill-white <md:(w-6)"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z"
      />
    </svg>
  </div>
  <slot></slot>

  <div
    class="h-full bg-black text-gray-50 text-6xl font-bold flex justify-center items-center select-none transition-all duration-200 hover:(bg-dark-500) px-2"
    @click="emits('nextProject', 1)"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="48"
      height="48"
      class="fill-white <md:(w-6)"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"
      />
    </svg>
  </div>
</template>
