<script lang="ts">
	import Input from '$components/Input.svelte';
	import Label from '$components/Label.svelte';
	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';

	let { form } = $props();

	let loading = $state(false);
</script>

<form
	class="border-walnut-accent bg-walnut-muted flex size-full flex-col rounded-md border p-3 shadow-md shadow-neutral-900/30"
	method="POST"
	use:enhance={() => {
		loading = true;

		return async ({ result }) => {
			loading = false;

			if (result.type === 'success' && result.data) {
				localStorage.setItem('token', result.data!.token! as string);

				goto('/profile', { invalidateAll: true });
			} else await applyAction(result);
		};
	}}
>
	<h1 class="text-center text-2xl font-semibold">Вход</h1>
	<div class="flex grow flex-col justify-center gap-3 p-6">
		<span class="flex flex-col gap-2">
			<Label for="email">Почта</Label>
			<Input id="email" name="email" type="email" autocomplete="email" />
		</span>
		<span class="flex flex-col gap-2">
			<Label for="password">Пароль</Label>
			<Input id="password" name="password" type="password" autocomplete="new-password" />
		</span>
	</div>
	<div class="relative flex w-full flex-col items-center justify-center gap-3 py-3">
		{#if !loading && form?.message}
			<p
				class="absolute -top-5 left-0 w-full text-center text-red-500"
				transition:fly={{ duration: 150, y: 5, opacity: 0.7 }}
			>
				{form.message}
			</p>
		{/if}
		<div class="flex w-full items-center p-6 pt-0">
			<button
				class="focus-visible:ring-ring inline-flex h-9
				w-full items-center justify-center gap-2 rounded-md bg-white px-4
				py-2 text-sm font-medium whitespace-nowrap text-black shadow transition-colors
				hover:bg-white/90 focus-visible:ring-1 focus-visible:outline-none
				disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none
				[&_svg]:size-4 [&_svg]:shrink-0"
				type="submit"
				disabled={loading}
			>
				Вход
			</button>
		</div>
		<p class="text-center">Нет аккаунта?</p>
		<a class="text-center" href="/register">Зарегистрироваться</a>
	</div>
</form>
