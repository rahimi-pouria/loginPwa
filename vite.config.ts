import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
 plugins: [
   vue(),
   VitePWA({
     manifest: {
       name: 'Login App',
       short_name: 'Login',
       theme_color: '#ffffff',
       icons: [
         {
           src: '/path-to-icon/icon-192x192.png',
           sizes: '192x192',
           type: 'image/png',
         },
         {
           src: '/path-to-icon/icon-512x512.png',
           sizes: '512x512',
           type: 'image/png',
         },
       ],
     },
     devOptions: {
       enabled: true
     }
   }),
 ],
})
