<template>
    <div class="search-container">
        <input
        type="text"
        v-model="name"
        placeholder="名前を入力してね"
        class="search-input"
        />
        <button @click="startSearch" class="search-button">スタート</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref('');
const router = useRouter();

const startSearch = () => {
    console.log("名前:", name.value);
    router.push({ path: '/question', query: { name: name.value } });
};
</script>

<style scoped>
.search-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.search-input {
    margin-bottom: 20px;
    padding: 10px;
    width: 300px;
}

.search-button {
    padding: 10px 20px;
    cursor: pointer;
}
</style>