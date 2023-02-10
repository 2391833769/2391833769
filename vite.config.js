import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    proxy: { // 配置跨域
      '/store': {
        // target: 'http://my.mcdd.top:9527/',
        target: 'http://api.map.baidu.com', // 根据需求替换 请求后台接口
        changeOrigin: true, // 允许跨域
        ws: true,
        rewrite: (path) => path.replace(/^\/store/, '') // 重写请求
    }
    }
  }
})
