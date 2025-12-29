<script setup>
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
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

<!-- <UHeader>
      <template #left>
        <NuxtLink to="/">
          <AppLogo class="w-auto h-6 shrink-0" />
          <PureBioHealthLogo class="w-auto h-12" />
        </NuxtLink>

        <TemplateMenu />
      </template>

      <template #right>
        <UColorModeButton />

        <UButton
          to="https://github.com/nuxt-ui-templates/starter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader> -->
