<template>
  <v-app-bar app color="rgba(255, 255, 255, 0.8)" flat>
    <v-toolbar-title :class="titleMenu.class">{{ titleMenu.title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="d-none d-md-flex">

      <template v-for="menu in mainMenus" :key="menu.title">

        <!-- 서브 메뉴가 존재하는 경우만 메뉴 및 목록 형태로 노출 -->
        <v-menu v-if="menu.subMenus && menu.subMenus.length > 0" open-on-hover>
          
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" :href="menu.link" class="mx-1">
              {{ menu.title }}
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <template v-for="subMenu in menu.subMenus" :key="subMenu.title">
              <v-list-item :href="subMenu.link">
                <v-list-item-title>{{ subMenu.title }}</v-list-item-title>
              </v-list-item>
            </template>
          </v-list>
        </v-menu>

        <!-- 서브 메뉴가 없는 경우, 기본 메뉴 버튼 -->
        <v-btn v-else :href="menu.link" class="mx-1">
          {{ menu.title }}
        </v-btn>

      </template>

    </div>
    <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>

  <!-- 모바일용 네비게이션 드로워 -->
  <v-navigation-drawer v-model="drawer" temporary app class="d-md-none">
    <v-list>
      <template v-for="menu in mainMenus" :key="menu.title">
        <v-list-group v-if="menu.subMenus && menu.subMenus.length > 0">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :title="menu.title"></v-list-item>
          </template>
          <v-list-item
            v-for="(subMenu, i) in menu.subMenus"
            :key="i"
            :title="subMenu.title"
            :href="subMenu.link"
          ></v-list-item>
        </v-list-group>
        <v-list-item v-else :title="menu.title" :href="menu.link"></v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { MainMenu, TitleMenu } from '@/types/portfolio/Header'

const titleMenu = ref<TitleMenu>({
  title: 'KANGKRKR',
  class: 'font-weight-bold'
})

const mainMenus = ref<MainMenu[]>([])
const drawer = ref(false)

onMounted(() => {
  mainMenus.value = [
    {
      title: 'Introduce',
      link: '#introduce',
      subMenus: [
        {
          title: 'Who am I?',
          link: '#introduce'
        },
        {
          title: 'Contact',
          link: '#introduce'
        },
      ]
    },
    {
      title: 'Skills',
      link: '#skills'
    },
    {
      title: 'Projects',
      link: '#projects'
    },
    {
      title: 'Career',
      link: '#career'
    }
  ]
})
</script>

<style scoped>
.v-btn {
  transition: background-color 0.3s ease;
}
.v-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
