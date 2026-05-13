import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** WhatsApp / crawlers reliably fetch OG images from the deployment host (same pattern as the German site). */
function siteOgImageUrl() {
  const host = process.env.VERCEL_URL
  if (host != null && host !== '') {
    return `https://${host}/og-image.jpg`
  }
  return 'https://jonasandcassie.com/og-image.jpg'
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inject-site-og-image',
      transformIndexHtml(html) {
        return html.replaceAll('__SITE_OG_IMAGE__', siteOgImageUrl())
      },
    },
  ],
})
