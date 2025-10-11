<template>
    <UPageSection
        id="pricing"
        headline="$$$"
        title="Pricing Plans"
        :ui="{ headline: 'text-secondary' }"
    >
        <template #body>
            <div class="flex flex-col items-center gap-8">
                <USwitch
                    v-model="billedAnnualy"
                    label="Billed Annualy"
                    description="Save -20%"
                    size="lg"
                />
                <UPricingPlans class="w-full">
                    <UPricingPlan
                        v-for="(plan, index) in plans"
                        :key="index"
                        v-bind="plan"
                        variant="subtle"
                    />
                </UPricingPlans>
            </div>
        </template>
    </UPageSection>
</template>

<script lang="ts" setup>
    import type { PricingPlanProps } from "@nuxt/ui";

    const billedAnnualy = ref<boolean>(true);

    const plans = computed<PricingPlanProps[]>(() => [
        {
            title: "Free",
            description: "Limited version to try out the product.",
            price: "0$",
            features: [
                {
                    icon: "i-lucide-circle-minus",
                    title: "Max 1 Listing"
                },
                {
                    icon: "i-lucide-circle-minus",
                    title: "Max 1 Deal Application"
                },
                {
                    icon: "i-lucide-circle-minus",
                    title: "Limited Reach"
                },
            ],
            button: {
                label: "Get started",
                color: "neutral",
                to: "/"
            },
            ui: { featureIcon: "text-secondary" }
        },
        {
            title: "Premium",
            description: "Full-access to all the features.",
            badge: "Verified",
            discount: billedAnnualy.value ? "$17.99$" : undefined,
            price: "$22.99$",
            billingCycle: "/month",
            billingPeriod: `billed ${billedAnnualy.value ? "annualy" : 'monthly'}`,
            features: [
                "Unlimited Listings",
                "Unlimited Deal Applications",
                "Featured Reach",
                "Verified",
                "Built-in Messaging",
                "Analytics",
                "Smart Matching"
            ],
            button: {
                label: "Upgrade now",
                to: "/"
            },
            highlight: true
        }
    ]);
</script>