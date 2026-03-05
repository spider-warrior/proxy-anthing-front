<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { computed } from 'vue'

const router = useRouter()
const userStore = useUserStore()

const firstLetter = computed(() => {
  return userStore.userInfo?.username?.charAt(0)?.toUpperCase() || 'U'
})

function goProfile() {
  router.push('/profile')
}

function handleLogout() {
  userStore.logout()
  router.push('/login')
}
</script>

<template>
  <el-container class="main-layout">
    <el-header class="layout-header">
      <div class="header-left" @click="router.push('/')" style="cursor: pointer">
        <span class="logo-text">Proxy Anything</span>
      </div>
      <div class="header-right">
        <el-dropdown trigger="click">
          <div class="avatar">{{ firstLetter }}</div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="goProfile">个人中心</el-dropdown-item>
              <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>

    <el-main class="layout-main">
      <div class="main-content">
        <router-view />
      </div>
    </el-main>

    <el-footer class="layout-footer">
      &copy; 2026 Proxy Anything. All rights reserved.
    </el-footer>
  </el-container>
</template>

<style scoped>
.main-layout {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.layout-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  padding: 0 24px;
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: 1px;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #1a1a1a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.layout-main {
  flex: 1;
  padding: 24px;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
}

.layout-footer {
  text-align: center;
  color: #999;
  font-size: 14px;
  background-color: #fff;
  border-top: 1px solid #e8e8e8;
}
</style>
