<script lang="ts" setup>
    function test () {
        console.log('masul');
    }
</script>

<template>
    <div>
        <v-container class="p-11">
            <h1 class="text-5xl">Characters</h1>
            <div class="flex justify-center">
                <div @click="test" class="bg-pink-500 cursor-pointer rounded-full w-24 h-24 mx-4 pt-1 text-center">
                    <img src="@/assets/characters/hitori_gotoh_profile.webp" class="w-20 h-20" alt="" srcset="">
                </div>
                <div @click="test" class="bg-yellow-400 cursor-pointer rounded-full w-24 h-24 mx-4 pt-1 text-center">
                    <img src="@/assets/characters/nijika_ijichi_profile.webp" class="w-20 h-20" alt="" srcset="">
                </div>
                <div @click="test" class="bg-blue-500 cursor-pointer rounded-full w-24 h-24 mx-4 pt-1 text-center">
                    <img src="@/assets/characters/ryo_yamada_profile.webp" class="w-20 h-20" alt="" srcset="">
                </div>
                <div @click="test" class="bg-red-500 cursor-pointer rounded-full w-24 h-24 mx-4 pt-1 text-center">
                    <img src="@/assets/characters/ikuyo_kita_profile.webp" class="w-20 h-20" alt="" srcset="">
                </div>
            </div>
        </v-container>
    </div>
</template>