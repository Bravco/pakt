<template>
    <UPageSection
        id="for-influencers"
        title="For Influencers"
        description="Find and connect with brands that match your niche and grow your reputation through meaningful partnerships."
        icon="i-lucide-user"
        :features="features"
        orientation="horizontal"
        :reverse="true"
        :ui="{ leadingIcon: 'text-secondary' }"
    >
        <Placeholder class="h-full"/>
    </UPageSection>
</template>

<script lang="ts" setup>
    const features = ref([
        {
            title: "Discover brand deals that fit your niche",
            icon: "i-lucide-search"
        },
        {
            title: "Collaborate directly, no middleman",
            icon: "i-lucide-handshake"
        },
        {
            title: "Build your collab portfolio and reputation",
            icon: "i-lucide-user-star"
        }
    ]);
</script>