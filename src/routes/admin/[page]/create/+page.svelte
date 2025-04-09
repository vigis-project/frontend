<script lang="ts">
	import { enhance } from '$app/forms';
	import Editable from '$lib/components/Editable.svelte';
	import { Edit, Trash } from 'lucide-svelte';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
	import { page } from '$app/state';

	const { data } = $props();

	function generateValue(type: string) {
		switch (type) {
			case 'STRING':
				return '';
			case 'INTEGER':
				return 0;
			case 'BOOLEAN':
				return false;
			case 'DATE':
				return today(getLocalTimeZone());
		}
	}
</script>

<main class="relative flex grow items-center justify-center">
	<a
		class="text-walnut-dark hover:bg-walnut-accent absolute top-5
		left-5 rounded-md px-3 py-2 text-lg shadow-sm transition-colors"
		href="/admin/{page.params['page']}"
	>
		Назад
	</a>
	<form class="bg-walnut-muted/80 rounded-md px-3 py-2" method="POST" use:enhance>
		<table>
			<tbody>
				{#each data.fields as field}
					<tr>
						<td class="px-10 py-4 text-lg font-semibold">{field.name}</td>
						<td class="text-md text-surface-800-200">
							<Editable value={generateValue(field.type)} columnName={field.name} />
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
		<div class="mt-3 flex items-center justify-end gap-4">
			<button
				class="border-walnut-dark/80 hover:text-walnut-light bg-walnut-muted/60
				hover:bg-walnut-muted/80 text-walnut-light/80 hover:border-surface-300-700
				rounded-md border px-4 py-2 text-center motion-safe:transition-colors"
			>
				Сохранить
			</button>
			<button
				class="border-walnut-dark/80 hover:text-walnut-light bg-walnut-muted/60
				hover:bg-walnut-muted/80 text-walnut-light/80 hover:border-surface-300-700
				rounded-md border px-4 py-2 text-center motion-safe:transition-colors"
			>
				Отмена
			</button>
		</div>
	</form>
</main>
