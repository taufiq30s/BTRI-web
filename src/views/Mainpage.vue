<template>
  <Home class="h-screen m-0 p-0 section" id="home" :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${homeBgPath})` }" />
  <About class="m-0 p-0 section bg-black" id="about" />
  <Character class="m-0 p-0 section" id="character" :style="{ background: `url(${characterBgPath}), #0a0a0a` }" />
  <Joinus class="m-0 p-0 section" id="join" :style="{ backgroundImage: `url(${joinUsBgPath})` }" />
  <Footer />
</template>

<script lang="ts" setup>
  import Home from '@/components/Home.vue';
  import About from '@/components/About.vue';
  import Character from '@/components/Character.vue';
  import Joinus from '@/components/JoinUs.vue';
  import Footer from '@/layouts/default/Footer.vue';

  import homeBgPath from '@/assets/bg-temp.png';
  import characterBgPath from '@/assets/bg-chara.png';
  import joinUsBgPath from '@/assets/bg-temp3.jpg';
</script>
