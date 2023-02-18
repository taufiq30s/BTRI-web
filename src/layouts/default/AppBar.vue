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
        <a class="navlink mx-3 home active" href="#home" v-smooth-scroll>
          Home
        </a>
        <a class="navlink about mx-3" href="#about" v-smooth-scroll>
          About
        </a>
        <a class="navlink character mx-3" href="#character" v-smooth-scroll>
          Character
        </a>
        <v-btn class="bg-pink-accent-1 join mx-3" rounded="pill" href="#join" v-smooth-scroll>
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
const currentMenu = ref('home');

onMounted(() => {
  const sections = document.querySelectorAll('.section');
  const navMenu = document.querySelectorAll('.navlink');

  window.onscroll = () => {
    changeColor();
    changeActiveNavMenu(sections, navMenu)
  }
});

function changeActiveNavMenu (sections: NodeListOf<Element>, navMenu: NodeListOf<Element>) {
  // console.log(`before ${currentMenu.value}`);
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (document.documentElement.scrollTop >= (sectionTop + scrollTop) - 280) {
      currentMenu.value = section.getAttribute('id') ?? 'home';
    }
  });

  // console.log(`after ${currentMenu.value}`);
  navMenu.forEach((menu) => {
    menu.classList.remove("active");
    if (menu.classList.contains(currentMenu.value)) {
      menu.classList.add('active');
    }
  });
}

function changeColor () {
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
