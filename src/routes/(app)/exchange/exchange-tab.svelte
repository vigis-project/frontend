<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    

    // Состояния формы
    let lastName = "";
    let firstName = "";
    let bookTitle = "";
    let isbn = "";
    let year = "";
    
    // Функция загрузки фамилий из БД (имитация)
    async function fetchAuthors(query: string) {
        if (query.length < 1) {
            suggestions.set([]);
            return;
        }
        // Здесь можно сделать реальный API-запрос
        const allAuthors = ["Булгаков", "Бунин", "Блок", "Брюсов"];
        suggestions.set(allAuthors.filter((a) => a.startsWith(query)));
    }
    
    // Выбор автора из списка
    function selectAuthor(author: string) {
        lastName = author;
        firstName = "Авто"; // Можно подтягивать имя из БД
        suggestions.set([]);
    }

    // Подсказки для фамилии (будут подгружаться из БД)
    let suggestions = writable<string[]>([]);
    let selectedAuthor = writable<{ lastName: string; firstName: string } | null>(null);

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

    let categories = writable([
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
    categories.update(cats => {
      cats[index].expanded = !cats[index].expanded;
      return [...cats];
    });
  }

  function toggleSelection(parentIndex: number, childIndex: number) {
    categories.update(cats => {
      cats[parentIndex].children[childIndex].selected = !cats[parentIndex].children[childIndex].selected;
      cats[parentIndex].selected = cats[parentIndex].children.some(child => child.selected); // выделение родителя
      return [...cats];
    });
  }

  function clearSelection() {
    categories.update(cats => {
      return cats.map(cat => ({
        ...cat,
        selected: false,
        children: cat.children.map(child => ({ ...child, selected: false }))
      }));
    });
  }

  function validateAndProceed() {
    let valid = false;
    categories.subscribe(cats => {
      const genre = cats.find(cat => cat.name === "Жанр");
      if (genre) valid = genre.children.some(child => child.selected);
    })();
    
    if (!valid) {
      alert("Выберите хотя бы одну категорию в 'Жанр'!");
      return;
    }
    alert("Категории выбраны!");
  }


</script>

<div class="p-6 bg-zinc-900 rounded-lg shadow w-full flex">
    <!-- Левая колонка -->
    <div class="w-1/2 pr-4">
        <!-- Автор -->
        <div class="mb-4">
            <label class="block text-sm font-medium">Автор *</label>
            <div class="flex space-x-2">
                <input
                    type="text"
                    bind:value={lastName}
                    on:input={(e) => fetchAuthors((e.target as HTMLInputElement).value)}
                    placeholder="Фамилия"
                    class="border p-2 w-1/2 rounded"
                />
                <input
                    type="text"
                    bind:value={firstName}
                    
                    placeholder="Имя"
                    class="border p-2 w-1/2 rounded"
                />
            </div>
            {#if $suggestions.length}
                <ul class="border mt-1 bg-zinc-900 absolute z-10">
                    {#each $suggestions as suggestion}
                        <li on:click={() => selectAuthor(suggestion)} class="p-2 cursor-pointer hover:bg-gray-100">
                            {suggestion}
                        </li>
                    {/each}
                </ul>
            {/if}
        </div>

        <!-- Название книги -->
        <div class="mb-4">
            <label class="block text-sm font-medium">Название книги *</label>
            <input type="text" bind:value={bookTitle} class="border p-2 w-full rounded" />
        </div>

        <!-- ISBN и год издания -->
        <div class="mb-4">
            <label class="block text-sm font-medium">ISBN и Год издания *</label>
            <div class="flex space-x-2">
                <input 
                type="text" 
                bind:value={isbn} 
                on:input={formatISBN}
                placeholder="151-4-04139-384-2"
                class="border p-2 w-1/2 rounded placeholder-opacity-50"
            />
                <input 
                    type="number" 
                    bind:value={year} 
                    max={new Date().getFullYear()} 
                    placeholder="Год"
                    class="border p-2 w-1/2 rounded"
                />
            </div>
        </div>
    </div>

    <!-- Правая колонка -->
    <div class="p-6 bg-neutral-950 rounded-lg shadow flex flex-col h-[400px] w-full">
        <h2 class="text-xl font-semibold mb-4">Категории</h2>
    
        <!-- Контейнер с прокруткой -->
        <div class="overflow-y-auto flex-grow pr-2 border rounded bg-zinc-900 p-2">
            {#each $categories as category, parentIndex}
                <div class="border p-2 mb-2 rounded bg-zinc-800">
                    <button on:click={() => toggleCategory(parentIndex)} class="font-bold">
                        {category.expanded ? "[-]" : "[+]"} {category.name}
                    </button>
    
                    {#if category.expanded}
                        {#each category.children as child, childIndex}
                            <div class="ml-6">
                                <input type="checkbox" checked={child.selected} on:change={() => toggleSelection(parentIndex, childIndex)} />
                                <span>{child.name}</span>
                            </div>
                        {/each}
                    {/if}
                </div>
            {/each}
        </div>
    
        <!-- Кнопки управления -->
        <div class="flex justify-between mt-4">
            <button on:click={clearSelection} class="bg-blue-500 text-white p-2 rounded w-[48%]">
                Снять выделение
            </button>
            <button on:click={validateAndProceed} class="bg-blue-500 text-white p-2 rounded w-[48%]">
                Далее
            </button>
        </div>
    </div>
    
</div>

<style>
    button {
      cursor: pointer;
    }
  </style>