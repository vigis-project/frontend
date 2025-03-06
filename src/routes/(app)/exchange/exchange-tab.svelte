<script lang="ts">
	type Props = {
		next: () => void;
		title?: string;
		isbn?: string;
		lastName?: string;
		firstName?: string;
		year?: number;
	}

	let { next, title = $bindable(""), isbn = $bindable(""), lastName = $bindable(""), firstName = $bindable(""), year = $bindable()  }: Props = $props();


		// Функция загрузки фамилий из БД (имитация)
	async function fetchAuthors(query: string) {
			if (query.length < 1) {
					suggestions = [];
					return;
			}
			// Здесь можно сделать реальный API-запрос
			const allAuthors = ["Булгаков", "Бунин", "Блок", "Брюсов"];
			suggestions = allAuthors.filter((author) => author.startsWith(query));
	}
		
		// Выбор автора из списка
	function selectAuthor(author: string) {
			lastName = author;
			firstName = "Авто"; // Можно подтягивать имя из БД
			suggestions = [];
	}

		// Подсказки для фамилии (будут подгружаться из БД)
	let suggestions = $state<string[]>([]);
	let selectedAuthor = $state<{ lastName: string; firstName: string } | null>(null);

	function formatISBN(event: Event) {
		let input = (event.target as HTMLInputElement).value.replace(/\D/g, ""); // Удаляем все нецифровые символы

		let formatted = "";
		if (input.length > 0) formatted += input.slice(0, 3);
		if (input.length > 3) formatted += "-" + input.slice(3, 4);
		if (input.length > 4) formatted += "-" + input.slice(4, 9);
		if (input.length > 9) formatted += "-" + input.slice(9, 12);
		if (input.length > 12) formatted += "-" + input.slice(12, 13);

		isbn = formatted;
	}

	let categories = $state([
	{
			name: "Жанр",
			expanded: false,
			selected: false,
			children: [
				{ name: "История", selected: false },
				{ name: "Детектив", selected: false },
				{ name: "Приключения", selected: false },
				{ name: "Детские книги", selected: false },
				{ name: "Мемуары", selected: false },
				{ name: "Психология", selected: false },
				{ name: "Фантастика", selected: false },
				{ name: "Эзотерика", selected: false },
				{ name: "Фэнтези", selected: false },
				{ name: "Поэзия", selected: false },
				{ name: "Драма", selected: false },
				{ name: "Классика", selected: false },
				{ name: "Ужасы", selected: false },
				{ name: "Роман", selected: false }
			]
		},
		{
			name: "Область наук",
			expanded: false,
			selected: false,
			children: [
				{ name: "Философия", selected: false },
				{ name: "Физика", selected: false },
				{ name: "Химия", selected: false },
				{ name: "Биология", selected: false },
				{ name: "Математика", selected: false },
				{ name: "Информатика", selected: false },
				{ name: "Лингвистика", selected: false },
				{ name: "Психология", selected: false },
				{ name: "Экономика", selected: false },
				{ name: "История науки", selected: false }
			]
		},
		{
		name: "Обложка",
		expanded: false,
		selected: false,
		children: [
			{ name: "Твёрдая", selected: false },
			{ name: "Мягкая", selected: false },
			{ name: "Интегральная", selected: false },
			{ name: "Кожаный переплёт", selected: false },
			{ name: "Суперобложка", selected: false }
		]
	},
	{
		name: "Лауреат",
		expanded: false,
		selected: false,
		children: [
			{ name: "Нобелевская премия", selected: false },
			{ name: "Букеровская премия", selected: false },
			{ name: "Пулитцеровская премия", selected: false },
			{ name: "Гонкуровская премия", selected: false },
			{ name: "Литературная премия «Ясная Поляна»", selected: false },
			{ name: "Литературная премия «Большая книга»", selected: false },
			{ name: "Лауреат премии «Хьюго»", selected: false },
			{ name: "Лауреат премии «Небьюла»", selected: false }
		]
	},
	{
		name: "Экранизация",
		expanded: false,
		selected: false,
		children: [
			{ name: "Есть", selected: false },
			{ name: "Нет", selected: false }
		]
	},
	{
		name: "Язык издателя",
		expanded: false,
		selected: false,
		children: [
			{ name: "Русский", selected: false },
			{ name: "Английский", selected: false },
			{ name: "Немецкий", selected: false },
			{ name: "Французский", selected: false },
			{ name: "Китайский", selected: false },
			{ name: "Испанский", selected: false },
			{ name: "Итальянский", selected: false },
			{ name: "Японский", selected: false }
		]
	}
	]);

	function toggleCategory(index: number) {
		categories[index].expanded = !categories[index].expanded;
	}


	
	function toggleSelection(parentIndex: number, childIndex: number) {
		categories[parentIndex].children[childIndex].selected = !categories[parentIndex].children[childIndex].selected;
		categories[parentIndex].selected = categories[parentIndex].children.some(child => child.selected); // Обновляем родителя
	} 


	function clearSelection() {
		categories.map((category) => {
			category.selected = false;
			category.children.map((child) => {
				child.selected = false;

				return { ...child };
			});

			return { ...category  }
		});
	}


	function validateAndProceed() {
		const cats = categories; // Получаем актуальные данные
		console.log("Текущие категории:", cats);

		const genre = cats.find(cat => cat.name === "Жанр");
		console.log("Найдена категория 'Жанр':", genre);

		if (!genre) {
				alert("Категория 'Жанр' не найдена!");
				return;
		}

		const isSelected = genre.children.some(child => child.selected);
		console.log("Выбраны ли подкатегории жанра:", isSelected);

		if (!isSelected) {
				alert("Выберите хотя бы одну категорию в 'Жанр'!");
				return;
		}

		console.log("Категория выбрана, выполняем переход...");

		next();
	}
</script>

<div class="p-6 bg-zinc-900 rounded-lg shadow w-full flex">
	<!-- Левая колонка -->
	<div class="w-1/2 pr-4 flex flex-col h-[400px]">
			<!-- Автор -->
			<div class="mb-4">
					<span class="text-sm font-medium">Автор <span class="text-red-500 font-bold">*</span></span>
					<div class="flex space-x-2">
							<input
									type="text"
									autocomplete="family-name"
									aria-label="Фамилия"
									bind:value={lastName}
									oninput={(e) => fetchAuthors((e.target as HTMLInputElement).value)}
									placeholder="Фамилия"
									class="border p-2 w-1/2 rounded"
							/>
							<input
									type="text"
									autocomplete="name"
									aria-label="Имя"
									bind:value={firstName}
									placeholder="Имя"
									class="border p-2 w-1/2 rounded"
							/>
					</div>
					{#if suggestions.length}
							<ul class="border mt-1 bg-zinc-900 absolute z-10">
									{#each suggestions as suggestion}
											<li>
												<button onclick={() => selectAuthor(suggestion)} class="p-2 cursor-pointer hover:bg-gray-100">
													{suggestion}
												</button>
											</li>
									{/each}
							</ul>
					{/if}
		</div>

			<!-- Название книги -->
			<div class="mb-4">
					<label for="book-title" class="block text-sm font-medium">Название книги *</label>
					<input id="book-title" type="text" bind:value={title} class="border p-2 w-full rounded" />
			</div>

			<!-- ISBN и год издания -->
		
			<div class="mb-4">
				<div class="flex space-x-2">
						<div class="w-1/2">
								<label for="isbn" class="block text-sm font-medium">ISBN *</label>
								<input id="isbn"
										type="text" 
										bind:value={isbn} 
										oninput={formatISBN}
										placeholder="XXX-X-XXXXX-XXX-X"
										class="border p-2 w-full rounded placeholder-opacity-50"
								/>
						</div>
						<div class="w-1/2">
								<label for="publish-year" class="block text-sm font-medium">Год издания *</label>
								<input 
										id="publish-year"
										type="number" 
										bind:value={year}
										max={new Date().getFullYear()} 
										placeholder="Год"
										class="border p-2 w-full rounded"
								/>
						</div>
				</div>
			</div>
	</div>

 
<!-- Правая колонка -->
	<div class="w-1/2 pl-4 flex flex-col h-[400px]">
		<!-- Заголовок и кнопка "Снять выделение" -->
		<div class="flex justify-between items-center mb-4">
				<h2 class="text-xl font-semibold">Категории</h2>
				<button onclick={clearSelection} class="bg-blue-500 text-white p-2 rounded px-4">Снять выделение</button>
		</div>

		<!-- Контейнер с прокруткой -->
		<div class="overflow-y-auto flex-grow pr-2 border rounded bg-zinc-900 p-2">
				{#each categories as category, parentIndex}
						<div class="border p-2 mb-2 rounded bg-zinc-800">
								<button 
										onclick={() => toggleCategory(parentIndex)} 
										class="font-bold"
										style="font-weight: {category.selected ? 'bold' : 'normal'}"
								>
										{category.expanded ? "[-]" : "[+]"} {category.name}
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
		<div class="flex justify-end mt-4">

				<button onclick={validateAndProceed} class="bg-blue-500 text-white p-2 rounded w-[48%]">Далее</button>
		</div>
	</div>
</div>

	
<style>
		button {
			cursor: pointer;
		}
</style>