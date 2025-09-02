<template>
  <v-container id="projects" class="py-16">
    <h1 class="text-h3 font-weight-bold text-center mb-12">Projects</h1>
    <v-row>
      <v-col v-for="project in projects" :key="project.name" cols="12" md="6" lg="4">
        <v-card class="styled-card d-flex flex-column" height="100%">
          <v-img
            class="align-end text-white"
            height="200"
            :src="project.photo"
            cover
          >
            <v-card-title class="card-title-background">{{ project.name }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4 text-grey-darken-1">
            {{ project.company }}
          </v-card-subtitle>

          <v-card-text class="flex-grow-1">
            <p class="mb-4 text-grey-darken-4">{{ project.content }}</p>
            <v-chip-group>
              <v-chip
                v-for="skillCategory in project.skills"
                :key="skillCategory.title"
                class="ma-1"
                color="primary"
                label
                size="small"
              >
                <span v-for="skill in skillCategory.skills" :key="skill">{{ skill }}</span>
              </v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions class="px-4 pb-4">
            <v-spacer></v-spacer>
            <v-btn v-if="project.github" :href="project.github" target="_blank" prepend-icon="mdi-github" variant="text">
              GitHub
            </v-btn>
            <v-btn v-if="project.link" :href="project.link" target="_blank" prepend-icon="mdi-open-in-new" variant="text">
              View
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { projects as projectsData } from '@/datas/Projects';

const { title, data: projects } = projectsData;
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

.card-title-background {
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
}
</style>