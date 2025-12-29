<script setup lang="ts">
const base = useRuntimeConfig().app.baseURL
const heroImage = ref(base + 'lab_01.png')
const footerImage = ref(base + 'abstract_bg_22.png')
</script>

<template>
  <div>
    <UPageHero
      title="Understanding Microplastics. Protecting Long-Term Health."
      description="Pµre BioHealth translates emerging scientific research on microplastics and environmental exposure into clear, practical insight — helping people and organizations make better decisions for long-term health."
      :links="[
        {
          label: 'Explore Our Technologies',
          to: '/technologies',
          trailingIcon: 'i-lucide-arrow-right',
          size: 'xl'
        }
      ]"
      class="relative"
      :ui="{ wrapper: 'relative' }"
    >
      <template #top>
        <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${heroImage})` }" />
        <div
          class="absolute inset-0 bg-linear-to-b from-[color-mix(in_oklab,var(--ui-bg)_1%,transparent)] via-[color-mix(in_oklab,var(--ui-bg)_75%,transparent)] to-[color-mix(in_oklab,var(--ui-bg)_1%,transparent)]"
        />
      </template>
    </UPageHero>

    <UPageSection title="What We Do">
      <UPageCard class="h-auto w-auto" orientation="horizontal" reverse variant="subtle">
        <template #description>
          <p class="text-lg">
            At Pµre BioHealth, our mission is to bridge the gap between complex scientific research and practical health solutions. We focus on
            microplastics — tiny plastic particles that have become pervasive in our environment and are increasingly linked to health concerns.
          </p>
          <p class="mt-12 text-lg">
            Through rigorous analysis and clear communication, we aim to empower individuals, healthcare professionals, and policymakers with the
            knowledge they need to make informed decisions about reducing microplastic exposure and protecting long-term health.
          </p>
        </template>
        <img src="/microplastics_02.png" class="rounded-lg" />
      </UPageCard>
    </UPageSection>

    <UPageSection
      title="Why Microplastics Matter"
      description="Due to their microscopic size, microplastics can interact with biological systems in ways larger particles cannot. Ongoing research is exploring how these particles affect cells, organs, and long-term physiological processes."
      variant="subtle"
    ></UPageSection>

    <UPageSection
      title="From Research to Responsible Insight"
      description="Pure Bio Health was founded on the belief that emerging scientific findings should not remain locked behind academic
      language or inaccessible paywalls. Our work focuses on translating complex research — including studies on microplastics and
      environmental exposure — into insights that are accurate, responsible, and usable."
      variant="subtle"
    >
      <UPageColumns :columns="2" class="gap-8 md:gap-12 lg:gap-16 mt-8">
        <UPageCard
          title="Research Summaries"
          description="Clear, accessible summaries of peer-reviewed studies on microplastics and human health."
          icon="i-lucide-book-open"
        />
        <UPageCard
          title="Practical Guidance"
          description="Evidence-based insights to help reduce microplastic exposure in everyday environments."
          icon="i-lucide-shield-check"
        />
        <UPageCard
          title="Policy & Industry Insight"
          description="Objective analysis of emerging regulation, standards, and industry implications."
          icon="i-lucide-scale"
        />
      </UPageColumns>
    </UPageSection>

    <UPageSection class="inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${footerImage})` }">
      <template #top>
        <!-- <div class="absolute inset-0 bg-black/30" /> -->
      </template>
      <UPageCTA
        title="Stay Connected with Pµre BioHealth"
        description="Receive updates on new research, publications, and the evolving work of Pµre BioHealth."
        variant="subtle"
        :links="[
          {
            label: 'Subscribe for Updates',
            to: '/contact',
            trailingIcon: 'i-lucide-arrow-right',
            color: 'neutral'
          }
        ]"
      />
    </UPageSection>
  </div>
</template>
