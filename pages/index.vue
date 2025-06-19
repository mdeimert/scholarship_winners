<template>
  <div class="w-full min-h-screen flex flex-col items-center py-12 bg-gray-100">
    <div class="flex flex-col items-center justify-center space-y-8">
      <img src="/images/sowl-logo-desktop.svg" />
      <img src="/images/sowl-logo-text.svg" />
      <h1>Scholarship Winners</h1>

      <div class="w-screen overflow-x-auto px-[2rem]">
        <WinnerTable></WinnerTable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
