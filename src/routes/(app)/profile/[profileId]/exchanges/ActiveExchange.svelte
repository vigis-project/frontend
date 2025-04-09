<script lang="ts">
	let { ExchangeCard } = $props();

	let isConfirmed = $state(false);
	let requestConfirmed = $state(false);
	let ONumber = $state();

	function Confirm() {
		isConfirmed = true;
	}
</script>

<div>
	<div
		class="bg-walnut-dark flex h-95 w-full flex-row items-center justify-center rounded-md p-2"
	>
		<div class="flex h-70 w-60 flex-col items-center justify-center">
			<h1 class="text-walnut-accent">Отдаю</h1>
			<h1>{ExchangeCard.exchange.bookOffer.author}</h1>
			<h1>{ExchangeCard.exchange.bookOffer.title}</h1>
			<h1>{ExchangeCard.exchange.bookOffer.data}</h1>
			<h1>{ExchangeCard.OfferStatus}</h1>
		</div>
		<div class="justify-top mr-4 ml-4 flex h-80 w-60 flex-col items-center">
			<div class="bg-walnut-accent mb-5 h-65 w-0.5"></div>
			{#if isConfirmed == false}
				<button
					onclick={Confirm}
					class="bg-walnut-accent text-walnut-dark rounded-xs p-1 font-semibold"
					>Подтвердить обмен</button
				>
			{:else}
				<h1 class="font-medium transition-colors">{ExchangeCard.OfferStatus}</h1>
			{/if}
		</div>
		<div class="flex h-70 w-60 flex-col items-center justify-center">
			<h1 class="text-walnut-accent">Получаю</h1>
			<h1>{ExchangeCard.exchange.bookRequest.author}</h1>
			<h1>{ExchangeCard.exchange.bookRequest.title}</h1>
			<h1>{ExchangeCard.exchange.bookRequest.data}</h1>
			<h1>{ExchangeCard.RequestStatus}</h1>
		</div>
	</div>

	{#if isConfirmed == true}
		<div class="mt-3 flex flex-row">
			<div
				class="bg-walnut-dark mr-4 flex w-full flex-col items-center justify-center rounded-md"
			>
				<h1 class="text-walnut-accent mt-2">Номер отправления</h1>
				{#if requestConfirmed == false}
					<input
						class="bg-walnut-accent text-walnut-dark mt-2 rounded-sm"
						type="number"
						bind:value={ONumber}
					/>
				{:else}
					<h1 class="font-medium transition-colors">{ExchangeCard.offerNumber}</h1>
				{/if}
				<button class="bg-walnut-accent text-walnut-dark mt-2 rounded-xs p-1 font-semibold"
					>Отправил</button
				>
			</div>
			<div
				class="bg-walnut-dark ml-3 flex w-full flex-col items-center justify-center rounded-md p-2"
			>
				<h1 class="text-walnut-accent mt-2">Номер отправления</h1>
				<h1 class="mt-2">{ExchangeCard.requestNumber}</h1>
				<button class="bg-walnut-accent text-walnut-dark mt-2 rounded-xs p-1 font-semibold"
					>Получил</button
				>
			</div>
		</div>
	{/if}
</div>
