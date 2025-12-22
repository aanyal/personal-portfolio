<link rel="stylesheet" href="/styles/homepage.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Caveat:wght@400..700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Caveat:wght@400..700&family=Shadows+Into+Light&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Protest+Riot&family=Yusei+Magic&display=swap" rel="stylesheet">

<link href="https://fonts.googleapis.com/css2?family=BBH+Bogle&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=BBH+Bogle&family=Fira+Code:wght@300..700&display=swap" rel="stylesheet">

<link rel="stylesheet" href="/styles/styles.css">
<link rel="stylesheet" href="/styles/header.css">

<link href="https://fonts.googleapis.com/css2?family=Oranienbaum&family=Oswald:wght@200..700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<style>
  :global(body) {
    background-color: black;
    margin: 0; 
    padding: 0;
  }

</style>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}