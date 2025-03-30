<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	const { children } = $props();
</script>

<main class="bg-walnut-light relative flex h-screen w-screen items-center justify-center">
	<div class="absolute top-6 left-6">
		<a
			class="text-walnut-dark hover:bg-walnut-accent rounded-md px-3 py-2 text-lg shadow-sm transition-colors"
			href="/">На главную</a
		>
	</div>
	{#key page.url}
		<div
			transition:fly={{ y: -10, duration: 250, delay: 0 }}
			class="absolute h-[400px] w-[300px] overflow-visible"
		>
			{@render children()}
		</div>
	{/key}
</main>
