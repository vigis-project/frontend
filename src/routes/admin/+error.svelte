<script lang="ts">
	import { page } from '$app/state';
</script>

<main class="flex h-full grow flex-col items-center justify-center text-black">
	<h1 class="text-6xl font-bold tracking-tight">{page.status}</h1>
	<p class="text-lg font-semibold">{page.error?.message}</p>
</main>
