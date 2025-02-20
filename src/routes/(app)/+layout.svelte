<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';

	const { children } = $props();
</script>

<Header></Header>
{@render children()}
<Footer></Footer>
