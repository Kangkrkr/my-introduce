<template>
  <v-container id="projects" class="py-16">
    <h1 class="text-h3 font-weight-bold text-center mb-12">Projects</h1>
    <v-row>
      <v-col v-for="project in projects" :key="project.title" cols="12" md="6" lg="4">
        <v-card class="styled-card d-flex flex-column" height="100%">
          <v-img
            class="align-end text-white"
            height="200"
            :src="project.image"
            cover
          >
            <v-card-title class="card-title-background">{{ project.title }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4 text-grey-darken-1">
            {{ project.subtitle }}
          </v-card-subtitle>

          <v-card-text class="flex-grow-1">
            <p class="mb-4 text-grey-darken-4">{{ project.description }}</p>
            <v-chip-group>
              <v-chip
                v-for="tech in project.technologies"
                :key="tech"
                class="ma-1"
                color="primary"
                label
                size="small"
              >
                {{ tech }}
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
import { ref } from 'vue';

const projects = ref([
  {
    title: '마이카 신차 장기 렌트 서비스',
    subtitle: '롯데렌탈(주)',
    description: '신차 장기 렌트 서비스의 Front-Office 및 Back-Office 운영 및 개발을 담당했습니다.',
    image: 'https://images.unsplash.com/photo-1558981001-792f6c0287e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    technologies: ['Spring',],
    github: '',
    link: ''
  },
  {
    title: '전자 계약 사이트',
    subtitle: '롯데렌탈(주)',
    description: '신차, 중고차, 법인 등 다양한 종류의 계약을 등록하고 관리하는 전자 계약 사이트를 운영 및 개발했습니다.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    technologies: ['Spring',],
    github: '',
    link: ''
  },
  {
    title: 'LMS 솔루션 "퍼즐"',
    subtitle: '주식회사퍼브',
    description: 'LMS/교육 서비스 "퍼즐"의 개발 및 운영, 클라우드 기반 무중단 배포 및 CI/CD 구축 등 DevOps 업무를 수행했습니다.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    technologies: ['Spring Boot',],
    github: '',
    link: ''
  },
  {
    title: '커머스 "포인트샵/기프트샵"',
    subtitle: '브이피주식회사',
    description: '커머스 서비스 개발 및 블록체인 기반 인증/지갑/쿠폰 발급 시스템을 개발했습니다.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    technologies: ['JSP'],
    github: '',
    link: ''
  },
  {
    title: 'KCar 직영몰 & 올댓옥션',
    subtitle: '케이카(주) / SK엔카',
    description: '직영몰 및 경매 사이트 개발/운영, 검색/금융 서비스 구축, Spring Batch/Framework 마이그레이션 등을 수행했습니다.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    technologies: ['Spring',],
    github: '',
    link: ''
  },
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

.card-title-background {
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
}
</style>