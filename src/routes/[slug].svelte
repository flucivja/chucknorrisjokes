<style>

</style>

<script context="module">
    import { ChuckNorrisRestController } from '../rest';

    export async function preload({ params }) {
        let category = params.slug;
        let restController = await ChuckNorrisRestController.withSapper(this);
        try {
            return {
                category,
                jokes: await restController.getRandomByCategory(category),
                giphy: await restController.getGiphy()
            };
        } catch (e) {
            this.error(e.status, e.status === 404 ? 'Category not found' : e.message);
        }
    }
</script>

<script>
    import Jokes from '../components/Jokes.svelte';
    import { capitalize } from '../utils';

    export let jokes;
    export let category;
    export let giphy;
</script>

<svelte:head>
    <title>Chuck Norris Jokes {capitalize(category)}</title>
</svelte:head>

<main>
    <Jokes title="{capitalize(category)}" jokes="{jokes}" image="{giphy}" />
</main>
