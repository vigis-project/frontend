<script lang="ts">
	import cover from '$lib/images/cover.jpg';
	import type { Book } from '$lib/server/types';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	const books: Book[] = [
		{ id: 6, author: 'Михаил Булгаков', bookName: 'Мастер и Маргарита', note: '' },
		{ id: 7, author: 'Николай Гоголь', bookName: 'Мертвые души', note: '' },
		{ id: 8, author: 'Иван Тургенев', bookName: 'Отцы и дети', note: '' },
		{ id: 9, author: 'Владимир Набоков', bookName: 'Лолита', note: '' },
		{ id: 10, author: 'Борис Пастернак', bookName: 'Доктор Живаго', note: '' },
		{ id: 1, author: 'Анна Ахматова', bookName: 'Реквием', note: '' },
		{ id: 2, author: 'Лев Толстой', bookName: 'Война и мир', note: '' },
		{ id: 3, author: 'Федор Достоевский', bookName: 'Преступление и наказание', note: '' },
		{ id: 4, author: 'Антон Чехов', bookName: 'Палата №6', note: '' },
		{ id: 5, author: 'Александр Пушкин', bookName: 'Евгений Онегин', note: '' }
	];
</script>

<div class="flex h-full flex-col justify-between">
	<section
		class="mx-auto mt-6 grid w-fit grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:gap-6 xl:grid-cols-5"
	>
		{#each books as book}
			<a
				href="#"
				class="group relative size-fit max-w-[240px] overflow-hidden rounded-lg bg-white"
			>
				<div
					class="bg-walnut-dark absolute bottom-6 z-1 flex h-fit w-full flex-col gap-1 px-3 py-2 transition-all"
				>
					<h4
						class="text-walnut-light overflow-hidden text-lg font-bold text-nowrap break-words text-ellipsis"
					>
						{book.bookName}
					</h4>
					<div class="flex flex-row items-center justify-between">
						<p
							class="text-walnut-light/80 overflow-hidden text-nowrap break-words text-ellipsis"
						>
							{book.author}
						</p>
					</div>
				</div>
				<img
					class="size-full transition-all group-hover:brightness-90"
					src={cover}
					alt="Cover"
				/>
			</a>
		{/each}
	</section>
	<section class="mt-6 mb-4 flex flex-row justify-center gap-3">
		<button
			class="bg-walnut-dark hover:bg-walnut-muted rounded-sm px-4 py-2
			text-2xl font-semibold text-white transition-colors"
		>
			<ChevronLeft class="size-6" />
		</button>
		{#each { length: 3 } as _, idx}
			<a
				href="#"
				class="bg-walnut-dark hover:bg-walnut-muted rounded-sm px-4 py-2
			text-2xl font-semibold text-white transition-colors"
			>
				{idx + 1}
			</a>
		{/each}
		<button
			class="bg-walnut-dark hover:bg-walnut-muted rounded-sm px-4 py-2
			text-2xl font-semibold text-white transition-colors"
		>
			<ChevronRight class="size-6" />
		</button>
	</section>
</div>
