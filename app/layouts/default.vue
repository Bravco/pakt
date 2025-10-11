<template>
    <div>
        <UHeader>
            <template #title>
                <h1>pakt</h1>
            </template>
            
            <UNavigationMenu :items="items" variant="link"/>

            <template #right>
                <UButton label="Sign in" to="/"/>
            </template>

            <template #body>
                <UNavigationMenu :items="items" orientation="vertical" variant="link" class="-mx-2.5"/>
            </template>
        </UHeader>

        <UMain>
            <slot/>
        </UMain>

        <USeparator/>

        <UFooter>
            <template #top>
                <UContainer>
                    <UFooterColumns :columns="columns">
                        <template #right>
                            <UFormField name="email" label="Subscribe to our newsletter" description="Stay updated on new releases, features and discounts." size="lg">
                                <UInput type="email" placeholder="your@email.com" class="w-full">
                                    <template #trailing>
                                        <UButton type="submit" size="xs" color="neutral" label="Subscribe" class="cursor-pointer"/>
                                    </template>
                                </UInput>
                            </UFormField>
                        </template>
                    </UFooterColumns>
                </UContainer>
            </template>

            <template #left>
                <p class="text-muted text-sm">Copyright © 2025</p>
            </template>

            <template #right>
                <UColorModeButton class="cursor-pointer"/>
            </template>
        </UFooter>
    </div>
</template>

<script setup lang="ts">
    import type { NavigationMenuItem } from "@nuxt/ui";
    import type { FooterColumn } from "@nuxt/ui";

    const items = ref<NavigationMenuItem[]>([
        {
            label: "How it works",
            to: "#how"
        },
        {
            label: "Features",
            to: "#features"
        },
        {
            label: "Pricing",
            to: "#pricing",
        },
        {
            label: "FAQ",
            to: "#faq"
        }
    ]);

    const columns: FooterColumn[] = [
        {
            label: "Navigation",
            children: [
                {
                    label: "How it works",
                    to: "#how"
                },
                {
                    label: "Features",
                    to: "#features"
                },
                {
                    label: "Pricing",
                    to: "#pricing",
                },
                {
                    label: "FAQ",
                    to: "#faq"
                }
            ]
        },
        {
            label: "Legal",
            children: [
                {
                    label: "Terms of Service",
                    to: ""
                },
                {
                    label: "Privacy Policy",
                    to: ""
                }
            ]
        },
        {
            label: "Socials",
            children: [
                {
                    label: "Instagram",
                    to: "https://instagram.com",
                    target: "_blank"
                },
                {
                    label: "Twitter",
                    to: "https://x.com",
                    target: "_blank"
                },
                {
                    label: "LinkedIn",
                    to: "https://linkedin.com",
                    target: "_blank"
                }
            ]
        },
        {
            label: "Contact",
            children: [
                {
                    label: "support@pakt.com",
                    to: "mailto:support@pakt.com"
                },
                {
                    label: "+421 949 725 726",
                    to: "tel:+421949725726"
                },
                {
                    label: "+421 949 725 726",
                    to: "tel:+421949725726"
                }
            ]
        }
    ];
</script>