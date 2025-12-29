<script setup lang="ts">
const base = useRuntimeConfig().app.baseURL
const showModal = ref(false)
const leadership = ref([
  {
    name: 'Phil Kennedy, PhD',
    title: 'Founder & Chief Scientific Officer',
    image: 'phil_kennedy_profile.jpg',
    bio: {
      intro: 'Science is our candle in the dark. To brighten it is to brighten everything.',
      note: '*this is my AI generated bio and I love it*',
      paragraphs: [
        "I'm not just solving today's problems, I'm engineering pathways for the next 10,000 years.",
        "As a scientist, inventor, and entrepreneur, I thrive at the edge of what's possible. From pioneering microPlastic remediation technologies to funding the foundations of quantum AI and superconducting infrastructure, I build ideas into systems that matter. My work doesn't stop at the lab bench—it stretches across planetary engineering, post-human continuity, and the preservation of consciousness itself.",
        "I don't believe in boundaries, be it disciplinary, biological, or temporal. My thinking is recursive, imaginative, and rigorously grounded in science. Whether I'm drafting a global fusion-powered carbon capture network or speculating about AI recursive storage in the Oort Cloud, I bring real-world implementation strategy to visionary scale thought.",
        "I see AI as a collaborator, not a tool—and together, we're mapping out futures beyond the limits of silicon and carbon."
      ]
    }
  },
  {
    name: 'Heather',
    title: 'Chief Executive Officer',
    avatar: '👤'
  },
  {
    name: 'Jane Smith, MD',
    title: 'Chief Medical Officer',
    avatar: '👤'
  }
])

const selectedLeader = ref<(typeof leadership.value)[0] | null>(null)

// const closeModal = () => {
//   showModal.value = false
// }

const openModal = (card: (typeof leadership.value)[0]) => {
  selectedLeader.value = card
  showModal.value = true
}
</script>

<template>
  <UPageSection title="Leadership">
    <div class="absolute inset-0 pointer-events-none bg-linear-to-b from-cyan-500/5 to-transparent" />
    <UPageGrid :items="leadership" cols="1" md="2" lg="3" class="gap-8">
      <UPageCard
        v-for="(card, index) in leadership"
        :key="index"
        class="surface-card surface-card-hover text-center cursor-pointer motion-safe:translate-y-6 animate-card-in"
        :style="`animation-delay: ${index * 120}ms`"
        @click="openModal(card)"
      >
        <div class="relative mx-auto mb-4 h-50 w-50">
          <img
            v-if="card.image"
            :src="base + card.image"
            width="200"
            height="200"
            class="rounded-full ring-2 ring-cyan-400/20 shadow-md object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div
            v-else
            class="mx-auto mb-4 flex h-50 w-50 items-center justify-center rounded-full text-7xl ring-2 ring-white shadow-md hover:cursor-pointer"
          >
            {{ card.avatar ?? '👤' }}
          </div>
        </div>

        <h3 class="mt-4 text-2xl font-semibold text-center">{{ card.name }}</h3>
        <p class="text-lg text-slate-400 text-center">{{ card.title }}</p>
      </UPageCard>
    </UPageGrid>
    <UModal
      v-model:open="showModal"
      title="Profile"
      :ui="{ content: 'max-w-6xl bg-slate-900/90 backdrop-blur border border-white/10', header: 'border-b-0 pb-0' }"
    >
      <template #header>
        <div class="flex items-start justify-between gap-6 w-full">
          <div class="flex items-center gap-6">
            <img
              v-if="selectedLeader?.image"
              :src="base + selectedLeader?.image"
              width="150"
              height="150"
              class="rounded-full ring-2 ring-white shadow-md shrink-0"
            />

            <div class="flex flex-col">
              <h2 class="text-2xl font-semibold">
                {{ selectedLeader?.name }}
              </h2>
              <p class="text-lg text-neutral-400">
                {{ selectedLeader?.title }}
              </p>
            </div>
          </div>

          <!-- Close button -->
          <UButton
            icon="i-lucide-x"
            variant="ghost"
            size="sm"
            class="self-start text-(--color-accent) hover:bg-[color-mix(in_oklab,var(--color-accent)_10%,transparent)] focus-visible:ring-(--color-accent)"
            aria-label="Close"
            @click="showModal = false"
          />
        </div>
      </template>
      <template #body>
        <div class="mt-4 h-0.5 w-full bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div v-if="selectedLeader?.bio" class="prose prose-neutral max-w-none mt-6">
          <p class="text-xl font-medium italic">“{{ selectedLeader.bio.intro }}”</p>

          <p class="text-sm text-muted italic">
            {{ selectedLeader.bio.note }}
          </p>

          <div class="mt-6 space-y-4">
            <p v-for="(p, i) in selectedLeader.bio.paragraphs" :key="i">
              {{ p }}
            </p>
          </div>
        </div>
      </template>
      <!-- <template #footer>
        <UButton variant="soft" @click="closeModal">Close</UButton>
      </template> -->
    </UModal>
  </UPageSection>
</template>
