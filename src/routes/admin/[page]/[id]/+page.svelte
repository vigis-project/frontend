<script lang="ts">
	import { page } from '$app/state';
	import { Edit, Trash } from 'lucide-svelte';

	const { data } = $props();

	async function handleDelete(id: string) {
		alert('todo delete');
	}
</script>

<main class="relative flex grow items-center justify-center">
	<div class="bg-walnut-dark rounded-md px-2 py-1">
		{#each data.columns as column}
			<div class="flex flex-row items-center justify-between">
				<div class="px-5 py-4 text-lg font-semibold">{column}</div>
				<div class="text-md text-surface-800-200 px-5">{data.row[column]}</div>
			</div>
		{/each}
	</div>
	<a
		class="text-walnut-dark hover:bg-walnut-accent absolute top-5
		left-5 rounded-md px-3 py-2 text-lg shadow-sm transition-colors"
		href="/admin/{page.params['page']}"
	>
		Назад
	</a>
</main>
