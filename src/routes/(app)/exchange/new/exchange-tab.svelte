<script lang="ts">
	import { ChevronUp } from 'lucide-svelte';
	import Input from './Input.svelte';
	import { Accordion, Combobox } from 'bits-ui';
	import CaretUpDown from 'phosphor-svelte/lib/CaretUpDown';
	import Check from 'phosphor-svelte/lib/Check';

	const currentYear = new Date(Date.now()).getFullYear();

	const years = Array.from({ length: 426 }, (_, i) => ({
		value: (currentYear - i).toString(),
		label: (currentYear - i).toString()
	}));

	let selectedYear = $state<string>('');
	let searchValue = $state('');
	let isOpen = $state(false);
	const filteredYears = $derived(
		searchValue === '' ? years : years.filter((y) => y.label.includes(searchValue))
	);

	const handleOpenChange = (open: boolean) => {
		isOpen = open;
		if (!open) searchValue = '';
	};
	const handleItemSelect = (year: string) => {
		selectedYear = year;
		isOpen = false;
	};

	type Props = {
		onNextTab: () => void;
		title: string;
		isbn: string;
		lastName: string;
		firstName: string;
		year: number | undefined;
	};

	let {
		onNextTab,
		title = $bindable(),
		isbn = $bindable(),
		lastName = $bindable(),
		firstName = $bindable(),
		year = $bindable()
	}: Props = $props();

	let categories = $state([
		{
			name: 'Жанр',
			expanded: false,
			selected: false,
			type: 'multiple',
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
			type: 'multiple',
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
			type: 'single',
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
			type: 'multiple',
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
			type: 'single',
			children: [
				{ name: 'Есть', selected: false },
				{ name: 'Нет', selected: false }
			]
		},
		{
			name: 'Язык издателя',
			expanded: false,
			selected: false,
			type: 'multiple',
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

		if (category.name === 'Жанр') {
			genreError = !category.selected;
		}
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

	let genreError = $state(false);
	let titleValid = $state(true);
	let lastNameValid = $state(true);
	let isbnValid = $state(true);
	let yearValid = $state(true);
	let firstNameValid = $state(true);

	const allFieldsValid = $derived(
		!genreError && titleValid && lastNameValid && isbnValid && yearValid && firstNameValid
	);

	function formatISBN(value: string): string {
		value = value.replace(/\D/g, '');

		let formatted = '';
		if (value.length > 0) formatted += value.slice(0, 3);
		if (value.length > 3) formatted += '-' + value.slice(3, 4);
		if (value.length > 4) formatted += '-' + value.slice(4, 9);
		if (value.length > 9) formatted += '-' + value.slice(9, 12);
		if (value.length > 12) formatted += '-' + value.slice(12, 13);
		return formatted;
	}
	function validateAllFields() {
		let isValid = true;

		const genre = categories.find((cat) => cat.name === 'Жанр');
		if (!genre || !genre.children.some((child) => child.selected)) {
			genreError = true;
			isValid = false;
		} else {
			genreError = false;
		}

		lastNameValid = !!lastName.trim();
		if (!lastNameValid) isValid = false;

		titleValid = !!title.trim();
		if (!titleValid) isValid = false;

		isbnValid = /^\d{3}-\d-\d{5}-\d{3}-\d$/.test(isbn);
		if (!isbnValid) isValid = false;

		yearValid = !!selectedYear;
		if (!yearValid) isValid = false;

		return isValid;
	}

	function confirmData() {
		if (validateAllFields()) {
			year = selectedYear ? parseInt(selectedYear) : undefined;
			onNextTab();
		} else {
			titleValid = !!title.trim();
			lastNameValid = !!lastName.trim();
			isbnValid = /^\d{3}-\d-\d{5}-\d{3}-\d$/.test(isbn);
			yearValid = !!selectedYear;
		}
	}
</script>

<div class="bg-walnut-muted/80 flex w-full rounded-lg p-6 shadow">
	<div class="flex h-[400px] w-1/2 flex-col pr-4">
		<div class="flex">
			<div class="mr-2 w-1/2">
				<Input
					class="bg-walnut-muted"
					id="lastName"
					label="Автор"
					bind:value={lastName}
					pattern={/^[A-Za-zА-Яа-яЁё]{2,50}$/}
					type="text"
					invalidMsg="Некорректный формат."
					placeholder="Фамилия"
					required
					data-valid={lastNameValid}
				/>
			</div>
			<div class="mt-6 mr-2 w-1/2">
				<Input
					class="bg-walnut-muted"
					id="firstName"
					label=""
					bind:value={firstName}
					pattern={/^[A-Za-zА-Яа-яЁё]{2,25}$/}
					type="text"
					invalidMsg="Некорректный формат."
					placeholder="Имя"
					required={false}
					data-valid={firstNameValid}
				/>
			</div>
		</div>
		<!-- Название книги -->
		<div>
			<Input
				class="bg-walnut-muted"
				id="title"
				label="Название книги"
				bind:value={title}
				pattern={/^[A-Za-zА-Яа-яЁё0-9\s"',.!?\-]{1,50}$/}
				type="text"
				invalidMsg="Некорректный формат."
				placeholder=""
				required
				data-valid={titleValid}
			/>
		</div>
		<!-- ISBN и год издания -->
		<div class="mb-4">
			<div class="flex space-x-2">
				<!-- Поле ISBN -->
				<div class="w-1/2">
					<Input
						class="bg-walnut-muted"
						id="isbn"
						label="ISBN"
						bind:value={isbn}
						pattern={/^\d{3}-\d-\d{5}-\d{3}-\d$/}
						type="text"
						invalidMsg="Некорректный формат ISBN."
						placeholder="XXX-X-XXXXX-XXX-X"
						required
						formatter={formatISBN}
						data-valid={isbnValid}
					/>
				</div>
				<!-- Поле Год издания -->
				<div class="w-1/2">
					<span class="block font-medium">
						Год издания <span class="font-bold text-red-500">*</span>
					</span>

					<Combobox.Root
						type="single"
						bind:value={selectedYear}
						onOpenChange={handleOpenChange}
						name="publishYear"
					>
						<div class="relative">
							<Combobox.Input
								oninput={(e) => (searchValue = e.currentTarget.value)}
								class="h-input bg-walnut-muted w-full rounded border px-3 py-2"
								placeholder="2022"
								aria-label="Выберите год издания"
							/>
							<Combobox.Trigger
								class="absolute end-3 top-1/2 size-6 -translate-y-1/2"
							>
								<CaretUpDown class="text-muted-foreground size-6" />
							</Combobox.Trigger>
						</div>

						{#if isOpen}
							<Combobox.Portal>
								<Combobox.Content
									class="bg-walnut-dark z-50 max-h-52 w-full overflow-auto rounded-md border text-white shadow-lg"
									sideOffset={5}
								>
									<Combobox.Viewport class="p-1">
										{#each filteredYears as year (year.value)}
											<Combobox.Item
												value={year.value}
												class="hover:bg-walnut-muted/80 relative flex cursor-pointer items-center px-4 py-2 pr-10"
												onclick={() => handleItemSelect(year.value)}
											>
												<span class="flex-1">{year.label}</span>
												{#if selectedYear === year.value}
													<Check
														class="absolute top-1/2 right-4 size-4 -translate-y-1/2"
													/>
												{/if}
											</Combobox.Item>
										{/each}
									</Combobox.Viewport>
								</Combobox.Content>
							</Combobox.Portal>
						{/if}
					</Combobox.Root>
				</div>
			</div>
		</div>
	</div>
	<div class="flex h-[400px] w-1/2 flex-col pl-4">
		<div class="mb-4 flex items-center justify-between">
			<h2 class="text-xl font-semibold">Категории</h2>
			<button
				onclick={clearSelection}
				class="hover:bg-walnut-light bg-walnut-accent active:bg-walnut-accent/80
				cursor-pointer rounded p-2 px-4 text-black transition-colors">Снять выделение</button
			>
		</div>
		<Accordion.Root
			class="bg-walnut-muted/80 h-fit flex-grow overflow-y-auto rounded border p-2 pr-2 data-[invalid]:border-red-500"
			type="single"
			data-invalid={genreError ? '' : undefined}
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
		{#if genreError}
			<span class="mt-2 text-sm text-red-500">Выберите жанр!</span>
		{/if}
	</div>
</div>

<div class="mt-4 flex justify-end">
	<button
		onclick={confirmData}
		class="hover:bg-walnut-light bg-walnut-accent active:bg-walnut-accent/80
		disabled:bg-walnut-muted/80 cursor-pointer rounded p-2 px-20 text-black
		transition-colors disabled:cursor-default disabled:text-white"
		disabled={!allFieldsValid}
		type="button"
	>
		Далее
	</button>
</div>
