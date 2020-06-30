<style>
    h1 {
        font-size: 2.8em;
        text-transform: uppercase;
        font-weight: 700;
        margin: 0 0 0.5em 0;
        text-align: center;
    }

    main {
        position: relative;
        max-width: 56em;
        background-color: rgba(255, 255, 255, 0.4);
        padding: 2em;
        margin: 0 auto;
        box-sizing: border-box;
    }
</style>

<script context="module">
    import { ChuckNorrisRestController } from '../rest';

    export async function preload({ params, query }) {
        return {
            categories: await ChuckNorrisRestController.withSapper(this).getCategories()
        };
    }
</script>

<script>
    import LinearProgress from '@smui/linear-progress';
    import Nav from '../components/Nav.svelte';
    import { stores } from '@sapper/app';

    const { preloading } = stores();

    export let segment;
    export let categories;
</script>

<main>
    <h1>Chuck Norris Jokes</h1>
    <Nav segment="{segment}" categories="{categories}" />
    <LinearProgress indeterminate="{true}" closed="{!$preloading}" />
    <slot />
</main>
