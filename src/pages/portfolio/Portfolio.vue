<template>
  <div>
    <Introduce />
    <v-divider class="my-8"></v-divider>
    <Skills />
    <v-divider class="my-8"></v-divider>
    <Projects />
    <v-divider class="my-8"></v-divider>
    <Career />
  </div>
</template>

<script setup lang="ts">
import Introduce from '@/components/portfolio/Introduce.vue';
import Skills from '@/components/portfolio/Skills.vue';
import Projects from '@/components/portfolio/Projects.vue';
import Career from '@/components/portfolio/Career.vue';
</script>