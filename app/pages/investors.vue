<script setup lang="ts">
const accessKey = '549de678-7903-48c4-9376-65831ae6c7ce'
const name = ref('')
const email = ref('')
const message = ref('')
const toast = useToast()

const onSubmit = async () => {
  const formData = new FormData()
  formData.append('access_key', accessKey)
  formData.append('name', name.value)
  formData.append('email', email.value)
  formData.append('message', message.value)

  // TODO: Reactivate before deploying for demo
  // await fetch('https://api.web3forms.com/submit', {
  //   method: 'POST',
  //   body: formData
  // })

  toast.add({
    title: `Request sent`,
    description: `${name.value} your request has been saved`,
    icon: 'i-lucide-mail-check'
  })

  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <UPageSection
    title="Investors"
    description="Pµre BioHealth is building the future of health solutions. Connect with us to explore potential partnerships and investment opportunities."
    variant="subtle"
  >
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
      <!-- Problem -->
      <div>
        <h3 class="text-sm uppercase tracking-wide text-cyan-400">Problem</h3>
        <p class="mt-2 text-lg font-medium leading-snug">Microplastics are now detected in human blood, organs, and placental tissue.</p>
      </div>

      <!-- Opportunity -->
      <div>
        <h3 class="text-sm uppercase tracking-wide text-cyan-400">Opportunity</h3>
        <p class="mt-2 text-lg font-medium leading-snug">
          Scientific advances now allow selective detection and mitigation at biologically relevant scales.
        </p>
      </div>

      <!-- Approach -->
      <div>
        <h3 class="text-sm uppercase tracking-wide text-cyan-400">Approach</h3>
        <p class="mt-2 text-lg font-medium leading-snug">
          Pµre BioHealth develops research-backed systems bridging environmental science and human health.
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto mt-24 grid grid-cols-1 lg:grid-cols-5 gap-12">
      <!-- Why Now -->
      <div class="lg:col-span-3">
        <h2 class="text-3xl font-semibold">Why Now</h2>
        <p class="mt-4 text-slate-400 leading-relaxed">
          Microplastics have crossed a threshold—from environmental contaminant to human health variable. What was previously unmeasurable is now
          quantifiable, and what was theoretical is now observable.
        </p>
      </div>

      <div class="lg:col-span-2 space-y-5 text-sm text-slate-400 pt-2">
        <div class="flex gap-3">
          <span class="text-cyan-400">▸</span>
          First peer-reviewed evidence of biological accumulation
        </div>
        <div class="flex gap-3">
          <span class="text-cyan-400">▸</span>
          Escalating regulatory and public health attention
        </div>
        <div class="flex gap-3">
          <span class="text-cyan-400">▸</span>
          New materials enabling selective binding and sensing
        </div>
      </div>
    </div>

    <div class="mt-28 bg-slate-900/40">
      <!-- Roadmap -->
      <div class="mt-10 max-w-6xl mx-auto">
        <h2 class="text-3xl font-semibold text-center mb-2">Development Roadmap</h2>
        <p class="text-slate-400 text-center mb-10">A pragmatic path from research to real-world impact</p>

        <div class="relative border-l border-cyan-400/20 pl-8 space-y-10">
          <div class="absolute -left-[1px] top-0 h-full w-px bg-linear-to-b from-cyan-400/40 via-cyan-400/10 to-transparent" />

          <!-- Phase -->
          <div class="relative">
            <div class="absolute -left-[13px] top-1.5 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_0_4px_rgba(34,211,238,0.15)]" />
            <div class="pl-2.5">
              <h3 class="text-xl font-semibold">Phase 1 — Foundational Research</h3>
              <p class="text-slate-400 mt-1">
                Validation of core microplastic mitigation mechanisms, lab-scale testing, and peer-reviewed publication.
              </p>
              <p class="text-sm text-slate-500 mt-2">Completed / In Progress</p>
            </div>
          </div>

          <div class="relative">
            <div class="absolute -left-[13px] top-1.5 h-3 w-3 rounded-full bg-cyan-400/70 shadow-[0_0_0_4px_rgba(34,211,238,0.12)]" />
            <div class="pl-2.5">
              <h3 class="text-xl font-semibold">
                Phase 2 — Prototype Development
                <span class="ml-3 text-xs uppercase tracking-wide text-cyan-400 border border-cyan-400/30 px-2 py-0.5 rounded-full"> Current </span>
              </h3>
              <p class="text-slate-400 mt-1">Translating research into early prototypes suitable for controlled pilots and partner evaluation.</p>
              <p class="text-sm text-slate-500 mt-2">Next 6–9 months</p>
            </div>
          </div>

          <div class="relative">
            <div class="absolute -left-[13px] top-1.5 h-3 w-3 rounded-full bg-slate-500 shadow-[0_0_0_4px_rgba(148,163,184,0.15)]" />
            <div class="pl-2.5">
              <h3 class="text-xl font-semibold">Phase 3 — Strategic Pilots</h3>
              <p class="text-slate-400 mt-1">Partnerships with research institutions, municipalities, or industry to validate impact at scale.</p>
              <p class="text-sm text-slate-500 mt-2">Planned</p>
            </div>
          </div>

          <div class="relative">
            <div class="absolute -left-[13px] top-1.5 h-3 w-3 rounded-full bg-slate-600 shadow-[0_0_0_4px_rgba(148,163,184,0.1)]" />
            <div class="pl-2.5">
              <h3 class="text-xl font-semibold">Phase 4 — Commercialization Path</h3>
              <p class="text-slate-400 mt-1">Refinement, regulatory alignment, and commercialization strategy based on pilot outcomes.</p>
              <p class="text-sm text-slate-500 mt-2">Future</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="mt-4 h-0.5 w-full bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" /> -->
    <!-- Partner With Us -->
    <UPageCTA variant="subtle" class="mt-10">
      <div class="bg-slate-900/60 border border-white/5 rounded-xl">
        <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-12">
          <!-- Left -->
          <div>
            <h2 class="text-2xl font-semibold">Partner With Us</h2>
            <p class="mt-4 text-slate-400 leading-relaxed max-w-md">
              We engage selectively with investors and partners aligned with long-term scientific rigor, responsible deployment, and measurable health
              impact.
            </p>

            <ul class="mt-6 space-y-3 text-sm text-slate-400">
              <li>• Early-stage research-backed technology</li>
              <li>• Clear roadmap toward validation and pilots</li>
              <li>• Disciplined approach to commercialization</li>
            </ul>
          </div>

          <!-- Right -->
          <div>
            <UForm class="flex flex-col gap-4 mt-4" @submit="onSubmit">
              <UInput type="hidden" name="access_key" :value="accessKey" />

              <UFormField label="Your Name">
                <UInput v-model="name" name="name" placeholder="Enter your name" class="w-full" required />
              </UFormField>

              <UFormField label="Your Email" type="email">
                <UInput v-model="email" name="email" placeholder="Enter your email" type="email" class="w-full" required />
              </UFormField>

              <UFormField label="Message">
                <UTextarea v-model="message" name="message" placeholder="Tell us what you're interested in" class="w-full" />
              </UFormField>

              <UButton type="submit" class="self-start mt-2"> Request a Conversation </UButton>
              <p class="text-xs text-slate-500 mt-3">We respond selectively and keep all inquiries confidential.</p>
            </UForm>
          </div>
        </div>
      </div>
    </UPageCTA>

    <div class="mt-24 border-y border-white/5 py-10">
      <div class="max-w-6xl mx-auto">
        <p class="text-xs uppercase tracking-wider text-slate-500 mb-6 text-center">Informed by collaboration across</p>

        <div class="flex flex-wrap justify-center gap-x-14 gap-y-6 text-sm text-slate-400">
          <span class="inline-flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-cyan-400/60"></span>
            Academic toxicology labs
          </span>
          <span class="inline-flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-cyan-400/60"></span>
            Clinical exposure researchers
          </span>
          <span class="inline-flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-cyan-400/60"></span>
            Environmental chemistry specialists
          </span>
          <span class="inline-flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-cyan-400/60"></span>
            Independent scientific advisors
          </span>
        </div>

        <p class="mt-6 text-xs text-slate-500 text-center max-w-xl mx-auto">
          Specific collaborators are disclosed selectively as research and partnerships mature.
        </p>
      </div>
    </div>
    <!-- class="surface-card surface-card-hover translate-y-6 animate-card-in" -->
  </UPageSection>
</template>
