<script setup lang="ts">
const base = useRuntimeConfig().app.baseURL
const cards = ref([
  {
    title: 'Molecular Filtration',
    description: 'Research-driven filtration approaches designed to selectively bind and remove microplastics from water and food systems hello.',
    img: 'ChemistryEquipment_03.png'
  },
  {
    title: 'Environmental Sensing',
    description:
      'Precision sensing and sampling methods to detect microplastics in air, water, and soil, supporting exposure mapping and research analysis.',
    img: 'microplastics_06.png'
  },
  {
    title: 'Data & Research Platform',
    description:
      'A secure data platform for aggregating research findings, exposure measurements, and longitudinal trends across studies and environments.',
    img: 'data_analysis.png'
  },
  {
    title: 'Future Innovations',
    description:
      'Ongoing investigation into advanced materials, bioengineering, and analytical methods that may support future microplastics mitigation strategies.',
    img: 'future_innovations_01.png'
  }
])
</script>

<template>
  <UPageSection
    title="Our Technologies"
    description="Pµre BioHealth develops and evaluates technologies aimed at understanding, measuring, and reducing microplastics exposure across environmental and biological systems."
    variant="subtle"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
      <UPageCard
        v-for="(card, i) in cards"
        :key="card.title"
        :title="card.title"
        :description="card.description"
        class="group relative overflow-hidden bg-slate-900/60 border border-white/5 backdrop-blur transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(56,189,248,0.25)] opacity-0 translate-y-6 animate-card-in"
        :style="`animation-delay: ${i * 120}ms`"
      >
        <!-- class="surface-card surface-card-hover translate-y-6 animate-card-in" -->
        <!-- class="group relative overflow-hidden bg-slate-900/60 border border-white/5 backdrop-blur transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(56,189,248,0.25)] opacity-0 translate-y-6 animate-card-in" -->

        <!-- Accent glow layer -->
        <div
          class="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        />

        <!-- Image -->
        <img
          :src="base + card.img"
          class="mt-6 rounded-md max-h-60 w-full object-cover opacity-80 grayscale-10 transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-[1.02]"
          :alt="card.title"
        />
        <span class="text-xs uppercase tracking-wider text-cyan-400/70"> Active Research </span>
      </UPageCard>
    </div>
    <p class="mt-12 text-sm text-neutral-600 max-w-3xl">
      These technologies represent an evolving research and development roadmap. Current efforts focus on validation, feasibility, and responsible
      translation of scientific findings into real-world applications.
    </p>
  </UPageSection>
</template>
