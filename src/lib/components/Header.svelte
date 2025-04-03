<script lang="ts">
	import { page } from '$app/state';
	import { BookOpen, Menu } from 'lucide-svelte';
	import { Drawer } from 'vaul-svelte';
</script>

{#snippet logo()}
	<div class="flex items-center">
		<a href="/" class="flex items-center gap-2">
			<BookOpen class="text-walnut-light h-6 w-6" />
			<span class="text-walnut-light text-xl font-bold">Vigis</span>
		</a>
	</div>
{/snippet}

{#snippet navigationButtons()}
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
{/snippet}

{#snippet authButtons()}
	<a class="text-walnut-light rounded-md px-2 py-1" href="/login"> Войти </a>
	<a
		class="bg-walnut-light text-walnut-dark hover:bg-walnut-accent
		rounded-md px-2 py-1 transition-colors"
		href="/register"
	>
		Регистрация
	</a>
{/snippet}

<header class="bg-walnut-dark sticky top-0 z-10 h-16 border-b px-4 md:px-6">
	<div class="hidden h-full grid-cols-[1fr_max-content_1fr] items-center justify-between md:grid">
		{@render logo()}
		<nav class="flex grow flex-row items-center justify-center gap-6 text-sm">
			{@render navigationButtons()}
		</nav>
		<div class="flex grow items-center justify-end gap-6">
			{@render authButtons()}
		</div>
	</div>
	<div class="flex h-full justify-between md:hidden">
		{@render logo()}
		<Drawer.Root direction="right">
			<Drawer.Trigger class="self-center md:hidden" aria-label="Меню">
				<Menu class="text-walnut-light size-6" />
			</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Content class="fixed top-0 right-0 bottom-0 z-50 flex outline-none">
					<div
						class="bg-walnut-muted my-1 mr-1 flex w-[240px] max-w-[450px]
						grow flex-col items-end justify-between rounded-md pt-3 pr-3 pb-4"
					>
						<div class="flex flex-col items-end gap-3">
							{@render navigationButtons()}
						</div>
						<div class="flex flex-col gap-3">
							{@render authButtons()}
						</div>
					</div>
				</Drawer.Content>
				<Drawer.Overlay class="fixed inset-0 z-10 bg-black/40" />
			</Drawer.Portal>
		</Drawer.Root>
	</div>
</header>
