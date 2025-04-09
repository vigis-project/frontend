<script lang="ts">
	import { page } from '$app/state';
	import Header from '$components/Header.svelte';

	const { data, children } = $props();
</script>

<div class="font-graphiktt flex min-h-screen w-full flex-col">
	<Header></Header>
	<div class="relative flex min-h-[800px] w-full grow flex-col md:flex-row">
		<aside
			class="border-surface-200-800 bg-walnut-muted/80 flex min-h-[800px] w-full items-center border-r px-4 md:w-[180px]"
		>
			<div class="flex max-h-fit w-full flex-col gap-2">
				{#if data.tableList}
					{#each Object.entries(data.tableList) as [table, label]}
						<a
							class="bg-walnut-dark hover:bg-walnut-dark/80 rounded-md border px-4 py-2
							text-center motion-safe:transition-colors"
							href="/admin/{table}"
							data-active={page.url.pathname.startsWith(`/admin/${table}`)}
						>
							{label}
						</a>
					{/each}
				{/if}
			</div>
		</aside>
		{@render children()}
	</div>
</div>
