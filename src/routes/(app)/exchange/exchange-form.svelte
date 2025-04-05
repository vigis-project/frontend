<script lang="ts">
	import * as Card from '$lib/components/components-ui/Card';
	import * as Tabs from '$lib/components/components-ui/Tabs';
	import ExchangeTab from './exchange-tab.svelte';
	import ReceiveTab from './receive-tab.svelte';
	import DeliveryTab from './delivery-tab.svelte';

	type Tab = 'exchange' | 'receive' | 'delivery';

	let title = $state('');
	let firstName = $state('');
	let lastName = $state('');
	let isbn = $state('');
	let year = $state<number>();
	let city = $state('');
	let street = $state('');
	let currentTab = $state<Tab>('exchange');
	let household = $state('');
	let flat = $state('');
	let index = $state('');
	let building = $state('');
	let SurName = $state('');

	function goTo(tab: Tab) {
		currentTab = tab;
	}
</script>

<Card.Root class="mx-auto w-full max-w-6xl text-white">
	<Tabs.Root bind:value={currentTab} class="w-full">
		<Tabs.List class="grid w-full grid-cols-3 rounded-t-md">
			<Tabs.Trigger value="exchange" class="rounded-none" >
				Хочу обменять
			</Tabs.Trigger>
			<Tabs.Trigger value="receive" class="rounded-none" >Хочу получить</Tabs.Trigger>
			<Tabs.Trigger value="delivery" class="rounded-none" >
				Адрес доставки
			</Tabs.Trigger>
		</Tabs.List>
		<Card.Content>
			<Tabs.Content value="exchange">
				<ExchangeTab
				onNextTab={() => goTo('receive')}
				bind:isbn
				bind:year
				bind:title
				bind:lastName
				bind:firstName
				/>
			</Tabs.Content>
			<Tabs.Content value="receive">
				<ReceiveTab
					onNextTab={() => goTo('delivery')}
					onPrevTab={() => goTo('exchange')}
					bind:title
				/>
			</Tabs.Content>
			<Tabs.Content value="delivery">
				<DeliveryTab
					onPrevTab={() => goTo('receive')}
					bind:city
					bind:street
					bind:household
					bind:index
					bind:building
					bind:flat
					bind:firstName
					bind:lastName
					bind:SurName
				/>
			</Tabs.Content>
		</Card.Content>
	</Tabs.Root>
</Card.Root>

