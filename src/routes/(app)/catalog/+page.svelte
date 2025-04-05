<script lang="ts">
	import { City } from 'phosphor-svelte';
	import cover from '$lib/images/cover.jpg';
	import { ChevronLeft, ChevronRight, Search } from 'lucide-svelte';
</script>

<div class="my-4 px-12">
	<h1 class="text-walnut-muted mx-auto mb-4 w-fit text-4xl font-bold lg:text-6xl">Каталог</h1>
	<section class="mx-auto flex h-12 w-full max-w-[720px] flex-row items-center gap-2">
		<input
			class="border-walnut-accent h-full w-full rounded-md bg-white px-3 text-black sm:grow lg:text-xl"
			placeholder="Поиск..."
		/>
		<!-- <button class="h-full text-black">Все категории</button> -->
		<button
			class="h-full rounded-md border-neutral-500 bg-neutral-600 px-3 py-1 hover:border-neutral-300 hover:bg-neutral-400"
		>
			<Search class="size-6 lg:size-8" />
		</button>
	</section>
	<section
		class="mx-auto mt-6 grid w-fit grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:gap-6 xl:grid-cols-5"
	>
		{#each { length: 15 }}
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
						Отцы и дети
					</h4>
					<div class="flex flex-row items-center justify-between">
						<p
							class="text-walnut-light/80 overflow-hidden text-nowrap break-words text-ellipsis"
						>
							И. Тургенев
						</p>
						<div class="text-walnut-light/80 flex flex-row gap-1 text-sm">
							<City size="20" fill="currentColor" />
							<p class="font-medium">Москва</p>
						</div>
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
	<section class="mt-6 flex flex-row justify-center gap-3">
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
