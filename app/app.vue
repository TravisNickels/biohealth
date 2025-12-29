<script setup>
const base = useRuntimeConfig().app.baseURL

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'Travis Nickels' },
    { name: 'robots', content: 'index, follows' }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: `${base}favicon.ico` }],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Pµre BioHealth'
const description = 'A prototype website for Pµre BioHealth, a company dedicated to understanding microplastics and protecting long-term health.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://travisnickels.github.io/biohealth/ogImage.png',

  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: 'https://travisnickels.github.io/biohealth/ogImage.png'
})
</script>

<template>
  <UApp>
    <HeaderBar />

    <UMain>
      <NuxtPage />
    </UMain>

    <!-- <USeparator icon="i-simple-icons-nuxtdotjs" /> -->

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">Pµre BioHealth • © {{ new Date().getFullYear() }}</p>
      </template>

      <template #right>
        <UButton to="https://www.linkedin.com" target="_blank" icon="i-simple-icons-linkedin" aria-label="LinkedIn" color="neutral" variant="ghost" />
        <UButton to="https://x.com" target="_blank" icon="i-simple-icons-x" aria-label="X" color="neutral" variant="ghost" />
        <UButton to="https://www.facebook.com" target="_blank" icon="i-simple-icons-facebook" aria-label="Facebook" color="neutral" variant="ghost" />
        <UButton
          to="https://www.instagram.com"
          target="_blank"
          icon="i-simple-icons-instagram"
          aria-label="Instagram"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
