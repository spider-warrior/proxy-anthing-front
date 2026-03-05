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
            Proxy Anything Client 是一款轻量、易用的跨平台代理客户端，帮助您快速接入代理服务。
          </p>

          <ul class="feature-list">
            <li><span class="feature-label">多平台支持</span>同时提供 Windows 和 Linux 版本，覆盖主流操作系统</li>
            <li><span class="feature-label">加密 / 非加密通道</span>支持加密与非加密两种模式，加密通信需配合 Proxy Anything Server 实现</li>
            <li><span class="feature-label">TCP &amp; UDP 协议</span>全面支持 TCP 和 UDP 协议转发，满足多样化的网络代理场景</li>
          </ul>

          <el-alert
            type="warning"
            :closable="false"
            show-icon
            title="配置文件需要与应用程序放在同一目录下，客户端启动时会自动读取。"
            class="config-tip"
          />

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
            Proxy Anything Server 是一款高性能的代理服务端程序，帮助您快速搭建私有代理服务。
          </p>

          <ul class="feature-list">
            <li><span class="feature-label">多平台支持</span>同时提供 Windows 和 Linux 版本，覆盖主流操作系统</li>
            <li><span class="feature-label">加密通道</span>作为加密通信的服务端，配合 Proxy Anything Client 实现加密数据传输</li>
            <li><span class="feature-label">TCP &amp; UDP 协议</span>全面支持 TCP 和 UDP 协议转发，满足多样化的网络代理场景</li>
          </ul>

          <el-alert
            type="warning"
            :closable="false"
            show-icon
            title="配置文件需要与应用程序放在同一目录下，服务端启动时会自动读取。"
            class="config-tip"
          />

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
  margin-bottom: 20px;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-list li {
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  padding-left: 16px;
  position: relative;
}

.feature-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #1a1a1a;
}

.feature-label {
  font-weight: 600;
  color: #1a1a1a;
  margin-right: 8px;
}

.feature-label::after {
  content: '—';
  margin-left: 8px;
  color: #ccc;
}

.config-tip {
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
