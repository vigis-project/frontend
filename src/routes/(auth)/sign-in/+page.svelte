<script lang="ts">
	import Input from '$components/Input.svelte';
	import Label from '$components/Label.svelte';
	import { fly } from 'svelte/transition';
</script>

<div transition:fly={{ y: -10, duration: 300, delay: 0 }} class="absolute">
	<form class="border-border bg-card flex flex-col rounded-md border p-3 shadow" method="POST">
		<h1 class="text-center text-2xl font-semibold">Вход</h1>
		<div class="flex flex-col gap-3 p-6">
			<span class="flex flex-col gap-2">
				<Label for="email">Почта</Label>
				<Input id="email" name="email" type="email" autocomplete="email" />
			</span>
			<span class="flex flex-col gap-2">
				<Label for="password">Пароль</Label>
				<Input id="password" name="password" type="password" autocomplete="new-password" />
			</span>
		</div>
		<div class="flex items-center p-6 pt-0">
			<button
				class="focus-visible:ring-ring text-primary-foreground hover:bg-primary/90 inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-foreground px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
				type="submit"
			>
				Вход
			</button>
		</div>
		<a class="text-center" href="/sign-up">to register</a>
	</form>
</div>
