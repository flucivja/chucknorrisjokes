<style>
    h2 {
        margin: 20px 0;
        display: block;
        text-align: center;
    }

    section {
        padding: 20px;
        margin: 20px 0;
        background: #f0f0f0;
        border-left: 15px #ccc solid;
        font-family: 'Courier New', Arial;
        font-size: 1.2rem;
        text-align: justify;
    }

    blockquote {
        margin: 0;
        quotes: '\201C''\201D''\2018''\2019';
    }

    blockquote:before {
        color: #ccc;
        content: open-quote;
        font-size: 4em;
        line-height: 0.1em;
        margin-right: 0.25em;
        vertical-align: -0.4em;
    }

    blockquote:after {
        visibility: hidden;
        content: close-quote;
    }

    .categories {
        text-align: right;
        font-size: 0.8rem;
    }

    .image {
        display: block;
        text-align: center;
        height: 200px;
    }

    img {
        height: 100%;
        max-height: 100%;
        width: auto;
    }
</style>

<script>
    import { capitalize } from '../utils';

    export let title;
    export let jokes;
    export let image;
    export let displayCategories = false;
</script>

<main>
    <h2>{title}</h2>
    <div>
        {#each jokes as joke, i}
            <section>
                <blockquote>{joke.value}</blockquote>
                {#if joke.categories && joke.categories.length && displayCategories}
                    <div class="categories">
                        Categories:
                        {#each joke.categories as category}
                            <a rel="{process.env.API_LESS ? 'external' : 'prefetch'}" href="{category}">
                                {capitalize(category)}
                            </a>
                        {/each}
                    </div>
                {/if}
            </section>
        {/each}
    </div>
    <div class="image">
        <img src="{image}" alt="Chuck" />
    </div>
</main>
