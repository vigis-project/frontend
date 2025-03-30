<script lang="ts">
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

	async function fetchAuthors(query: string) {
		if (query.length < 1) {
			suggestions = [];
			return;
		}
		const allAuthors = ['Булгаков', 'Бунин', 'Блок', 'Брюсов'];
		suggestions = allAuthors.filter((author) => author.startsWith(query));
	}

	function selectAuthor(author: string) {
		lastName = author;
		firstName = 'Авто';
		suggestions = [];
	}

	let suggestions = $state<string[]>([]);

	let categories = $state([
		{
			name: 'Жанр',
			expanded: false,
			selected: false,
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

	function toggleCategory(index: number) {
		categories[index].expanded = !categories[index].expanded;
	}

	function toggleSelection(parentIndex: number, childIndex: number) {
		categories[parentIndex].children[childIndex].selected =
			!categories[parentIndex].children[childIndex].selected;
		categories[parentIndex].selected = categories[parentIndex].children.some(
			(child) => child.selected
		);

		if (categories[parentIndex].name === 'Жанр') {
			genreError = !categories[parentIndex].selected;
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

	function validateField(value: string | number | undefined) {
		if (typeof value === 'string') {
			return !value || value.trim() === '';
		} else if (typeof value === 'number') {
			return value === undefined || isNaN(value);
		}
		return true;
	}

	let firstNameEmptyError = $state(false);
	let firstNameValidationError = $state(false);
	let lastNameEmptyError = $state(false);
	let lastNameValidationError = $state(false);
	let titleEmptyError = $state(false);
	let titleValidationError = $state(false);
	let isbnEmptyError = $state(false);
	let yearEmptyError = $state(false);
	let yearValidationError = $state(false);
	let genreError = $state(false);

	function formatISBN(event: Event) {
		let input = (event.target as HTMLInputElement).value.replace(/\D/g, '');

		let formatted = '';
		if (input.length > 0) formatted += input.slice(0, 3);
		if (input.length > 3) formatted += '-' + input.slice(3, 4);
		if (input.length > 4) formatted += '-' + input.slice(4, 9);
		if (input.length > 9) formatted += '-' + input.slice(9, 12);
		if (input.length > 12) formatted += '-' + input.slice(12, 13);

		isbn = formatted;
	}

	function formatyear(event: Event) {
		const input = (event.target as HTMLInputElement).value.replace(/\D/g, '');
		const maxLength = 4;
		const truncatedInput = input.slice(0, maxLength);
		const currentYear = new Date().getFullYear();

		if (truncatedInput && Number(truncatedInput) > currentYear) {
			yearValidationError = true;
		} else {
			yearValidationError = false;
		}

		year = truncatedInput ? Number(truncatedInput) : undefined;
	}

	function validateYear(event: Event) {
		const input = (event.target as HTMLInputElement).value;
		const currentYear = new Date().getFullYear();
		const regex = /^\d{4}$/;

		if (!regex.test(input) || Number(input) > currentYear) {
			yearValidationError = true;
		} else {
			yearValidationError = false;
		}
	}

	function validateLastName(event: Event) {
		const input = (event.target as HTMLInputElement).value;
		const regex = /^[A-Za-zА-Яа-яЁё]{2,50}$/;

		if (!regex.test(input)) {
			lastNameValidationError = true;
		} else {
			lastNameValidationError = false;
		}
	}

	function validateFirstName(event: Event) {
		const input = (event.target as HTMLInputElement).value;
		const regex = /^[A-Za-zА-Яа-яЁё]{2,25}$/;

		if (!regex.test(input)) {
			firstNameValidationError = true;
		} else {
			firstNameValidationError = false;
		}
	}

	function validateTitle(event: Event) {
		const input = (event.target as HTMLInputElement).value;
		const regex = /^[A-Za-zА-Яа-яЁё0-9\s"',.!?\-]{1,50}$/;

		if (!regex.test(input)) {
			titleValidationError = true;
		} else {
			titleValidationError = false;
		}
	}

	function validateAllFields() {
		const cats = categories;
		const genre = cats.find((cat) => cat.name === 'Жанр');
		if (!genre) {
			genreError = true;
			return false;
		}
		const isSelected = genre.children.some((child) => child.selected);
		if (!isSelected) {
			genreError = true;
			return false;
		} else {
			genreError = false;
		}

		lastNameEmptyError = validateField(lastName);
		firstNameEmptyError = validateField(firstName);
		titleEmptyError = validateField(title);
		isbnEmptyError = validateField(isbn);
		yearEmptyError = validateField(year);

		if (
			lastNameEmptyError ||
			firstNameEmptyError ||
			titleEmptyError ||
			isbnEmptyError ||
			yearEmptyError ||
			yearValidationError
		) {
			return false;
		}
		return true;
	}

	function confirmData() {
		if (validateAllFields()) {
			onNextTab();
		}
	}
</script>

<div class="flex w-full rounded-lg bg-zinc-900 p-6 shadow">
	<!-- Левая колонка -->
	<div class="flex h-[400px] w-1/2 flex-col pr-4">
		<!-- Автор -->
		<div class="flex">
			<div class="mr-2 w-1/2" class:mb-6={!lastNameEmptyError && !lastNameValidationError}>
				<span class="text-sm font-medium"
					>Автор <span class="font-bold text-red-500">*</span></span
				>
				<input
					type="text"
					autocomplete="family-name"
					aria-label="Фамилия"
					bind:value={lastName}
					onblur={(e) => {
						lastNameEmptyError = validateField(lastName);
						validateLastName(e);
					}}
					oninput={(e) => {
						fetchAuthors((e.target as HTMLInputElement).value);
						validateLastName(e);
					}}
					placeholder="Фамилия"
					class="w-full rounded border p-2"
					class:border-red-500={lastNameEmptyError || lastNameValidationError}
				/>
				{#if lastNameEmptyError}
					<span class="text-sm text-red-500">Обязательно к заполнению.</span>
				{/if}
				{#if lastNameValidationError && !lastNameEmptyError}
					<span class="text-sm text-red-500">Некорректный формат.</span>
				{/if}
			</div>

			<div
				class="mt-6 mr-2 w-1/2"
				class:mb-6={!firstNameEmptyError && !firstNameValidationError}
			>
				<input
					type="text"
					autocomplete="name"
					aria-label="Имя"
					bind:value={firstName}
					onblur={(e) => {
						firstNameEmptyError = validateField(firstName);
						validateFirstName(e);
					}}
					oninput={(e) => validateFirstName(e)}
					placeholder="Имя"
					class="w-full rounded border p-2"
					class:border-red-500={firstNameEmptyError || firstNameValidationError}
				/>
				{#if firstNameEmptyError}
					<span class="text-sm text-red-500">Обязательно к заполнению.</span>
				{/if}
				{#if firstNameValidationError && !firstNameEmptyError}
					<span class="text-sm text-red-500">Некорректный формат.</span>
				{/if}
			</div>

			{#if suggestions.length}
				<ul class="absolute z-10 mt-1 border bg-zinc-900">
					{#each suggestions as suggestion}
						<li>
							<button
								onclick={() => selectAuthor(suggestion)}
								class="cursor-pointer p-2 hover:bg-gray-100"
							>
								{suggestion}
							</button>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
		<!-- Название книги -->
		<div class:mb-6={!titleEmptyError && !titleValidationError}>
			<span class="block text-sm font-medium"
				>Название книги <span class="font-bold text-red-500">*</span></span
			>
			<input
				type="text"
				bind:value={title}
				class="w-full rounded border p-2"
				oninput={validateTitle}
				onblur={(e) => {
					titleEmptyError = validateField(title);
					validateTitle(e);
				}}
				class:border-red-500={titleEmptyError || titleValidationError}
			/>
			{#if titleEmptyError}
				<span class="text-sm text-red-500">Обязательно к заполнению.</span>
			{/if}
			{#if titleValidationError && !titleEmptyError}
				<span class="text-sm text-red-500">Некорректный формат</span>
			{/if}
		</div>
		<!-- ISBN и год издания -->
		<div class="mb-4">
			<div class="flex space-x-2">
				<!-- Поле ISBN -->
				<div class="w-1/2">
					<span class="block text-sm font-medium"
						>ISBN <span class="font-bold text-red-500">*</span></span
					>
					<input
						type="text"
						bind:value={isbn}
						oninput={(e) => {
							formatISBN(e);
							isbnEmptyError = validateField(isbn);
						}}
						onblur={() => (isbnEmptyError = validateField(isbn))}
						placeholder="XXX-X-XXXXX-XXX-X"
						class="placeholder-opacity-50 w-full rounded border p-2"
						class:border-red-500={isbnEmptyError}
					/>
					{#if isbnEmptyError}
						<span class="text-sm text-red-500">Обязательно к заполнению.</span>
					{/if}
				</div>

				<!-- Поле Год издания -->
				<div class="w-1/2">
					<span class="block text-sm font-medium"
						>Год издания <span class="font-bold text-red-500">*</span></span
					>
					<input
						type="text"
						bind:value={year}
						oninput={(e) => {
							formatyear(e);
							yearEmptyError = validateField(year);
							validateYear(e);
						}}
						onblur={(e) => {
							yearEmptyError = validateField(year);
							validateYear(e);
						}}
						max={new Date().getFullYear()}
						placeholder="Год"
						class="w-full rounded border p-2"
						class:border-red-500={yearEmptyError || yearValidationError}
					/>
					{#if yearEmptyError}
						<span class="text-sm text-red-500">Обязательно к заполнению.</span>
					{/if}
					{#if yearValidationError && !yearEmptyError}
						<span class="text-sm text-red-500">Некорректный формат.</span>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<!-- Правая колонка -->
	<div class="flex h-[400px] w-1/2 flex-col pl-4">
		<!-- Заголовок и кнопка "Снять выделение" -->
		<div class="mb-4 flex items-center justify-between">
			<h2 class="text-xl font-semibold">Категории</h2>
			<button onclick={clearSelection} class="rounded bg-gray-500 p-2 px-4 text-white"
				>Снять выделение</button
			>
		</div>

		<!-- Контейнер с прокруткой -->
		<div
			class="flex-grow overflow-y-auto rounded border bg-zinc-900 p-2 pr-2"
			class:border-red-500={genreError}
		>
			{#each categories as category, parentIndex}
				<div class="category-item mb-2 rounded border bg-zinc-800 p-2">
					<button
						onclick={() => toggleCategory(parentIndex)}
						class="w-full text-left font-bold"
						style="font-weight: {category.selected ? 'bold' : 'normal'}"
					>
						{category.expanded ? '^' : '+'}
						{category.name}
					</button>
					{#if category.expanded}
						{#each category.children as child, childIndex}
							<div class="ml-6">
								<input
									type="checkbox"
									checked={child.selected}
									onchange={() => toggleSelection(parentIndex, childIndex)}
								/>
								<span>{child.name}</span>
							</div>
						{/each}
					{/if}
				</div>
			{/each}
		</div>
		{#if genreError}
			<span class="mt-2 text-sm text-red-500">Выберите жанр!</span>
		{/if}
	</div>
</div>
<div class="mt-4 flex justify-end">
	<button onclick={confirmData} class="rounded bg-gray-500 p-2 px-20 text-white">Далее</button>
</div>

<style>
	.category-item {
		transition:
			background-color 0.3s ease,
			box-shadow 0.3s ease;
		border-radius: 0.375rem;
	}

	.category-item:hover {
		background-color: rgba(59, 130, 246, 0.1);
		box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
	}

	input {
		transition:
			border-color 0.3s ease,
			box-shadow 0.3s ease;
		border-radius: 0.375rem;
	}

	input:focus {
		border-color: #3b82f6;
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
		outline: none;
	}

	.border-red-500 {
		border-color: #ef4444;
	}

	button {
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	button:hover {
		background-color: #3b82f6;
	}
</style>
