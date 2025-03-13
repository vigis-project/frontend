<script lang="ts">
	import ProfileInfo from '$lib/components/ProfileInfo.svelte';
	import type { User } from '$lib/server/types';

	const { children } = $props();
	const pages = ['offers', 'overview', 'reviews', 'wishlist'];

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

<div></div>
<div class="bg-gray-333 flex flex-row font-bold">
	<div class="flex flex-col gap-2 bg-yellow-300 px-3">
		<ProfileInfo user={testUser} />
		{#each pages as page}
			<a href={page} class="block p-4 hover:text-blue-700 hover:underline">{page}</a>
		{/each}
	</div>
	<div class="grow bg-red-300">
		{@render children()}
	</div>
</div>
