<script lang="ts">
	import { concurrent } from 'svelte-typewriter';
	import {ArrowRight, BookOpen, MapPin, RefreshCw, Search} from 'lucide-svelte';
</script>

<div class="flex flex-col min-h-screen">
	<header class="border-b sticky top-0 bg-walnut-dark z-10">
	  <div class=" flex items-center justify-between h-16 px-4 md:px-6">
		<a href="/" class="flex items-center gap-2">
		  <BookOpen class="h-6 w-6 text-walnut-light" />
		  <span class="font-bold text-xl text-walnut-light">КнигоОбмен</span>
		</a>
		<nav class="hidden md:flex items-center gap-6 text-sm">
		  <a href="/catalog" class="font-medium transition-colors hover:text-walnut-accent text-walnut-light">
			Каталог
		  </a>
		  <a
			href="/how-it-works"
			class="font-medium transition-colors hover:text-walnut-accent text-walnut-light"
		  >
			Как это работает
		  </a>
		  <a
			href="/communities"
			class="font-medium transition-colors hover:text-walnut-accent text-walnut-light"
		  >
			Сообщества
		  </a>
		  <a href="/about" class="font-medium transition-colors hover:text-walnut-accent text-walnut-light">
			О проекте
		  </a>
		</nav>
		<div class="flex items-center gap-4">
		  <a href="/login">
			<button   class="text-walnut-light">
			  Войти
			</button>
		  </a>
		  <a href="/register">
			<button  class="bg-walnut-light text-walnut-dark hover:bg-walnut-accent">
			  Регистрация
			</button>
		  </a>
		  <button class="md:hidden" aria-label="Меню">
			<svg
			  xmlns="http://www.w3.org/2000/svg"
			  width="24"
			  height="24"
			  viewBox="0 0 24 24"
			  fill="none"
			  stroke="currentColor"
			  stroke-width="2"
			  stroke-linecap="round"
			  stroke-linejoin="round"
			  class="h-6 w-6 text-walnut-light"
			>
			  <line x1="4" x2="20" y1="12" y2="12" />
			  <line x1="4" x2="20" y1="6" y2="6" />
			  <line x1="4" x2="20" y1="18" y2="18" />
			</svg>
		  </button>
		</div>
	  </div>
	</header>

	<main class="flex-1">
	  <section class="w-full py-12 md:py-24 lg:py-32 bg-walnut-muted">
		<div class=" px-4 md:px-6">
		  <div class="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
			<div class="space-y-4">
			  <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-walnut-light">
				Обменивайтесь книгами с единомышленниками
			  </h1>
			  <p class="max-w-[600px] text-walnut-light/70 md:text-xl">
				Дайте вашим книгам вторую жизнь и откройте для себя новые истории. Наша платформа соединяет любителей
				чтения по всей стране.
			  </p>
			  <div class="flex flex-col sm:flex-row gap-4">
				<button
				  
				  class="w-full sm:w-auto bg-walnut-light text-walnut-dark hover:bg-walnut-accent"
				>
				  Начать обмен
				</button>
				<button
				  
				  
				  class="w-full sm:w-auto border-walnut-light text-walnut-light hover:bg-walnut-muted"
				>
				  Узнать больше
				</button>
			  </div>
			</div>
			<div class="flex justify-center">
			  <img
				src="/placeholder.svg?height=550&width=450"
				width={450}
				height={550}
				alt="Книжная полка с книгами"
				class="rounded-lg object-cover"
			  />
			</div>
		  </div>
		</div>
	  </section>

	  <section class="w-full py-12 md:py-16 lg:py-20">
		<div class=" px-4 md:px-6">
		  <div class="mx-auto max-w-3xl space-y-4 text-center">
			<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-walnut-light">
			  Найдите интересующие вас книги
			</h2>
			<p class="text-walnut-light/70 md:text-lg">
			  Введите название книги, автора или жанр, чтобы найти книги для обмена
			</p>
			<div class="flex w-full max-w-lg mx-auto items-center space-x-2">
			  <input type="text" placeholder="Поиск книг..." class="flex-1 bg-walnut-dark text-walnut-light" />
			  <button type="submit" class="bg-walnut-light text-walnut-dark hover:bg-walnut-accent">
				<Search class="h-4 w-4 mr-2" />
				Поиск
			  </button>
			</div>
		  </div>
		</div>
	  </section>

	  <section class="w-full py-12 md:py-16 lg:py-20 bg-walnut-muted/50">
		<div class=" px-4 md:px-6">
		  <div class="flex flex-col items-center justify-center space-y-4 text-center">
			<div class="space-y-2">
			  <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-walnut-light">
				Популярные книги для обмена
			  </h2>
			  <p class="max-w-[900px] text-walnut-light/70 md:text-lg">
				Эти книги пользуются наибольшим спросом среди участников нашего сообщества
			  </p>
			</div>
		  </div>
		  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
			{#each [1,2,3,4] as book }
				<div class="group relative overflow-hidden rounded-lg border bg-walnut-dark">
				<a href={`/book/${book}`} class="absolute inset-0 z-10" />
				<div class="aspect-[3/4] overflow-hidden">
					<img
					src={`/placeholder.svg?height=400&width=300&text=Книга ${book}`}
					width={300}
					height={400}
					alt={`Книга ${book}`}
					class="object-cover transition-transform group-hover:scale-105"
					/>
				</div>
				<div class="p-4">
					<h3 class="font-semibold line-clamp-1 text-walnut-light">Название книги {book}</h3>
					<span class="text-sm text-walnut-light/70 line-clamp-1">Автор книги</span>
					<div class="mt-2 flex items-center text-sm">
					<MapPin class="h-3.5 w-3.5 mr-1 text-walnut-light/70" />
					<span class="text-xs text-walnut-light/70">Москва</span>
					</div>
				</div>
				</div>
			{/each}
		  </div>
		  <div class="flex justify-center mt-10">
			<a href="/catalog">
			  <button  class="border-walnut-light text-walnut-light hover:bg-walnut-muted">
				Смотреть все книги
				<ArrowRight class="ml-2 h-4 w-4" />
			  </button>
			</a>
		  </div>
		</div>
	  </section>

	  <section class="w-full py-12 md:py-16 lg:py-20">
		<div class=" px-4 md:px-6">
		  <div class="flex flex-col items-center justify-center space-y-4 text-center">
			<div class="space-y-2">
			  <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-walnut-light">Как это работает</h2>
			  <span class="max-w-[900px] text-walnut-light/70 md:text-lg">
				Обмен книгами — это просто! Всего несколько шагов, и вы уже читаете новую книгу
			  </span>
			</div>
		  </div>
		  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
			<div class="flex flex-col items-center text-center space-y-4">
			  <div class="flex h-16 w-16 items-center justify-center rounded-full bg-walnut-light/10">
				<BookOpen class="h-8 w-8 text-walnut-light" />
			  </div>
			  <h3 class="text-xl font-bold text-walnut-light">1. Добавьте свои книги</h3>
			  <span class="text-walnut-light/70">
				Сфотографируйте и добавьте книги, которыми вы готовы поделиться с другими
			  </span>
			</div>
			<div class="flex flex-col items-center text-center space-y-4">
			  <div class="flex h-16 w-16 items-center justify-center rounded-full bg-walnut-light/10">
				<Search class="h-8 w-8 text-walnut-light" />
			  </div>
			  <h3 class="text-xl font-bold text-walnut-light">2. Найдите интересные книги</h3>
			  <span class="text-walnut-light/70">
				Просматривайте каталог и находите книги, которые хотели бы прочитать
			  </span>
			</div>
			<div class="flex flex-col items-center text-center space-y-4">
			  <div class="flex h-16 w-16 items-center justify-center rounded-full bg-walnut-light/10">
				<RefreshCw class="h-8 w-8 text-walnut-light" />
			  </div>
			  <h3 class="text-xl font-bold text-walnut-light">3. Договоритесь об обмене</h3>
			  <span class="text-walnut-light/70">
				Свяжитесь с владельцем книги и договоритесь о встрече или отправке по почте
			  </span>
			</div>
		  </div>
		</div>
	  </section>

	  <section class="w-full py-12 md:py-16 lg:py-20 bg-walnut-muted">
		<div class=" px-4 md:px-6">
		  <div class="flex flex-col items-center justify-center space-y-4 text-center">
			<div class="space-y-2">
			  <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-walnut-light">Отзывы участников</h2>
			  <span class="max-w-[900px] text-walnut-light/70 md:text-lg">
				Что говорят о нас любители книг, уже присоединившиеся к сообществу
			  </span>
			</div>
		  </div>
		  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
			{#each [1,2,3,4] as testimonial }
				<div class="rounded-lg border bg-walnut-dark p-6">
				<div class="flex items-start space-x-4">
					<img
					src={`/placeholder.svg?height=40&width=40&text=У${testimonial}`}
					width={40}
					height={40}
					alt={`Пользователь ${testimonial}`}
					class="rounded-full"
					/>
					<div>
					<h3 class="font-semibold text-walnut-light">Анна К.</h3>
					<span class="text-sm text-walnut-light/70">Москва</span>
					</div>
				</div>
				<span class="mt-4 text-walnut-light/70">
					"Благодаря КнигоОбмену я нашла редкое издание, которое давно искала. Процесс обмена прошел очень
					легко и приятно. Теперь регулярно обмениваюсь книгами и познакомилась с интересными людьми."
				</span>
				</div>
			{/each}
		  </div>
		</div>
	  </section>
	  <section class="w-full py-12 md:py-16 lg:py-20">
		<div class=" px-4 md:px-6">
		  <div class="flex flex-col items-center justify-center space-y-4 text-center">
			<div class="space-y-2">
			  <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-walnut-light">
				Присоединяйтесь к сообществу книголюбов
			  </h2>
			  <h1 class="max-w-[900px] text-walnut-light/70 md:text-lg">
				Более 10 000 пользователей уже обмениваются книгами на нашей платформе
			  </h1>
			</div>
			<div class="flex flex-col sm:flex-row gap-4">
			  <button  class="bg-walnut-light text-walnut-dark hover:bg-walnut-accent">
				Зарегистрироваться
			  </button>
			  <button
				
				
				class="border-walnut-light text-walnut-light hover:bg-walnut-muted"
			  >
				Узнать больше
			  </button>
			</div>
		  </div>
		</div>
	  </section>
	</main>

	<footer class="border-t py-6 md:py-8 bg-walnut-dark">
	  <div class=" flex flex-col gap-4 px-4 md:px-6">
		<div class="flex flex-col md:flex-row justify-between gap-4">
		  <div class="space-y-4">
			<a href="/" class="flex items-center gap-2">
			  <BookOpen class="h-5 w-5 text-walnut-light" />
			  <span class="font-bold text-walnut-light">КнигоОбмен</span>
			</a>
			<span class="text-sm text-walnut-light/70 max-w-xs">
			  Платформа для обмена книгами между любителями чтения по всей стране
			</span>
		  </div>
		  <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
			<div class="space-y-2">
			  <h4 class="font-medium text-sm text-walnut-light">Платформа</h4>
			  <ul class="space-y-2 text-sm">
				<li>
				  <a href="/catalog" class="text-walnut-light/70 hover:text-walnut-light">
					Каталог книг
				  </a>
				</li>
				<li>
				  <a href="/how-it-works" class="text-walnut-light/70 hover:text-walnut-light">
					Как это работает
				  </a>
				</li>
				<li>
				  <a href="/communities" class="text-walnut-light/70 hover:text-walnut-light">
					Сообщества
				  </a>
				</li>
			  </ul>
			</div>
			<div class="space-y-2">
			  <h4 class="font-medium text-sm text-walnut-light">Поддержка</h4>
			  <ul class="space-y-2 text-sm">
				<li>
				  <a href="/faq" class="text-walnut-light/70 hover:text-walnut-light">
					Частые вопросы
				  </a>
				</li>
				<li>
				  <a href="/contact" class="text-walnut-light/70 hover:text-walnut-light">
					Связаться с нами
				  </a>
				</li>
				<li>
				  <a href="/rules" class="text-walnut-light/70 hover:text-walnut-light">
					Правила обмена
				  </a>
				</li>
			  </ul>
			</div>
			<div class="space-y-2">
			  <h4 class="font-medium text-sm text-walnut-light">Компания</h4>
			  <ul class="space-y-2 text-sm">
				<li>
				  <a href="/about" class="text-walnut-light/70 hover:text-walnut-light">
					О проекте
				  </a>
				</li>
				<li>
				  <a href="/blog" class="text-walnut-light/70 hover:text-walnut-light">
					Блог
				  </a>
				</li>
				<li>
				  <a href="/partners" class="text-walnut-light/70 hover:text-walnut-light">
					Партнеры
				  </a>
				</li>
			  </ul>
			</div>
			<div class="space-y-2">
			  <h4 class="font-medium text-sm text-walnut-light">Правовая информация</h4>
			  <ul class="space-y-2 text-sm">
				<li>
				  <a href="/terms" class="text-walnut-light/70 hover:text-walnut-light">
					Условия использования
				  </a>
				</li>
				<li>
				  <a href="/privacy" class="text-walnut-light/70 hover:text-walnut-light">
					Политика конфиденциальности
				  </a>
				</li>
				<li>
				  <a href="/cookies" class="text-walnut-light/70 hover:text-walnut-light">
					Политика cookies
				  </a>
				</li>
			  </ul>
			</div>
		  </div>
		</div>
		<div class="flex flex-col md:flex-row justify-between items-center gap-4 border-t pt-4">
		  <span class="text-xs text-walnut-light/70">© 2025 КнигоОбмен. Все права защищены.</span>
		  <div class="flex items-center gap-4">
			<a href="#" class="text-walnut-light/70 hover:text-walnut-light">
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-5 w-5"
			  >
				<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
			  </svg>
			  <span class="sr-only">Facebook</span>
			</a>
			<a href="#" class="text-walnut-light/70 hover:text-walnut-light">
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-5 w-5"
			  >
				<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
				<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
				<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
			  </svg>
			  <span class="sr-only">Instagram</span>
			</a>
			<a href="#" class="text-walnut-light/70 hover:text-walnut-light">
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-5 w-5"
			  >
				<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
			  </svg>
			  <span class="sr-only">Twitter</span>
			</a>
			<a href="#" class="text-walnut-light/70 hover:text-walnut-light">
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-5 w-5"
			  >
				<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
				<rect width="4" height="12" x="2" y="9" />
				<circle cx="4" cy="4" r="2" />
			  </svg>
			  <span class="sr-only">aedIn</span>
			</a>
		  </div>
		</div>
	  </div>
	</footer>
  </div>