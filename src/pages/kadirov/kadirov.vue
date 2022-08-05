<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from '../../store/store.js';

const store = useStore()
const router = useRouter()

function changeData() {
    store.changeValue()
}

function goPage() {
    router.push("/")
}
</script>

<template>
    <div>
        <div>
            kadirov-app
        </div>
        <div>
            {{ store.name }}
        </div>
        <button @click="changeData()">change</button>
        <button @click="goPage()">home-page</button>
    </div>
</template>

<style scoped>
</style>
