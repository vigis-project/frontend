<script lang="ts">
	import { page } from '$app/state';
	import { BookOpen } from 'lucide-svelte';
</script>

<header class="bg-walnut-dark sticky top-0 z-10 border-b">
	<div class="grid h-16 grid-cols-[1fr_max-content_1fr] px-4 md:px-6">
		<a href="/" class="flex items-center gap-2">
			<BookOpen class="text-walnut-light h-6 w-6" />
			<span class="text-walnut-light text-xl font-bold">Vigis</span>
		</a>
		<nav class="hidden grow flex-row items-center justify-center gap-6 text-sm md:flex">
			<a
				href="/catalog"
				class="hover:text-walnut-accent text-walnut-light font-medium transition-colors"
			>
				Каталог
			</a>
			<a
				href="/how-it-works"
				class="hover:text-walnut-accent text-walnut-light font-medium transition-colors"
			>
				Как это работает
			</a>
			<a
				href="/communities"
				class="hover:text-walnut-accent text-walnut-light font-medium transition-colors"
			>
				Сообщества
			</a>
			<a
				href="/about"
				class="hover:text-walnut-accent text-walnut-light font-medium transition-colors"
			>
				О проекте
			</a>
		</nav>
		<div class="flex items-center justify-end gap-6">
			<a class="text-walnut-light rounded-md px-2 py-1" href="/login"> Войти </a>
			<a
				class="bg-walnut-light text-walnut-dark hover:bg-walnut-accent
				rounded-md px-2 py-1 transition-colors"
				href="/register"
			>
				Регистрация
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
					class="text-walnut-light h-6 w-6"
				>
					<line x1="4" x2="20" y1="12" y2="12" />
					<line x1="4" x2="20" y1="6" y2="6" />
					<line x1="4" x2="20" y1="18" y2="18" />
				</svg>
			</button>
		</div>
	</div>
</header>
