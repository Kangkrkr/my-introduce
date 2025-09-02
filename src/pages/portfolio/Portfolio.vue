<template>
  <div class="portfolio-container">
    <section ref="introduceSection">
      <Introduce />
    </section>
    <v-divider class="my-8"></v-divider>
    <section ref="skillsSection">
      <Skills />
    </section>
    <v-divider class="my-8"></v-divider>
    <section ref="projectsSection">
      <Projects />
    </section>
    <v-divider class="my-8"></v-divider>
    <section ref="careerSection">
      <Career />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Introduce from '@/components/portfolio/Introduce.vue';
import Skills from '@/components/portfolio/Skills.vue';
import Projects from '@/components/portfolio/Projects.vue';
import Career from '@/components/portfolio/Career.vue';

const introduceSection = ref(null);
const skillsSection = ref(null);
const projectsSection = ref(null);
const careerSection = ref(null);

const sections = [
  introduceSection,
  skillsSection,
  projectsSection,
  careerSection,
];

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // 한번만 애니메이션 처리
        }
      });
    },
    {
      threshold: 0.1, // 가시성 10% 일 경우
    }
  );

  sections.forEach((section) => {
    if (section.value) {
      observer.observe(section.value);
    }
  });
});
</script>

<style scoped>
section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
