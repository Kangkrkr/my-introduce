<template>
  <v-container id="career" class="py-16">
    <h1 class="text-h3 font-weight-bold text-center mb-12">Career Path</h1>

    <!-- Desktop View -->
    <v-timeline v-if="mdAndUp" align="start" line-inset="8">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :dot-color="item.icon ? 'primary' : undefined"
        fill-dot
        size="large"
      >
        <template v-slot:opposite>
          <div :class="`pt-1 headline font-weight-bold text-grey-darken-1`">{{ item.startDate }} ~ {{ item.endDate }}</div>
        </template>
        <v-card class="styled-card">
          <v-card-title :class="`text-h6 font-weight-bold text-grey-darken-3`">
            <v-icon v-if="item.icon" color="primary" class="mr-2">{{ item.icon }}</v-icon>
            {{ item.company }}
          </v-card-title>
          <v-card-text class="pa-4">
            <h4 class="text-h6 font-weight-medium mb-3 text-grey-darken-2">{{ item.position }} / {{ item.team }}</h4>
            <div v-for="desc in item.what" :key="desc" class="d-flex align-start mb-2 text-grey-darken-4">
              <v-icon class="mr-2 mt-1" size="small" color="primary">mdi-chevron-right</v-icon>
              <span>{{ desc }}</span>
            </div>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <!-- Mobile View -->
    <div v-else>
        <v-card v-for="(item, i) in items" :key="i" class="styled-card mb-8">
             <v-card-title :class="`text-h6 font-weight-bold text-grey-darken-3`">
                <v-icon v-if="item.icon" color="primary" class="mr-2">{{ item.icon }}</v-icon>
                {{ item.company }}
            </v-card-title>
            <v-card-subtitle class="text-grey-darken-1 font-weight-bold pt-2">
                {{ item.startDate }} ~ {{ item.endDate }}
            </v-card-subtitle>
            <v-card-text class="pa-4">
                <h4 class="text-h6 font-weight-medium mb-3 text-grey-darken-2">{{ item.position }} / {{ item.team }}</h4>
                <div v-for="desc in item.what" :key="desc" class="d-flex align-start mb-2 text-grey-darken-4">
                    <v-icon class="mr-2 mt-1" size="small" color="primary">mdi-chevron-right</v-icon>
                    <span>{{ desc }}</span>
                </div>
            </v-card-text>
        </v-card>
    </div>

  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { careers as careersData } from '@/datas/Career';

const { mdAndUp } = useDisplay();
const { title, data: items } = careersData;
</script>

<style scoped>
.styled-card {
  background: #FFFFFF !important;
  border-radius: 16px !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.styled-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.15) !important;
}

.v-timeline--vertical.v-timeline {
    height: auto;
}
</style>