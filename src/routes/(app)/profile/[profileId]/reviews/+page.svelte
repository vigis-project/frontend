<script lang="ts">
	import cover from '$lib/images/cover.jpg';
	import type { Book, Review, User } from '$lib/server/types';

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

<div class="flex flex-col gap-3">
	{#each books as book}
		<div class="flex h-fit min-h-[150px] w-full flex-row px-4 py-2">
			<img class="h-full w-[85px] rounded-md object-cover" src={cover} alt="Cover" />
			<div class="bg-walnut-muted ml-3 flex h-fit flex-row rounded-md px-3 py-2">
				<div class="ml-3 h-fit">
					<div>
						<div class="flex flex-row">
							<h4>{book.bookName}</h4>
							<p class="text-walnut-light/60 border-walnut-accent ml-1 border-l pl-1">
								{book.author}
							</p>
						</div>
					</div>
					<p class="text-walnut-light/80 mt-2 pr-3">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, distinctio
						adipisci quae eaque accusamus harum error atque. Aut animi, ipsam, eum odit
						suscipit impedit ducimus possimus repellat pariatur dolorem cupiditate
						delectus laudantium vitae blanditiis esse! Eaque doloribus quasi, laborum
						iusto expedita fuga deserunt fugiat dolores sit veritatis nam qui quidem
						blanditiis deleniti ad accusamus soluta repudiandae accusantium aspernatur
						aperiam animi quos. Obcaecati sunt sed debitis veritatis, mollitia explicabo
						facere suscipit nihil aut, atque quisquam. Quibusdam tempore nam, sapiente
						obcaecati officia a sint quas blanditiis explicabo dolorum? Fugit rem ullam
						dolorem eos! Omnis voluptate quas quae fugiat quidem pariatur nihil
						voluptatibus?
					</p>
				</div>
				<div
					class="border-walnut-accent flex shrink-0 items-center justify-center border-l pl-4 text-lg font-semibold"
				>
					1 / 5 ⭐️
				</div>
			</div>
		</div>
	{/each}
</div>
