<script lang="ts">
	import { Accordion } from 'bits-ui';
	import { ChevronUp } from 'lucide-svelte';

	type Props = {
		onNextTab: () => void;
		title?: string;
		onPrevTab: () => void;
	};

	let { onNextTab, onPrevTab, title = $bindable('') }: Props = $props();
	let isNextEnabled = $state(false);

	let error = $state<string>();

	let categories = $state([
		{
			name: 'Жанр',
			expanded: false,
			selected: false,
			required: true,
			children: [
				{ name: 'История', selected: false },
				{ name: 'Детектив', selected: false },
				{ name: 'Приключения', selected: false },
				{ name: 'Детские книги', selected: false },
				{ name: 'Мемуары', selected: false },
				{ name: 'Психология', selected: false },
				{ name: 'Фантастика', selected: false },
				{ name: 'Эзотерика', selected: false },
				{ name: 'Фэнтези', selected: false },
				{ name: 'Поэзия', selected: false },
				{ name: 'Драма', selected: false },
				{ name: 'Классика', selected: false },
				{ name: 'Ужасы', selected: false },
				{ name: 'Роман', selected: false }
			]
		},
		{
			name: 'Область наук',
			expanded: false,
			selected: false,
			children: [
				{ name: 'Философия', selected: false },
				{ name: 'Физика', selected: false },
				{ name: 'Химия', selected: false },
				{ name: 'Биология', selected: false },
				{ name: 'Математика', selected: false },
				{ name: 'Информатика', selected: false },
				{ name: 'Лингвистика', selected: false },
				{ name: 'Психология', selected: false },
				{ name: 'Экономика', selected: false },
				{ name: 'История науки', selected: false }
			]
		},
		{
			name: 'Обложка',
			expanded: false,
			selected: false,
			children: [
				{ name: 'Твёрдая', selected: false },
				{ name: 'Мягкая', selected: false },
				{ name: 'Интегральная', selected: false },
				{ name: 'Кожаный переплёт', selected: false },
				{ name: 'Суперобложка', selected: false }
			]
		},
		{
			name: 'Лауреат',
			expanded: false,
			selected: false,
			children: [
				{ name: 'Нобелевская премия', selected: false },
				{ name: 'Букеровская премия', selected: false },
				{ name: 'Пулитцеровская премия', selected: false },
				{ name: 'Гонкуровская премия', selected: false },
				{ name: 'Литературная премия «Ясная Поляна»', selected: false },
				{ name: 'Литературная премия «Большая книга»', selected: false },
				{ name: 'Лауреат премии «Хьюго»', selected: false },
				{ name: 'Лауреат премии «Небьюла»', selected: false }
			]
		},
		{
			name: 'Экранизация',
			expanded: false,
			selected: false,
			children: [
				{ name: 'Есть', selected: false },
				{ name: 'Нет', selected: false }
			]
		},
		{
			name: 'Язык издателя',
			expanded: false,
			selected: false,
			children: [
				{ name: 'Русский', selected: false },
				{ name: 'Английский', selected: false },
				{ name: 'Немецкий', selected: false },
				{ name: 'Французский', selected: false },
				{ name: 'Китайский', selected: false },
				{ name: 'Испанский', selected: false },
				{ name: 'Итальянский', selected: false },
				{ name: 'Японский', selected: false }
			]
		}
	]);

	function toggleSelection(parentIndex: number, childIndex: number) {
		const category = categories[parentIndex];

		category.selected = category.children.some((child) => child.selected);
	}

	function clearSelection() {
		categories.map((category) => {
			category.selected = false;
			category.children.map((child) => {
				child.selected = false;
				return { ...child };
			});
			return { ...category };
		});
	}

	function validateAndProceed() {
		const cats = categories;
		const genre = cats.find((cat) => cat.name === 'Жанр');

		if (!genre) {
			error = "Категория 'Жанр' не найдена!";
			return;
		}
		const isSelected = genre.children.some((child) => child.selected);

		if (!isSelected) {
			error = "Выберите хотя бы одну категорию в 'Жанр'!";
			return;
		}

		onNextTab();
	}

	$effect(() => {
		isNextEnabled =
			categories
				.find((cat) => cat.name === 'Жанр')
				?.children.some((child) => child.selected) ?? false;
	});
</script>

<div class="bg-walnut-muted/80 flex w-full rounded-lg p-6 shadow">
	<div class="mx-auto flex h-[400px] w-1/2 flex-col">
		<div class="mb-4 flex items-center justify-between">
			<h2 class="text-xl font-semibold">Категории</h2>
			<button
				onclick={clearSelection}
				class="hover:bg-walnut-light bg-walnut-accent active:bg-walnut-accent/80 cursor-pointer rounded p-2 px-4 text-black transition-colors"
				>Снять выделение</button
			>
		</div>
		<Accordion.Root
			class="bg-walnut-muted/80 h-fit flex-grow overflow-y-auto rounded border p-2 pr-2 data-[invalid]:border-red-500"
			type="single"
			data-invalid={error ? '' : undefined}
		>
			{#each categories as category, catIdx}
				<Accordion.Item
					class="border-walnut-dark data-[state=open]:bg-walnut-dark/20 border-b p-2 transition-colors"
					value={category.name}
				>
					<Accordion.Header>
						<Accordion.Trigger
							class="flex w-full flex-row items-center gap-3 text-left font-normal 
							data-[active]:font-bold [&[data-state=open]>svg]:rotate-180"
							data-active={category.selected ? '' : undefined}
						>
							<ChevronUp
								class="size-5 transition-transform"
								data-selected={category.expanded ? '' : undefined}
							/>
							{category.name}
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Content
						class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down 
						overflow-hidden px-1.5 text-sm tracking-[-0.01em] transition-all"
					>
						<ul class="ml-6">
							{#each category.children as child, valIdx}
								<li class="mt-0.5">
									<input
										type="checkbox"
										bind:checked={child.selected}
										onchange={() => toggleSelection(catIdx, valIdx)}
									/>
									<span>{child.name}</span>
								</li>
							{/each}
						</ul>
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
		<div class="mt-4 flex justify-between"></div>
	</div>
</div>

<div class="mt-4 flex justify-between">
	<button
		onclick={onPrevTab}
		class="hover:bg-walnut-light bg-walnut-accent active:bg-walnut-accent/80
		disabled:bg-walnut-muted/80 cursor-pointer rounded p-2 px-20
		text-black transition-colors disabled:cursor-default disabled:text-white"
		type="button"
	>
		Назад
	</button>
	<button
		onclick={() => validateAndProceed()}
		class="hover:bg-walnut-light bg-walnut-accent active:bg-walnut-accent/80
		disabled:bg-walnut-muted/80 cursor-pointer rounded p-2 px-20
		text-black transition-colors disabled:cursor-default disabled:text-white"
		disabled={!isNextEnabled}
		type="button"
	>
		Далее
	</button>
</div>
