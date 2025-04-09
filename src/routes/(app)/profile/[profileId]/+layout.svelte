<script lang="ts">
	import { page } from '$app/state';
	import type { User } from '$lib/server/types';
	import { crossfade } from 'svelte/transition';

	const { data, children } = $props();
	let isAuthorized = $derived(!!data.userData && data.user.id == data.userData.id);

	const rawPages = $derived([
		{ href: '', text: 'Профиль' },
		{ href: 'proposals', text: 'Хочу обменять' },
		{ href: 'wishlist', text: 'Хочу получить' },
		isAuthorized ? { href: 'exchanges', text: 'Обмены' } : undefined,
		{ href: 'reviews', text: 'Отзывы' }
	]);

	const pages = $derived(rawPages.filter((page) => !!page));

	const [send, receive] = crossfade({ duration: 150 });

	const avatar = '/avatar.jpg';
	const rating = 4.8;
</script>

<main class="flex min-h-[900px] w-full grow flex-col">
	<div class="border-walnut-muted border-b">
		<div class="mx-auto mt-6 mb-4 flex w-full max-w-[1280px]">
			<div
				class="flex max-w-[30%] grow-0 basis-[30%] flex-col items-center justify-center p-3"
			>
				<div
					class="flex size-[6rem] items-center justify-center overflow-hidden sm:size-[7.25rem] lg:size-[8.5rem] xl:size-[9.75rem]"
				>
					<img class="size-full rounded-full object-cover" src={avatar} alt="Avatar" />
				</div>
			</div>
			<div
				class="text-walnut-muted flex max-w-[30%] grow-0 basis-[30%] flex-col items-start justify-center"
			>
				<h1 class="text-4xl font-semibold">{data.user.username}</h1>
				<p class="text-xl">{data.user.lastName} {data.user.firstName}</p>
				<h3>{rating} ⭐️</h3>
			</div>
		</div>
	</div>
	<div class="mx-auto mb-4 flex h-full w-full max-w-[1280px] grow flex-col">
		<nav class="flex">
			<ul
				class="bg-walnut-dark relative flex w-full flex-row gap-2 self-start overflow-auto overflow-y-hidden px-2 py-2 [scrollbar-width:none]"
			>
				{#each pages as { href, text }}
					{@const normalizedHref = `/profile/${data.user.id}${href ? `/${href}` : ''}`}
					{@const isCurrentUrl = page.url.href.endsWith(normalizedHref)}
					<li>
						<a
							href={normalizedHref}
							data-current={isCurrentUrl ? '' : undefined}
							class="data-[current]:text-walnut-light hover:text-walnut-accent relative
							w-full px-2 py-1 text-sm font-[510] tracking-tight text-nowrap text-white uppercase
							transition-colors select-none"
						>
							{text}
							{#if isCurrentUrl}
								<div
									in:send={{ key: 'tabs' }}
									out:receive={{ key: 'tabs' }}
									class="bg-walnut-light absolute bottom-0 left-[5%] h-0.5 w-[90%]"
								></div>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<section class="mt-2 w-full grow">
			{@render children()}
		</section>
	</div>
</main>
