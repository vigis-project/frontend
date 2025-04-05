<script lang="ts">
	import { ChevronUp } from 'lucide-svelte';
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

	 
	let genreError = $state(false); 
	
</script>
<div
    class="h-96 overflow-y-auto rounded border bg-walnut-accent text-walnut-accent p-2 w-full max-w-[400px] lg:w-[400px] " 
    class:border-red-500={genreError}
>
    {#each categories as category, parentIndex}
        <div class="mb-2">
            <!-- Кнопка категории -->
            <button
                onclick={() => toggleCategory(parentIndex)}
                class="flex w-full items-center justify-between rounded bg-walnut-muted p-2 text-left"
            >
                <span class={category.selected ? 'font-bold' : ''}>{category.name}</span>
                <ChevronUp
                    class={`size-5 transition-transform duration-200 ${category.expanded ? 'rotate-180' : ''}`}
                />
            </button>

            <!-- Список подкатегорий -->
            {#if category.expanded}
                <div class="mt-1 grid grid-cols-2 gap-2 bg-walnut-muted p-2">
                    {#each category.children as child, childIndex}
                        <label class="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={child.selected}
                                onchange={() => toggleSelection(parentIndex, childIndex)}
                                class="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-500"
                            />
                            <span>{child.name}</span>
                        </label>
                    {/each}
                </div>
            {/if}
        </div>
    {/each}
</div>