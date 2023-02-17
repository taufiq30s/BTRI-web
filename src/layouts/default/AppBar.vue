<template>
  <v-app-bar class="px-5 px-md-15" height="120" :class="navColorClass" floating flat :color="bgColor">
    <template v-slot:prepend>
      <v-app-bar-nav-icon class="d-md-none white" />
    </template>
    <v-app-bar-title>
      <v-img src="@/assets/logo.webp" class="mx-2" max-width="90" contain />
    </v-app-bar-title>
    <template v-slot:append>
      <div class="d-none d-md-block" id="nav-menu">
        <a class="navlink mx-3 active" href="#home" v-smooth-scroll>
          Home
        </a>
        <a class="navlink mx-3" href="#about" v-smooth-scroll>
          About
        </a>
        <a class="navlink mx-3" href="#character" v-smooth-scroll>
          Character
        </a>
        <v-btn class="bg-pink-accent-1" rounded="pill" href="#join" v-smooth-scroll>
          Join Us
        </v-btn>
      </div>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const navColorClass = ref('nav-transparent');
const bgColor = ref('transparent');
const sections = document.querySelectorAll('.section');
const navMenu = document.querySelectorAll('navlink');
const currentMenu = ref('home');

onMounted(() => {
  window.onscroll = () => {
    changeColor();
  }
});

const changeColor = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    navColorClass.value = 'nav-colored';
    bgColor.value = 'black';
  }
  else {
    navColorClass.value = 'nav-transparent';
    bgColor.value = 'transparent';
  }
}
</script>
