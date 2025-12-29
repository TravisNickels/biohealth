<script setup lang="ts">
const bookTitle = '"Microplastics: We\'re all going to die!" - Coming Soon'
</script>

<template>
  <UPageSection
    title="News & Publications"
    description="Stay informed with the latest developments, research findings, and company news from Pµre Bio Health. Our news section provides insights into our ongoing projects, collaborations, and advancements in the field of microplastics and human health."
    variant="subtle"
  >
    <UPageColumns>
      <UPageCard
        title="Publication"
        description="Peer-reviewed research and formal publications authored by our team, translating complex science into evidence that matters."
        class="surface-card surface-card-hover translate-y-6 animate-card-in"
        reverse
      >
        <img src="/molecules_03.png" class="h-56 w-full rounded-lg" />
      </UPageCard>
      <UPageCard
        :title="bookTitle"
        description="We are working hard on publishing a book exploring the science, risks, and realities of microplastics and what today's technology can (and can't) do about them."
        class="surface-card surface-card-hover translate-y-6 animate-card-in"
        reverse
      >
        <img src="/microplastics_04.png" class="h-56 w-full rounded-lg" />
        <p class="text-xs text-slate-500 mt-2">Manuscript in development · 2025</p>
      </UPageCard>
      <UPageCard
        title="Latest research"
        description="Ongoing research updates and early findings, published as soon as the data survives peer review and several cups of coffee."
        class="surface-card surface-card-hover translate-y-6 animate-card-in"
        reverse
      >
        <img src="/molecules_02.png" class="h-56 w-full rounded-lg" />
      </UPageCard>
    </UPageColumns>
  </UPageSection>
</template>
