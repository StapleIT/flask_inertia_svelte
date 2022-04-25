//import App from "./App.svelte";
import { createInertiaApp } from "@inertiajs/inertia-svelte";
// import Index from "./Index.svelte";
// const app = new App({
//     target: document.body,
//     props: {
//         name: "world",
//     },
// });

// export default app;

createInertiaApp({
    resolve: async (name) => {
        return (await import(`../../src/pages/${name}.svelte`)).default;
    },
    setup({ el, App, props }) {
        new App({ target: el, props });
    },
});

// createInertiaApp({
//     resolve: (name) => import(`./pages/${name}.svelte`),
//     setup({ el, App, props }) {
//         new App({ target: el, props });
//     },
// });

// createInertiaApp({
//     resolve: (name) => require(`@/Pages/${name}.svelte`),
//     setup({ el, App, props }) {
//         new App({ target: el, props });
//     },
// });
