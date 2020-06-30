<script context="module">
    import { ChuckNorrisRestController } from '../rest';

    export async function preload() {
        const restController = ChuckNorrisRestController.withSapper(this);
        return {
            jokes: await restController.getRandom(),
            giphy: await restController.getGiphy()
        };
    }
</script>

<script>
    import Jokes from '../components/Jokes.svelte';
    export let jokes;
    export let giphy;
</script>

<svelte:head>
    <title>Chuck Norris Jokes - Random</title>
</svelte:head>

<main>
    <Jokes title="Random" jokes="{jokes}" displayCategories="true" image="{giphy}" />
</main>
