<template>
  <v-container id="skills" class="py-16">
    <h1 class="text-h3 font-weight-bold text-center mb-12">{{ title }}</h1>
    <v-card class="styled-card pa-10">
      <v-row justify="center">
        <v-col v-for="skill in data" :key="skill.title" cols="12" md="6">
          <div class="skill-category pa-4 mb-4">
            <h3 class="text-h6 font-weight-bold mb-4 text-grey-darken-3">
              <v-icon class="mr-2" :color="skill.color">{{ skill.icon }}</v-icon>
              {{ skill.title }}
            </h3>
            <div class="d-flex flex-wrap">
              <v-chip
                v-for="item in skill.skills"
                :key="item"
                class="ma-2"
                :color="skill.color"
                label
                variant="elevated"
              >
                {{ item }}
              </v-chip>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { skills } from '@/datas/Skills';
const { title , data } = skills
</script>

<style scoped>
.styled-card {
  background: #FFFFFF;
  border-radius: 16px !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.styled-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.15) !important;
}

.skill-category {
  transition: background-color 0.3s ease;
  border-radius: 12px;
  border: 1px solid #eee;
}

.skill-category:hover {
  background-color: #f9f9f9;
}

.v-chip {
    color: white !important;
}
</style>