<script lang="ts">
	import Input from '../Input.svelte';
	import Label from '$components/Label.svelte';
	import * as Tabs from '$components/components-ui/Tabs';
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';
	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	import { page } from '$app/state';

	let { form } = $props();

	let tab = $state('part-one');
	let loading = $state(false);
</script>

<form
	class="border-walnut-accent bg-walnut-muted/80 flex size-full flex-col rounded-md border p-3 shadow-md shadow-neutral-900/30"
	method="POST"
	use:enhance={() => {
		loading = true;

		return async ({ result }) => {
			loading = false;

			if (result.type === 'success' && result.data) {
				goto('/profile', { invalidateAll: true });
			} else await applyAction(result);
		};
	}}
>
	<h1 class="text-center text-2xl font-semibold">Регистрация</h1>
	<Tabs.Root value={tab} tabindex={-1}>
		<Tabs.Content value="part-one" tabindex={-1}>
			<div class="flex grow flex-col justify-center gap-1 p-6">
				<span class="flex flex-col gap-2">
					<Label for="username">Никнейм</Label>
					<Input
						class="bg-walnut-muted/80 focus:bg-walnut-dark/80"
						id="username"
						name="username"
						type="text"
						autocomplete="username"
					/>
				</span>
				<span class="flex flex-col gap-2">
					<Label for="email">Почта</Label>
					<Input
						class="bg-walnut-muted/80 focus:bg-walnut-dark/80"
						id="email"
						name="email"
						type="email"
						autocomplete="email"
					/>
				</span>
				<span class="flex flex-col gap-2">
					<Label for="password">Пароль</Label>
					<Input
						class="bg-walnut-muted/80 focus:bg-walnut-dark/80"
						id="password"
						name="password"
						type="password"
						autocomplete="new-password"
					/>
				</span>
			</div>
			<div class="flex w-full flex-col items-center justify-center gap-3">
				<div class="flex w-full items-center px-6 py-3">
					<button
						class="focus-visible:ring-ring inline-flex h-9
						w-full items-center justify-center gap-2 rounded-md bg-white px-4
						py-2 text-sm font-medium whitespace-nowrap text-black shadow transition-colors
						hover:bg-white/90 focus-visible:ring-1 focus-visible:outline-none
						disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none
						[&_svg]:size-4 [&_svg]:shrink-0"
						type="button"
						onclick={() => (tab = 'part-two')}
					>
						Далее
						<ArrowRight class="size-4" />
					</button>
				</div>
				<p class="text-center">Есть аккаунт?</p>
				<a class="text-center" href="/login">Войти</a>
			</div>
		</Tabs.Content>
		<Tabs.Content value="part-two" tabindex={-1}>
			<div class="flex grow flex-col justify-center gap-1 p-6">
				<span class="flex flex-col gap-2">
					<Label for="firstName">Имя</Label>
					<Input
						class="bg-walnut-muted/80 focus:bg-walnut-dark/80"
						id="firstName"
						name="firstName"
						type="text"
						autocomplete="name"
					/>
				</span>
				<span class="flex flex-col gap-2">
					<Label for="lastName">Фамилия</Label>
					<Input
						class="bg-walnut-muted/80 focus:bg-walnut-dark/80"
						id="lastName"
						name="lastName"
						type="text"
						autocomplete="family-name"
					/>
				</span>
				<span class="flex flex-col gap-2">
					<Label for="secondName">Отчество</Label>
					<Input
						class="bg-walnut-muted/80 focus:bg-walnut-dark/80"
						id="secondName"
						name="secondName"
						type="text"
						autocomplete="additional-name"
					/>
				</span>
			</div>
			<div class="flex w-full flex-col items-center justify-center gap-3">
				<div class="relative flex w-full items-center gap-3 px-6 py-3">
					{#if !loading && form?.message}
						<p
							class="absolute -top-5 left-0 w-full text-center text-red-500"
							transition:fly={{ duration: 150, y: 5, opacity: 0.7 }}
						>
							{form.message}
						</p>
					{/if}
					<button
						class="focus-visible:ring-ring inline-flex h-9
						w-full items-center justify-center gap-2 rounded-md bg-white px-4
						py-2 text-sm font-medium whitespace-nowrap text-black shadow transition-colors
						hover:bg-white/90 focus-visible:ring-1 focus-visible:outline-none
						disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none
						[&_svg]:size-4 [&_svg]:shrink-0"
						type="button"
						title="Вернуться назад"
						onclick={() => (tab = 'part-one')}
					>
						<ArrowLeft class="size-4" />
					</button>
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
						Зарегистрироваться
					</button>
				</div>
				<p class="text-center">Есть аккаунт?</p>
				<a class="text-walnut-accent hover:text-walnut-light text-center" href="/login">
					Войти
				</a>
			</div>
		</Tabs.Content>
	</Tabs.Root>
</form>
