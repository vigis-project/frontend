<script lang="ts">
	import ProfileInfo from '$lib/components/ProfileInfo.svelte';
	import type { User } from '$lib/server/types';

	const { children } = $props();
	const pages = [
		{ href: 'overview', text: 'Главная' },
		{ href: 'offers', text: 'Мои обмены' },
		{ href: 'reviews', text: 'Мои обзоры' },
		{ href: 'wishlist', text: 'Список желаемого' }
	];

	const testUser: User = {
		id: 1,
		email: 'example@mail.com',
		username: 'test_user',
		firstName: 'Иван',
		lastName: 'Иванов',
		secondName: 'Иванович',
		avatar: '',
		rating: 4.8
	};
</script>

<div class="bg-gray-333 flex grow flex-row font-bold">
	<div class="bg-walnut-muted flex flex-col gap-2 px-3 pt-6">
		<ProfileInfo user={testUser} />
		<nav class="border-walnut-light border-t">
			<ul>
				{#each pages as { href, text }}
					<li class="mt-3">
						<a
							{href}
							class="block px-2 py-1 text-sm hover:text-blue-700 hover:underline"
						>
							{text}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	<div class="ml-6 grow border bg-green-900">
		{@render children()}
	</div>
</div>
