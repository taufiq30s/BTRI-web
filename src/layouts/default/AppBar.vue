<template>
  <v-app-bar floating flat :color="bgColor">
    <template v-slot:prepend>
      <v-app-bar-nav-icon class="d-md-none" />
    </template>
    <v-app-bar-title>
      BTRI
    </v-app-bar-title>
    <template v-slot:append>
      <div class="d-none d-md-block">
        <v-btn class="navlink" variant="plain" href="#">
          Home
        </v-btn>
        <v-btn class="navlink" variant="plain" href="#">
          About
        </v-btn>
        <v-btn class="navlink" variant="plain" href="#">
          Character
        </v-btn>
        <v-btn class="bg-pink-accent-1" rounded="pill">
          Join Us
        </v-btn>
      </div>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';

  const bgColor = ref('transparent');
  
  onMounted(() =>{
    window.onscroll = () => {
      changeColor();
    }
  });
  
  const changeColor = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      bgColor.value = 'black';
    }
    else {
      bgColor.value = 'transparent';
    }
  }
</script>
