<script setup lang="ts">
import { ref } from 'vue'

type OsType = 'windows' | 'linux'

const clientOs = ref<OsType>('windows')
const serverOs = ref<OsType>('windows')

const clientDownloadLinks: Record<OsType, string> = {
  windows: '#',
  linux: '#',
}

const serverDownloadLinks: Record<OsType, string> = {
  windows: '#',
  linux: '#',
}
</script>

<template>
  <div class="home-page">
    <el-row :gutter="24">
      <!-- 左列：Client -->
      <el-col :span="12">
        <div class="product-card">
          <h2 class="card-title">Proxy Anything Client</h2>
          <p class="card-desc">
            Proxy Anything Client 是一款功能强大的跨平台代理客户端，支持 Windows 和 Linux
            系统。它提供了对 HTTP、HTTPS、SOCKS5 等多种代理协议的全面支持，让您可以根据需求灵活选择。
            客户端采用直观的图形化界面设计，即使是初次使用也能轻松上手。内置的智能路由规则引擎支持按域名、
            IP 段、地理位置等条件自动分流，配合高效的连接池管理和流量压缩技术，为您提供稳定流畅的代理体验。
          </p>

          <div class="btn-group">
            <div class="download-row">
              <el-select v-model="clientOs" size="large" style="width: 130px">
                <el-option label="Windows" value="windows" />
                <el-option label="Linux" value="linux" />
              </el-select>
              <el-button type="primary" size="large" tag="a" :href="clientDownloadLinks[clientOs]">
                下载客户端
              </el-button>
            </div>
            <el-button size="large" tag="a" href="#">
              下载配置
            </el-button>
          </div>
        </div>
      </el-col>

      <!-- 右列：Server -->
      <el-col :span="12">
        <div class="product-card">
          <h2 class="card-title">Proxy Anything Server</h2>
          <p class="card-desc">
            Proxy Anything Server 是一款高性能的代理服务端程序，专为生产环境设计。它采用异步 I/O
            架构，能够高效处理大量并发连接，轻松应对高流量场景。服务端内置完善的用户认证体系，支持多用户管理
            和精细的权限控制。实时流量统计功能帮助您全面掌握代理使用情况。支持 Docker 一键部署，
            配合详细的日志监控和健康检查机制，让运维管理变得简单高效，是搭建私有代理服务的理想选择。
          </p>

          <div class="btn-group">
            <div class="download-row">
              <el-select v-model="serverOs" size="large" style="width: 130px">
                <el-option label="Windows" value="windows" />
                <el-option label="Linux" value="linux" />
              </el-select>
              <el-button type="primary" size="large" tag="a" :href="serverDownloadLinks[serverOs]">
                下载服务端
              </el-button>
            </div>
            <el-button size="large" tag="a" href="#">
              下载配置
            </el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.home-page {
  padding: 40px 0;
}

.product-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  padding: 32px;
}

.card-title {
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
}

.card-desc {
  font-size: 14px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 24px;
}

.btn-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.download-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-group .el-button {
  width: fit-content;
}
</style>
