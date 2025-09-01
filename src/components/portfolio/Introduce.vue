<template>
  <v-container id="introduce" class="py-16">
    <h1 class="text-h3 font-weight-bold text-center mb-12">Introduce</h1>
    <v-row align="center" justify="center">
      <v-col cols="12" md="4" class="text-center mb-12">
        <v-avatar size="250" class="elevation-12">
          <img src="@/assets/profile_resized_200x200.png" alt="Profile Picture">
        </v-avatar>
      </v-col>
      <v-col cols="12" md="8">
        <v-card class="styled-card pa-10">
          <div class="text-center text-md-left">
            <h1 class="text-h3 font-weight-bold mb-2 text-grey-darken-3">강승윤</h1>
            <p class="text-h5 font-weight-light mb-6 text-grey-darken-1">Backend & Full-stack Developer</p>
          </div>
          
          <p class="text-body-1 mb-8 text-grey-darken-4" style="line-height: 1.8;">
            고객 중심 사고와 협업을 바탕으로 B2C 서비스 개발 9년차 경력의 백엔드/풀스택 개발자입니다. 새로운 기술을 배우고 적용하는 것을 즐기며, 서비스 품질 향상과 팀 내 협업 문화를 중시합니다.
          </p>

          <v-row>
            <v-col cols="12" sm="6">
              <p class="mb-3 text-grey-darken-2"><v-icon class="mr-2" color="primary">mdi-email</v-icon> kangkrkr@naver.com</p>
              <p class="text-grey-darken-2"><v-icon class="mr-2" color="primary">mdi-phone</v-icon> 010-6886-3704</p>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="mb-3 text-grey-darken-2"><v-icon class="mr-2" color="primary">mdi-school</v-icon> 금오공과대학교 (컴퓨터공학)</p>
              <div class="d-flex justify-center justify-md-start mt-4">
                <v-btn class="mr-4" icon href="https://github.com/Kangkrkr" target="_blank" variant="text">
                  <v-icon size="x-large">mdi-github</v-icon>
                </v-btn>
                <v-btn icon href="https://blog.naver.com/kangkrkr" target="_blank" variant="text">
                  <v-icon size="x-large">mdi-sticker-text-outline</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
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
</style>