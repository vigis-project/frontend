<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';

	const { children } = $props();
</script>

<Header></Header>
<main class="h-screen w-screen">
	{@render children()}
</main>
<Footer></Footer>
