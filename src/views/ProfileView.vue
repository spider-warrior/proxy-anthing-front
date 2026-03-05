<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const firstLetter = computed(() => {
  return userStore.userInfo?.username?.charAt(0)?.toUpperCase() || 'U'
})
</script>

<template>
  <div class="profile-page">
    <div class="profile-card">
      <div class="profile-avatar">{{ firstLetter }}</div>
      <el-descriptions title="用户信息" :column="1" border>
        <el-descriptions-item label="用户名">
          {{ userStore.userInfo?.username }}
        </el-descriptions-item>
        <el-descriptions-item label="用户 ID">
          {{ userStore.userInfo?.id }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<style scoped>
.profile-page {
  padding: 40px 0;
  display: flex;
  justify-content: center;
}

.profile-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  padding: 40px;
  width: 500px;
}

.profile-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #1a1a1a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: 600;
  margin: 0 auto 32px;
}
</style>
