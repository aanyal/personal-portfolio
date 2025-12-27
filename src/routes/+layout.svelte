<script>
import "../app.css";
import favicon from '$lib/assets/favicon.svg';
import Header from './Header.svelte';

let { children } = $props();</script><link rel="stylesheet" href="/styles/homepage.css" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&amp;display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&amp;family=Caveat:wght@400..700&amp;display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&amp;family=Caveat:wght@400..700&amp;family=Shadows+Into+Light&amp;display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Yusei+Magic&amp;display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Protest+Riot&amp;family=Yusei+Magic&amp;display=swap" rel="stylesheet" />

<link href="https://fonts.googleapis.com/css2?family=BBH+Bogle&amp;display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=BBH+Bogle&amp;family=Fira+Code:wght@300..700&amp;display=swap" rel="stylesheet" />

<link href="https://fonts.googleapis.com/css2?family=Oranienbaum&amp;family=Oswald:wght@200..700&amp;display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&amp;display=swap" rel="stylesheet" />

<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&amp;display=swap" rel="stylesheet" />

<svelte:head>
	<link rel="icon" href="{favicon}" />
</svelte:head>

<Header />

{@render children()}

<style>
  :global(body) {
    background-color: black;
    margin: 0; 
    padding: 0;
  }

</style>
