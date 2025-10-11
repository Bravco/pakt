export default defineAppConfig({
    ui: {
        colors: {
            primary: "sky",
            secondary: "yellow",
            neutral: "zinc"
        },
        button: {
            compoundVariants: [
                {
                    variant: "solid",
                    class: "hover:bg-secondary-300 hover:text-neutral-900 active:bg-secondary-500 dark:active:bg-secondary/50 focus-visible:bg-secondary-300 focus-visible:text-neutral-900"
                }
            ]
        }
    }
});