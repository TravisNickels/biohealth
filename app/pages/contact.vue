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
  <UPageSection title="Contact Us" description="Inquiries related to research, publications, or collaboration are welcome." variant="subtle">
    <UPageCard description="Feel free to reach out to us via email at info@purebiohealth.com" class="mx-auto max-2xl">
      <template #title>
        <h1 class="text-center">Get in Touch</h1>
      </template>
      <UForm class="flex flex-col" @submit="onSubmit">
        <UInput type="hidden" name="access_key" value="549de678-7903-48c4-9376-65831ae6c7ce" />
        <UFormField label="Your Name" class="mb-4">
          <UInput v-model="name" placeholder="Enter your name" name="name" class="w-full" required />
        </UFormField>
        <UFormField label="Your Email" class="mb-4">
          <UInput v-model="email" placeholder="Enter your email" type="email" name="email" class="w-full" required />
        </UFormField>
        <UFormField label="Your Message" class="mb-4">
          <UTextarea v-model="message" placeholder="Enter your message" name="message" class="w-full" />
        </UFormField>
        <UButton type="submit" color="primary" class="mx-auto">Send Message</UButton>
      </UForm>
    </UPageCard>
  </UPageSection>
</template>
