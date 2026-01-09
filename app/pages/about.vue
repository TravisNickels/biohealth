<script setup lang="ts">
const base = useRuntimeConfig().app.baseURL
const showModal = ref(false)
const leadership = ref([
  {
    name: 'Phil Kennedy, PhD',
    title: 'Founder & Chief Scientific Officer',
    image: 'images/phil_kennedy_profile.jpg',
    bio: {
      intro: 'Intro headline / Quote',
      note: 'Personal note',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet felis ut ligula porta dapibus. In luctus libero enim, in semper augue iaculis ullamcorper.',
        'Maecenas dapibus risus nec magna efficitur, at aliquet urna sagittis. Praesent eu leo purus. Fusce sit amet pretium risus. Nulla sed elementum metus. Suspendisse tristique pharetra ipsum, id vehicula est hendrerit ut. Duis lacinia molestie erat, sit amet aliquet lorem laoreet eget. Pellentesque et leo vulputate nisl consectetur accumsan ac ac massa. ',
        'Aenean nulla tortor, luctus at viverra eu, euismod ut sapien. Etiam quis nulla volutpat, egestas turpis ac, sodales eros. Proin dictum, lorem non sagittis fermentum, tortor dui aliquet leo, id euismod eros lacus id dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque tincidunt neque dapibus quam viverra pellentesque.',
        'Cras vehicula finibus tellus eget luctus. Suspendisse potenti. Nunc facilisis mollis arcu quis bibendum. Mauris fermentum scelerisque pellentesque.'
      ]
    }
  },
  {
    name: 'Heather',
    title: 'Chief Executive Officer',
    avatar: '👤'
  },
  {
    name: 'Janet Zand, OMD',
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
