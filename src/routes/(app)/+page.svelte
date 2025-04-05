<script lang="ts">
	import { BookOpen, ChevronRight, RefreshCw, Search } from 'lucide-svelte';
	import BookExchange from '$lib/images/book-exchange.svg';
	import Footer from '$components/Footer.svelte';
	import ProfilePlaceholder from '$components/ProfilePlaceholder.svelte';
</script>

<div class="flex min-h-screen flex-col">
	<main class="flex-1">
		<section class="bg-walnut-muted w-full px-16 py-12 md:py-24 lg:px-20 lg:py-32">
			<div class="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
				<div class="z-2 space-y-4">
					<h1
						class="text-walnut-light text-3xl font-bold tracking-tighter
						sm:text-4xl md:text-5xl"
					>
						Обменивайтесь книгами с единомышленниками
					</h1>
					<p class="text-walnut-light/70 max-w-[600px] md:text-xl">
						Дайте вашим книгам вторую жизнь и откройте для себя новые истории. Наша
						платформа соединяет любителей чтения по всей стране.
					</p>
					<div class="flex flex-col items-center gap-4 sm:flex-row">
						<a
							class="bg-walnut-light text-walnut-dark hover:bg-walnut-accent w-fit self-start
							rounded-md px-2 py-1 text-lg font-semibold transition-colors sm:w-auto sm:self-auto"
							href="/register"
						>
							Начать обмен
						</a>
						<button
							class="border-walnut-light text-walnut-light hover:bg-walnut-muted
							group flex w-full flex-row sm:w-auto"
						>
							<p>Узнать больше</p>
							<div class="relative inline-flex items-center">
								<ChevronRight class="absolute size-7 opacity-70" />
								<ChevronRight
									class="absolute size-7 opacity-85 transition-transform 
									group-hover:translate-x-2"
								/>
								<ChevronRight
									class="absolute size-7 transition-transform group-hover:translate-x-4"
								/>
							</div>
						</button>
					</div>
				</div>
				<div class="flex justify-center">
					<img
						src={BookExchange}
						width={750}
						alt="Книжная полка с книгами"
						class="rounded-lg object-cover"
					/>
				</div>
			</div>
		</section>

		<section class="w-full bg-white py-12 md:py-16 lg:py-20">
			<div class=" px-4 md:px-6">
				<div class="mx-auto max-w-3xl space-y-4 text-center">
					<h2 class="text-walnut-dark text-3xl font-bold tracking-tighter sm:text-4xl">
						Найдите интересующие вас книги
					</h2>
					<p class="text-walnut-muted md:text-lg">
						Введите название книги, автора или жанр, чтобы найти книги для обмена
					</p>
					<div class="mx-auto flex w-full max-w-lg items-center space-x-2">
						<input
							type="text"
							placeholder="Поиск книг..."
							class="bg-walnut-dark text-walnut-light flex-1 rounded-lg px-3 py-2"
						/>
						<button
							type="submit"
							class="bg-walnut-light text-walnut-dark hover:bg-walnut-accent flex flex-row items-center rounded-md px-2 py-1 transition-colors"
						>
							<Search class="mr-2 size-8" />
							<p class="text-lg">Поиск</p>
						</button>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-walnut-accent w-full py-12 md:py-16 lg:py-20">
			<div class=" px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<h2
							class="text-walnut-dark text-3xl font-bold tracking-tighter sm:text-4xl"
						>
							Как это работает
						</h2>
						<span class="text-walnut-muted max-w-[900px] md:text-lg">
							Обмен книгами — это просто! Всего несколько шагов, и вы уже читаете
							новую книгу
						</span>
					</div>
				</div>
				<div class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
					<div class="flex flex-col items-center space-y-4 text-center">
						<div
							class="bg-walnut-light/75 flex h-16 w-16 items-center justify-center rounded-full shadow-md"
						>
							<BookOpen class="text-walnut-muted size-8" />
						</div>
						<h3 class="text-walnut-dark text-xl font-bold">1. Добавьте свои книги</h3>
						<span class="text-walnut-muted">
							Сфотографируйте и добавьте книги, которыми вы готовы поделиться с
							другими
						</span>
					</div>
					<div class="flex flex-col items-center space-y-4 text-center">
						<div
							class="bg-walnut-light/75 flex h-16 w-16 items-center justify-center rounded-full shadow-md"
						>
							<Search class="text-walnut-muted size-8" />
						</div>
						<h3 class="text-walnut-dark text-xl font-bold">
							2. Найдите интересные книги
						</h3>
						<span class="text-walnut-muted">
							Просматривайте каталог и находите книги, которые хотели бы прочитать
						</span>
					</div>
					<div class="flex flex-col items-center space-y-4 text-center">
						<div
							class="bg-walnut-light/75 flex h-16 w-16 items-center justify-center rounded-full shadow-md"
						>
							<RefreshCw class="text-walnut-muted size-8" />
						</div>
						<h3 class="text-walnut-dark text-xl font-bold">
							3. Договоритесь об обмене
						</h3>
						<span class="text-walnut-muted">
							Свяжитесь с владельцем книги и договоритесь о встрече или отправке по
							почте
						</span>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-walnut-muted w-full py-12 md:py-16 lg:py-20">
			<div class=" px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<h2
							class="text-walnut-light text-3xl font-bold tracking-tighter sm:text-4xl"
						>
							Отзывы участников
						</h2>
						<span class="text-walnut-light/70 max-w-[900px] md:text-lg">
							Что говорят о нас любители книг, уже присоединившиеся к сообществу
						</span>
					</div>
				</div>
				<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{#each [1, 2, 3, 4] as testimonial}
						<div class="bg-walnut-dark rounded-lg border p-6">
							<div class="flex items-start space-x-4">
								<ProfilePlaceholder class="fill-walnut-accent size-10" />
								<div>
									<h3 class="text-walnut-light font-semibold">Анна К.</h3>
									<span class="text-walnut-light/70 text-sm">Москва</span>
								</div>
							</div>
							<span class="text-walnut-light/70 mt-4">
								"Благодаря КнигоОбмену я нашла редкое издание, которое давно искала.
								Процесс обмена прошел очень легко и приятно. Теперь регулярно
								обмениваюсь книгами и познакомилась с интересными людьми."
							</span>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section class="bg-walnut-accent w-full py-12 md:py-16 lg:py-20">
			<div class=" px-4 md:px-6">
				<div class="flex flex-col items-center justify-center gap-3 space-y-4 text-center">
					<div class="space-y-2">
						<h2
							class="text-walnut-dark text-3xl font-bold tracking-tighter sm:text-4xl"
						>
							Присоединяйтесь к сообществу книголюбов
						</h2>
						<h1 class="text-walnut-muted max-w-[900px] md:text-lg">
							Более 10 000 пользователей уже обмениваются книгами на нашей платформе
						</h1>
					</div>
					<div class="flex flex-col items-center gap-4 sm:flex-row">
						<a
							class="hover:bg-walnut-light text-walnut-dark rounded-md px-2 py-1 text-lg transition-colors hover:shadow-md"
							href="/register"
						>
							Зарегистрироваться
						</a>
						<a class="border-walnut-light text-walnut-dark" href="#"> Узнать больше </a>
					</div>
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>
