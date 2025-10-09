<template>
    <UPageHero
        title="A sea of opportunities"
        headline="pakt the deal."
        :links="links"
    >
        <template #description>
            <p>Connect with the perfect collaboration partners.<br>Build authentic relationships. Create campaigns that drive real results.</p>
        </template>
    </UPageHero>
</template>

<script setup lang="ts">
    const links = ref([
        {
            label: "Get started",
            to: "/",
            icon: "i-lucide-handshake"
        },
        {
            label: "Learn More",
            to: "/",
            trailingIcon: "i-lucide-corner-right-down",
            color: "neutral",
            variant: "subtle"
        }
    ]);
</script>