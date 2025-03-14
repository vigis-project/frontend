<script lang="ts">
	type Props = {
		next: () => void;
		title?: string;
		prev: () => void;
		
	}

	let { next,  prev, title = $bindable("") }: Props = $props();
	let isNextEnabled = $state(false);

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
		const cats = categories;
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

	$effect(() => {
    isNextEnabled = categories.find(cat => cat.name === "Жанр")?.children.some(child => child.selected) ?? false;
	});
</script>


<div class="p-6  bg-zinc-900 rounded-lg shadow w-full flex">


	<div class="w-1/2  flex flex-col h-[400px] mx-auto">
		
		<div class="flex justify-between items-center mb-4">
			<h2 class="text-xl font-semibold">Категории</h2>
			<button onclick={clearSelection} class="bg-blue-500 text-white p-2 rounded px-4">Снять выделение</button>
		</div>

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
						onchange={() => toggleSelection(parentIndex, childIndex)} />
					<span>{child.name}</span>
				</div>
				{/each}
				{/if}
			</div>
		{/each}
		</div>
		<div class="flex justify-between mt-4">	
		</div>
	</div>
</div>


<div class="flex justify-between mt-4">	
	<button onclick={prev} class="bg-gray-500 text-white p-2 rounded px-20">Назад</button>
	<button 
	onclick={() => validateAndProceed()} 
	class="{isNextEnabled ? 'bg-blue-500' : 'bg-gray-500 cursor-not-allowed'} text-white p-2 rounded px-20" 
	disabled={!isNextEnabled}>
	Далее
</button>
</div>

<style>
		button {
			cursor: pointer;
		}
</style>