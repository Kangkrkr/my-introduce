<template>
  <v-container id="projects" class="py-16">
    <h1 class="text-h3 font-weight-bold text-center mb-16">Projects</h1>
    <v-row>
      <v-col v-for="project in projects" :key="project.title" cols="12" md="6" lg="4">
        <v-card class="mx-auto" max-width="400" height="100%">
          <v-img class="white--text align-end" height="200px" :src="project.image">
            <v-card-title>{{ project.title }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">{{ project.subtitle }}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ project.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn v-if="project.github" color="primary" text :href="project.github" target="_blank">
              GitHub
            </v-btn>

            <v-btn v-if="project.link" color="primary" text :href="project.link" target="_blank">
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
    image: 'https://via.placeholder.com/400x200',
  },
  {
    title: '전자 계약 사이트',
    subtitle: '롯데렌탈(주)',
    description: '신차, 중고차, 법인 등 다양한 종류의 계약을 등록하고 관리하는 전자 계약 사이트를 운영 및 개발했습니다.',
    image: 'https://via.placeholder.com/400x200',
  },
  {
    title: 'LMS 솔루션 "퍼즐"',
    subtitle: '주식회사퍼브',
    description: 'LMS/교육 서비스 "퍼즐"의 개발 및 운영, 클라우드 기반 무중단 배포 및 CI/CD 구축 등 DevOps 업무를 수행했습니다.',
    image: 'https://via.placeholder.com/400x200',
  },
  {
    title: '커머스 "포인트샵/기프트샵"',
    subtitle: '브이피주식회사',
    description: '커머스 서비스 개발 및 블록체인 기반 인증/지갑/쿠폰 발급 시스템을 개발했습니다.',
    image: 'https://via.placeholder.com/400x200',
  },
  {
    title: 'KCar 직영몰 & 올댓옥션',
    subtitle: '케이카(주) / SK엔카',
    description: '직영몰 및 경매 사이트 개발/운영, 검색/금융 서비스 구축, Spring Batch/Framework 마이그레이션 등을 수행했습니다.',
    image: 'https://via.placeholder.com/400x200',
  },
]);
</script>