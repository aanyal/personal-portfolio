<link rel="stylesheet" href="/styles/homepage.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Caveat:wght@400..700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Caveat:wght@400..700&family=Shadows+Into+Light&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Protest+Riot&family=Yusei+Magic&display=swap" rel="stylesheet">

<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	export const prerender = true;

	let { children } = $props();
</script>

<style>
  :global(body) {
    background-image: url('./dotted-background(1).png');
    margin: 0; 
    padding: 0;
	font-family: "Caveat", cursive;
  }

</style>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}