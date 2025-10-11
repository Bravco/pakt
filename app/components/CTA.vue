<template>
    <UPageSection id="waitlist">
        <UPageCTA class="my-24 sm:my-32 lg:my-40" title="Join the waitlist" description="Get latest updates on pakt and be the first one to try it out!" variant="subtle">
            <template #links>
                <UFormField name="email" size="lg">
                    <UInput type="email" placeholder="your@email.com"/>
                </UFormField>
                <UButton type="submit" label="Submit" class="cursor-pointer"/>
            </template>
        </UPageCTA>
    </UPageSection>
</template>