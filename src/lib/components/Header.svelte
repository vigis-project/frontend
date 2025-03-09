<script lang="ts">
	import { page } from '$app/state';
</script>

<header class="flex items-center justify-between gap-3 px-6 py-4">
	<section class="logo">
		<h1>Logo</h1>
	</section>
	<nav class="flex gap-3 pl-8">
		<a href="/">
			<button
				class="border-border cursor-pointer rounded-md border bg-foreground px-2 py-1 text-background"
				>Главная</button
			>
		</a>
		{#if page.data.userData}
			<a href="/profile/{page.data.userData.id}/exchange">
				<button
					class="border-border cursor-pointer rounded-md border bg-foreground px-2 py-1 text-background"
					>Начать обмен</button
				>
			</a>
			<a href="/profile/{page.data.userData.id}/exchanges">
				<button
					class="border-border cursor-pointer rounded-md border bg-foreground px-2 py-1 text-background"
					>Мои обмены</button
				>
			</a>
		{/if}
		<a href="#">
			<button
				class="border-border cursor-pointer rounded-md border bg-foreground px-2 py-1 text-background"
				>Задать вопрос</button
			>
		</a>
	</nav>
	<div class="flex-1"></div>
	{#if page.data.userData}
		<img src={page.data.userData.avatar} alt="Avatar" class="mb-4 w-1/2 rounded-full" />
	{:else}
		<section class="flex gap-4">
			<a href="/login">Авторизация</a>
			<a href="/register">Регистрация</a>
		</section>
	{/if}
</header>
