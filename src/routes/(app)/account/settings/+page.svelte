<script lang="ts">
	import AvatarSection from './AvatarSection.svelte';
	import DeliveryInfo from './DeliveryInfo.svelte';
	import GenrePreferences from './GenrePreferences.svelte';

	let firstName = $state('');
	let lastName = $state('');
	let city = $state('');
	let street = $state('');
	let household = $state('');
	let flat = $state('');
	let index = $state('');
	let SurName = $state('');
	let Email = $state('');
	let Password = $state('');
	let ConfirmPassword = $state('');
</script>

<main class="bg-walnut-accent my-auto flex h-full items-center justify-center">
	<div class="bg-walnut-muted text-walnut-accent mx-auto w-full max-w-4xl rounded-lg p-6">
		<div class="flex">
			<div class="w-full">
				<div>
					<h1 class="mb-6 text-2xl font-bold">Профиль</h1>
					<AvatarSection
						bind:firstName
						bind:lastName
						bind:SurName
						bind:Password
						bind:ConfirmPassword
						bind:Email
					/>
					<div class="flex justify-center">
						<button
							class="rounded-md border border-blue-400 px-4 py-2 text-sm text-blue-400 hover:text-blue-300"
						>
							Сохранить
						</button>
					</div>
				</div>

				<hr class="my-6 border-gray-700" />

				<div class="mb-8">
					<h2 class="mb-4 text-xl font-semibold">Город</h2>
					<DeliveryInfo bind:city bind:street bind:household bind:index bind:flat />
					<div class="flex justify-center">
						<button
							class="rounded-md border border-blue-400 px-4 py-2 text-sm text-blue-400 hover:text-blue-300"
						>
							Сохранить
						</button>
					</div>
				</div>

				<hr class="my-6 border-gray-700" />

				<div class="flex flex-col items-center">
					<h2 class="mb-4 text-xl font-semibold">Предпочитаемый жанр</h2>
					<GenrePreferences />
				</div>
			</div>
		</div>
	</div>
</main>
