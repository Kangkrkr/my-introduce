<template>
  <v-container id="skills" class="py-16">
    <h1 class="text-h3 font-weight-bold text-center mb-12">My Skills</h1>
    <v-card class="styled-card pa-10">
      <v-row justify="center">
        <v-col v-for="category in skillCategories" :key="category.name" cols="12" md="6">
          <div class="skill-category pa-4 mb-4">
            <h3 class="text-h6 font-weight-bold mb-4 text-grey-darken-3">
              <v-icon class="mr-2" :color="category.color">{{ category.icon }}</v-icon>
              {{ category.name }}
            </h3>
            <div class="d-flex flex-wrap">
              <v-chip
                v-for="skill in category.skills"
                :key="skill"
                class="ma-2"
                :color="category.color"
                label
                variant="elevated"
              >
                {{ skill }}
              </v-chip>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const skillCategories = ref([
  {
    name: 'Languages',
    icon: 'mdi-code-braces',
    color: 'primary',
    skills: ['JAVA', 'JavaScript']
  },
  {
    name: 'Backend',
    icon: 'mdi-server-network',
    color: 'teal-darken-1',
    skills: ['Spring', 'SpringBoot', 'Spring Batch', 'JPA', 'MyBatis']
  },
  {
    name: 'Frontend',
    icon: 'mdi-vuejs',
    color: 'green-darken-1',
    skills: ['Vue', 'Tiles']
  },
  {
    name: 'Database',
    icon: 'mdi-database',
    color: 'orange-darken-1',
    skills: ['Oracle', 'MS SQL', 'MySQL']
  },
  {
    name: 'DevOps & Infra',
    icon: 'mdi-docker',
    color: 'blue-grey-darken-1',
    skills: ['Docker', 'Linux', 'NCP', 'Jenkins', 'Nginx', 'WebToB', 'Jeus', 'GitLab']
  },
  {
    name: 'Etc.',
    icon: 'mdi-dots-horizontal-circle-outline',
    color: 'purple-darken-1',
    skills: ['Git', 'DDD', 'TDD', 'AOP', 'Jennifer APM', 'Konan Search', 'Ethereum']
  }
]);
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