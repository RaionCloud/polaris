<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout />

  <!-- 全局底部备案（所有页面都显示，不报错） -->
  <footer class="global-footer">
    <div class="footer-inner">
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">冀ICP备2025115176号-5</a>
      <a href="https://beian.mps.gov.cn/#/query/webSearch?code=13050302002061" target="_blank" rel="noopener" class="police-beian">
        <img src="/ga_icon.png" alt="公安备案图标" />
        冀公网安备13050302002061号
      </a>
      <span>© Aopan co., ltd.,</span>
    </div>
  </footer>
</template>

<style scoped>
.global-footer {
  width: 100%;
  padding: 20px 0;
  margin-top: 40px;
}

.footer-inner {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.global-footer a {
  color: #666;
  text-decoration: none;
}

.global-footer a:hover {
  color: #7B4220;
}

.police-beian {
  display: inline-flex;
  align-items: center;
  gap: .6rem;
}

.police-beian img {
  width: 16px;
  height: 16px;
  vertical-align: middle;
}
</style>