<script lang="ts">
	import * as Card from "$lib/components/components-ui/Card";
	import * as Tabs  from "$lib/components/components-ui/Tabs";
	import ExchangeTab from "./exchange-tab.svelte";

	// import ReceiveTab from "./receive-tab.svelte";
	// import DeliveryTab from "./delivery-tab.svelte";

	// Exchange form state
	let currentTab = $state("exchange");
</script>

<Card.Root class="w-full max-w-6xl mx-auto">
	<Tabs.Root bind:value={currentTab} class="w-full">
		<Tabs.List class="w-full grid grid-cols-3 rounded-none">
			<Tabs.Trigger value="exchange" class="rounded-none">Хочу обменять</Tabs.Trigger>
			<Tabs.Trigger value="receive" class="rounded-none">Хочу получить</Tabs.Trigger>
			<Tabs.Trigger value="delivery" class="rounded-none">Адрес доставки </Tabs.Trigger>
		</Tabs.List>
		<Card.Content>
			<Tabs.Content value="exchange" class="mt-6">
				<ExchangeTab />
			</Tabs.Content>
			<Tabs.Content value="receive" class="mt-6">
				<!-- <ReceiveTab /> -->
			</Tabs.Content>
			<Tabs.Content value="delivery" class="mt-6">
				<!-- <DeliveryTab /> -->
			</Tabs.Content>
		</Card.Content>
	</Tabs.Root>
</Card.Root>
