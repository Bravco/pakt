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
            />
        </template>
        <template #title>
            <h1>A sea of <span class="text-primary">opportunities</span></h1>
        </template>
        <template #description>
            <p>Connect with the perfect collaboration partners.<br>Build authentic relationships. Create campaigns that drive real results.</p>
        </template>
    </UPageHero>

    <UPageCTA title="Join the waitlist" description="Get latest updates on pakt and be the first one to try it out!" variant="subtle">
        <template #links>
            <UFormField name="email" size="lg">
                <UInput type="email" placeholder="your@email.com" class="w-full">
                    <template #trailing>
                        <UButton type="submit" size="xs" color="neutral" label="Subscribe" class="cursor-pointer"/>
                    </template>
                </UInput>
            </UFormField>
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