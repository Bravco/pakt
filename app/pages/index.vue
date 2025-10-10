<template>
    <UPageHero :links="links">
        <template #headline>
            <UBadge
                label="New"
                variant="subtle"
                color="neutral"
            />
            <UButton
                label="Announcing on January 1st 2026"
                trailing-icon="i-lucide-arrow-right"
                size="md"
                variant="link"
                color="neutral"
                class="underline underline-offset-2 cursor-pointer"
                :to="{ path: '/', hash: '#waitlist' }"
            />
        </template>
        <template #title>
            A sea of <span class="text-primary">opportunities</span>
        </template>
        <template #description>
            <p>Connect with the perfect collaboration partners.<br>Build authentic relationships. Create campaigns that drive real results.</p>
        </template>
    </UPageHero>

    <UPageCTA id="waitlist" title="Join the waitlist" description="Get latest updates on pakt and be the first one to try it out!" variant="subtle">
        <template #links>
            <UFormField name="email" size="lg">
                <UInput type="email" placeholder="your@email.com"/>
            </UFormField>
            <UButton type="submit" label="Submit" class="cursor-pointer"/>
        </template>
    </UPageCTA>
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