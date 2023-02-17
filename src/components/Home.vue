<script lang="ts" setup>
import homeBgPath from '@/assets/bg-temp.png';
</script>

<template>
    <div class="h-100 m-0 p-0 section" id="home"
        :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${homeBgPath})` }"></div>
</template>