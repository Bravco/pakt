<template>
    <UPageSection
        id="for-businesses"
        title="For Businesses"
        description="Discover and collaborate with the right influencers to grow your brand and boost your marketing impact."
        icon="i-lucide-building"
        :features="features"
        orientation="horizontal"
        :ui="{ leadingIcon: 'text-secondary' }"
    >
        <Placeholder class="h-full"/>
    </UPageSection>
</template>

<script lang="ts" setup>
    const features = ref([
        {
            title: "Find influencers who match your brand’s audience",
            icon: "i-lucide-search"
        },
        {
            title: "Promote specific products or campaigns",
            icon: "i-lucide-megaphone"
        },
        {
            title: "Manage offers, messages, and performance",
            icon: "i-lucide-clipboard-check"
        }
    ]);
</script>