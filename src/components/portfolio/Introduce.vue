<template>
  <v-container id="introduce" class="py-16">
    <h1 class="text-h3 font-weight-bold text-center mb-14">Introduce</h1>
    <v-row align="center" justify="center">
      <v-col cols="12" md="4" class="text-center mb-14">
        <v-avatar size="200">
          <img src="@/assets/profile_resized_200x200.png" alt="Profile Picture">
        </v-avatar>
      </v-col>
      <v-col cols="12" md="8">
        <v-card class="pa-8" elevation="4">
          <h1 class="text-h4 font-weight-bold mb-4">강승윤 (SEONGYOUN KANG)</h1>
          <p class="text-h6 font-weight-light mb-4">9년차 백엔드/풀스택 개발자</p>
          <v-divider class="mb-4"></v-divider>
          <p class="mb-2">고객 중심 사고와 협업을 바탕으로 B2C 서비스 개발 9년차 경력의 백엔드/풀스택 개발자입니다.</p>
          <p class="mb-2">새로운 기술을 배우고 적용하는 것을 즐기며, 서비스 품질 향상과 팀 내 협업 문화를 중시합니다.</p>
          <v-divider class="mt-4 mb-4"></v-divider>
          <p class="mb-2"><v-icon left>mdi-phone</v-icon> <strong>연락처:</strong> 010-6886-3704</p>
          <p class="mb-2"><v-icon left>mdi-email</v-icon> <strong>이메일:</strong> kangkrkr@naver.com</p>
          <p class="mb-2"><v-icon left>mdi-school</v-icon> <strong>학력:</strong> 금오공과대학교 (컴퓨터공학)</p>
          <div class="mt-4">
            <v-btn class="mr-4" icon href="https://github.com/Kangkrkr" target="_blank">
              <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn icon href="https://blog.naver.com/kangkrkr" target="_blank">
              <v-icon>mdi-sticker-text-outline</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
</script>