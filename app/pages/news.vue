<script setup lang="ts">
const bookTitle = '"Microplastics: What can be done?" - Coming Soon'
</script>

<template>
  <UPageSection
    title="News & Publications"
    description="Stay informed with the latest developments, research findings, and company news from Pµre Bio Health. Our news section provides insights into our ongoing projects, collaborations, and advancements in the field of microplastics and human health."
    variant="subtle"
  >
    <UPageColumns>
      <UPageCard class="surface-card surface-card-hover translate-y-6 animate-card-in" reverse>
        <img src="/images/molecules_03.png" class="h-56 w-full rounded-lg" />

        <div><p class="text-xs text-slate-500 mt-2">Published · 2025 · Peer-reviewed</p></div>
        <template #title>
          <div>
            Reduction of Systemic Microplastic and Nano Plastic Burden Using a Food-Grade Plastic Adsorptive Compound (PAC): A Proof-of-Concept Human
            Study
          </div>
        </template>
        <template #description>
          <div class="mt-4 flex items-center gap-4">
            <UButton
              to="/publications/reduction-of-systemic-microplastic-and-nano-plastic-burden-using-a-foodgrade-plastic-adsorptive-compound-pac-a-proofofco.pdf"
              target="_blank"
              variant="soft"
              color="primary"
              icon="i-lucide-file-text"
            >
              View PDF
            </UButton>

            <a
              href="/publications/reduction-of-systemic-microplastic-and-nano-plastic-burden-using-a-foodgrade-plastic-adsorptive-compound-pac-a-proofofco.pdf"
              download
              class="text-xs text-slate-500 hover:text-slate-300 transition"
            >
              Download
            </a>
          </div>
        </template>
      </UPageCard>
      <UPageCard
        :title="bookTitle"
        description="We are working hard on publishing a book exploring the science, risks, and realities of microplastics and what today's technology can (and can't) do about them."
        class="surface-card surface-card-hover translate-y-6 animate-card-in"
        reverse
      >
        <img src="/images/microplastics_04.png" class="h-56 w-full rounded-lg" />
        <p class="text-xs text-slate-500 mt-2">Manuscript in development · 2026</p>
      </UPageCard>
      <UPageCard
        title="Latest research"
        description="Ongoing research updates and early findings, published as soon as the data survives peer review and several cups of coffee."
        class="surface-card surface-card-hover translate-y-6 animate-card-in"
        reverse
      >
        <img src="/images/molecules_02.png" class="h-56 w-full rounded-lg" />
      </UPageCard>
    </UPageColumns>
  </UPageSection>
</template>
