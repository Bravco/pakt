<template>
    <UPageSection id="faq" title="Frequently Asked Questions">
        <UAccordion
            :items="items"
            :ui="{
                leadingIcon: 'text-muted',
                label: 'text-lg text-muted',
                body: 'text-base'
            }"
        />
    </UPageSection>
</template>

<script lang="ts" setup>
    const items = ref([
        {
            icon: "i-lucide-circle-question-mark",
            label: "Is it free to join?",
            content: "Yes! Pakt offers a free version of the software with all the major features, but you have limited listings."
        },
        {
            icon: "i-lucide-circle-question-mark",
            label: "Can I be both a business and an influencer?",
            content: "Not yet. We are currently working on a feature that will allow for users to switch between influencer and business view."
        },
        {
            icon: "i-lucide-circle-question-mark",
            label: "How are payments handled?",
            content: "We do not handle any payments related to the product deal. All payments are managed entirely by the business side."
        }
    ]);
</script>