<template>
    <div>
        <h1>問題</h1>
        <!-- ここで問題を表示 -->
        <button @click="submitName">終了</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const name = router.currentRoute.value.query.name;

const submitName = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });

        if (!response.ok) {
            throw new Error('APIリクエストに失敗しました');
        }

        alert('名前が登録されました');
        // 必要に応じて他のページへの遷移など
    } catch (error) {
        console.error('エラーが発生しました:', error);
        alert('エラーが発生しました');
    }
};
</script>

<style scoped>
.end-container {
  /* スタイルをここに記述 */
}
</style>