<template>
    <div>
        <UHeader>
            <template #title>
                <h1>pakt</h1>
            </template>
            
            <UNavigationMenu :items="items" variant="link"/>

            <template #right>
                <UButton label="Sign in"/>
            </template>

            <template #body>
                <UNavigationMenu :items="items" orientation="vertical" variant="link" class="-mx-2.5"/>
            </template>
        </UHeader>

        <UMain>
            <slot/>
        </UMain>

        <UFooter>
            <template #top>
                <UContainer>
                    <UFooterColumns :columns="columns">
                        <template #right>
                            <UFormField name="email" label="Subscribe to our newsletter" description="Stay updated on new releases, features and discounts." size="lg">
                                <UInput type="email" placeholder="your@email.com" class="w-full">
                                    <template #trailing>
                                        <UButton type="submit" size="xs" color="neutral" label="Subscribe" />
                                    </template>
                                </UInput>
                            </UFormField>
                        </template>
                    </UFooterColumns>
                </UContainer>
            </template>

            <template #bottom>
                <UContainer class="flex items-center justify-between">
                    <p class="text-muted text-sm">Copyright © 2025</p>
                    <UColorModeButton/>
                </UContainer>
            </template>
        </UFooter>
    </div>
</template>

<script setup lang="ts">
    import type { NavigationMenuItem } from "@nuxt/ui";
    import type { FooterColumn } from "@nuxt/ui";

    const route = useRoute();

    const items = ref<NavigationMenuItem[]>([
        {
            label: "Home",
            to: "/",
            active: route.path === "/" && route.hash === ""
        },
        {
            label: "Features",
            to: { path: "/", hash: "#features" },
            active: route.path === "/features" && route.hash === "#features"
        },
        {
            label: "Pricing",
            to: { path: "/", hash: "#pricing" },
            active: route.path === "/pricing" && route.hash === "#pricing"
        },
        {
            label: "FAQ",
            to: { path: "/", hash: "#faq" },
            active: route.path === "/" && route.hash === "#faq"
        }
    ]);

    const columns: FooterColumn[] = [
        {
            label: "Navigation",
            children: [
                {
                    label: "Home",
                    to: "/",
                    active: false
                },
                {
                    label: "Features",
                    to: { path: "/", hash: "#features" },
                    active: false
                },
                {
                    label: "Pricing",
                    to: { path: "/", hash: "#pricing" },
                    active: false
                },
                {
                    label: "FAQ",
                    to: { path: "/", hash: "#faq" },
                    active: false
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