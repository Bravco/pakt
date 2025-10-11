<template>
    <UPageSection id="how-it-works" title="How it works" description="You can close a brand deal within 3 easy steps.">
        <UPageGrid>
            <UPageCard
                v-for="(card, index) in cards"
                :key="index"
                v-bind="card"
                :reverse="true"
            >
                <template #leading>
                    <UBadge :label="index+1" variant="soft"/>
                </template>
                <Placeholder class="h-50"/>
            </UPageCard>
        </UPageGrid>
    </UPageSection>
</template>

<script lang="ts" setup>
    const cards = ref([
        {
            title: "Set up your profile",
            description: "Create a profile as a business or influencer and showcase what makes you unique."
        },
        {
            title: "Discover business partners",
            description: "Browse through verified partners and find the ones that align with your audience."
        },
        {
            title: "Start collaborating",
            description: "Send and receive deal requests directly through the app."
        }
    ]);
</script>