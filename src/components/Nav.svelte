<style>
    nav {
        border-bottom: 1px solid rgba(255, 62, 0, 0.1);
        font-weight: 300;
        padding: 0 1em;
        height: 60px;
        overflow: hidden;
        background: white;
    }

    ul {
        margin: 0;
        padding: 0;
        overflow: auto;
        display: flex;
        text-overflow: ellipsis;
    }

    /* clearfix */
    ul::after {
        content: '';
        display: block;
        clear: both;
    }

    li {
        display: block;
        height: 80px;
    }

    li:first-child,
    li.categories-title,
    li.menu-separator,
    li.category-sticky {
        position: sticky;
        left: 0;
        background: white;
    }

    li.menu-separator {
        left: 59px;
    }

    li.category-sticky {
        left: 177px;
        right: 0;
    }

    [aria-current] {
        position: relative;
        background: white;
    }

    [aria-current]::after {
        position: absolute;
        content: '';
        width: calc(100% - 1em);
        height: 2px;
        background-color: rgb(255, 62, 0);
        display: block;
        bottom: -1px;
    }

    a,
    li.categories-title,
    li.menu-separator {
        text-decoration: none;
        padding: 1em 0.5em;
        display: block;
    }

    li.categories-title {
        left: 80px;
        color: #777;
    }
</style>

<script>
    import { capitalize } from '../utils';

    export let segment;
    export let categories;

    // workaround to reload current page
    // https://github.com/sveltejs/sapper/issues/1057
    function handleClick(evt) {
        if (evt.target.pathname === location.pathname) {
            location.reload();
        }
    }
</script>

<nav>
    <ul>
        <li>
            <a
                rel="prefetch"
                aria-current="{segment === undefined ? 'page' : undefined}"
                href="."
                on:click="{handleClick}"
            >
                Home
            </a>
        </li>
        <li class="menu-separator">|</li>
        <li class="categories-title">Categories:</li>
        {#if categories}
            {#each categories as category}
                <li class="{segment === category ? 'category-sticky' : undefined}">
                    <a
                        rel="prefetch"
                        aria-current="{segment === category ? 'page' : undefined}"
                        href="{category}"
                        on:click="{handleClick}"
                    >
                        {capitalize(category)}
                    </a>
                </li>
            {/each}
        {/if}
    </ul>
</nav>
