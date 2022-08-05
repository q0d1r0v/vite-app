<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from '../../store/store.js';

const store = useStore()
const router = useRouter()

function changeData() {
    store.changeValue()
}

function goPage() {
    router.push("/kadirov")
}
</script>

<template>
    <div>
        home-page
    </div>
    <div>
        {{ store.name }}
    </div>
    <button @click="changeData()">change</button>
    <button @click="goPage()">kadirov-page</button>
</template>

<style scoped>
</style>
