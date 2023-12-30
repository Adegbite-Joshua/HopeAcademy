// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 2000,
//     host: '0.0.0.0'
//   }
// })


import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import WorkboxPlugin from 'workbox-vite-plugin';

export default defineConfig({
  plugins: [
    VitePWA(),
    WorkboxPlugin({
      // Workbox options go here
      // See: https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.GenerateSW#GenerateSW
      clientsClaim: true,
      skipWaiting: true,

      // Precaching options
      include: [/\.html$/, /\.js$/, /\.css$/, /\.png$/, /\.svg$/, /\.json$/],
      exclude: [/\.map$/, /^manifest.*\.js(?:on)?$/, /\.json$/],

      // Runtime caching options
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|webp|svg)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
            },
          },
        },
        {
          urlPattern: /\.(?:js|css)$/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-assets-cache',
          },
        },
      ],

      // Other options
      cleanupOutdatedCaches: true,
    }),
  ],
});
