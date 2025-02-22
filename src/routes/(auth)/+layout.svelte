<script lang="ts">
	const { children } = $props();
</script>

<main class="relative flex h-screen w-screen items-center justify-center">
	{@render children()}
</main>
