//import App from "./App.svelte";
import { createInertiaApp } from "@inertiajs/inertia-svelte";

import Index from "./pages/Index.svelte";

// import Index from "./Index.svelte";
// const app = new App({
//     target: document.body,
//     props: {
//         name: "world",
//     },
// });

// export default app;

// function importPages(page) {
//     return import(`./src/pages/${page}.svelte`);
// }

// createInertiaApp({
//     resolve: importPages(name),
//     setup({ el, App, props }) {
//         new App({ target: el, props });
//     },
// });

createInertiaApp({
    resolve: (name) => {
        let pages = { Index };
        return pages[name];
    },
    setup({ el, App, props }) {
        new App({ target: el, props });
    },
});

// createInertiaApp({
//     resolve: async (name) => {
//         return await import(`./src/pages/${name}.svelte`);
//     },
//     setup({ el, App, props }) {
//         new App({ target: el, props });
//     },
// });

// createInertiaApp({
//     resolve: (name) => import(`./src/pages/${name}.svelte`),
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
