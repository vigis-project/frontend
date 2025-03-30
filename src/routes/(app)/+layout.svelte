<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';

	const { children } = $props();
</script>

<div class="font-graphiktt min-h-screen w-full">
	<Header></Header>
	{@render children()}
</div>
<!-- <Footer></Footer> -->
