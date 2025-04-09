<script lang="ts">
	import { page } from '$app/state';
	import { Edit, Eye, Trash, ChevronLeft, ChevronRight, PlusCircle } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { Pagination } from 'bits-ui';
	import type { OnChangeFn } from 'vaul-svelte';

	const { data } = $props();

	const onPageChange: OnChangeFn<number> = (nextPage) => {
		page.url.searchParams.set('page', nextPage.toString());

		if (data.limit != 15) {
			page.url.searchParams.set('limit', data.limit.toString());
		}

		goto(page.url, { invalidateAll: true });
	};

	async function handleDelete(id: string) {
		alert('todo delete');
	}
</script>

<main class="relative flex flex-col">
	<div class="h-full grow overflow-auto md:w-fit">
		<table class="table-fixed text-left text-sm md:w-full">
			<thead class="bg-walnut-muted/90 text-walnut-accent/90 sticky top-0 uppercase">
				<tr>
					{#each data.columns as column}
						<th scope="col" class="px-6 py-3">{column}</th>
					{/each}
					<th></th>
				</tr>
			</thead>
			<tbody class="text-walnut-accent/90 overflow-auto">
				{#each data.rows as row}
					<tr class="bg-walnut-dark/80 hover:bg-walnut-dark/90 border-transparent shadow">
						{#each data.columns as column}
							<td class="min-w-[120px] px-6 text-wrap break-all whitespace-nowrap"
								>{row[column]}</td
							>
						{/each}
						<td
							class="text-walnut-muted flex h-full flex-row items-center gap-2 py-4 align-top"
						>
							<a
								class="bg-walnut-light/70 hover:bg-walnut-light/90 rounded-md p-1 shadow transition-colors"
								href="/admin/{page.params['page']}/{row.id}"
								title="Просмотр"
							>
								<Eye />
							</a>
							<a
								class="bg-walnut-light/70 hover:bg-walnut-light/90 rounded-md p-1 shadow transition-colors"
								href="/admin/{page.params['page']}/{row.id}/edit"
								title="Изменить"
							>
								<Edit />
							</a>
							<button
								class="bg-walnut-light/70 hover:bg-walnut-light/90 rounded-md p-1 shadow transition-colors hover:text-red-500"
								onclick={() => handleDelete(row.id)}
								title="Удалить"
							>
								<Trash />
							</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<Pagination.Root
		count={data.rowsCount}
		bind:page={data.page}
		perPage={data.limit}
		{onPageChange}
	>
		{#snippet children({ pages, range })}
			<div class="mt-8 mb-3 flex w-full items-center justify-center">
				<Pagination.PrevButton
					class="hover:bg-walnut-muted/90 disabled:text-walnut-muted/60 mr-[25px] inline-flex size-10 items-center justify-center rounded-[9px] bg-transparent active:scale-[0.98] disabled:cursor-not-allowed hover:disabled:bg-transparent"
				>
					<ChevronLeft class="size-6" />
				</Pagination.PrevButton>
				<div class="flex items-center gap-2.5">
					{#each pages as page (page.key)}
						{#if page.type === 'ellipsis'}
							<div class="text-walnut-muted/60 text-[15px] font-medium select-none">
								...
							</div>
						{:else}
							<Pagination.Page
								{page}
								class="hover:bg-walnut-muted/90 data-selected:bg-walnut-muted 
								data-selected:text-walnut-accent text-walnut-accent/80 inline-flex 
								size-10 items-center justify-center rounded-[9px]
								bg-transparent text-[15px] font-medium select-none 
								active:scale-[0.98] disabled:cursor-not-allowed 
								disabled:opacity-50 hover:disabled:bg-transparent"
							>
								{page.value}
							</Pagination.Page>
						{/if}
					{/each}
				</div>
				<Pagination.NextButton
					class="hover:bg-walnut-muted/90 disabled:text-walnut-muted/60 ml-[25px] inline-flex size-10 items-center justify-center rounded-[9px] bg-transparent active:scale-[0.98] disabled:cursor-not-allowed hover:disabled:bg-transparent"
				>
					<ChevronRight class="size-6" />
				</Pagination.NextButton>
			</div>
			<p class="text-walnut-muted mb-4 text-center text-[13px]">
				Показ {range.start} - {range.end}
			</p>
		{/snippet}
	</Pagination.Root>
</main>
<a
	class="border-walnut-dark bg-walnut-muted/80 hover:bg-walnut-dark/80
	absolute right-3 bottom-3 rounded-md border p-2 transition-colors"
	href="/admin/{page.params['page']}/create"
	title="Создать новую запись"
>
	<PlusCircle class="text-walnut-accent size-8" />
</a>
