<script lang="ts">
	import * as Card from "$lib/components/components-ui/Card";
	import * as Tabs  from "$lib/components/components-ui/Tabs";
	import ExchangeTab from "./exchange-tab.svelte";
	import ReceiveTab from "./receive-tab.svelte";
	import DeliveryTab from "./delivery-tab.svelte";
	
	let title = $state("");
	let firstName = $state("");
	let lastName = $state("")
	let isbn = $state("")
	let year = $state<number>();
	let city = $state("");
	let street = $state("");
	let currentTab = $state("exchange");
	let household = $state("");
	let flat = $state("");
	let index = $state("");
	let building = $state("");
	let SurName = $state("");

	function goToReceive() {
		currentTab = "receive"; 
	}
	
	function goToExchange() {
		currentTab = "exchange"; 
	}

	function goToDelivery() {
		currentTab = "delivery"; 
	}
</script>

<Card.Root class="w-full max-w-6xl mx-auto">
	<Tabs.Root bind:value={currentTab} class="w-full">
		<Tabs.List class="w-full grid grid-cols-3 rounded-none">
			<Tabs.Trigger value="exchange" class="rounded-none" disabled>Хочу обменять</Tabs.Trigger>
			<Tabs.Trigger value="receive" class="rounded-none" disabled>Хочу получить</Tabs.Trigger>
			<Tabs.Trigger value="delivery" class="rounded-none" disabled>Адрес доставки </Tabs.Trigger>
		</Tabs.List>
		<Card.Content>
			<Tabs.Content value="exchange" >
				<ExchangeTab next={goToReceive} bind:title bind:firstName bind:isbn bind:lastName bind:year />
			</Tabs.Content>
			<Tabs.Content value="receive" >
				<ReceiveTab next={goToDelivery} prev={goToExchange} bind:title />
			</Tabs.Content>
			<Tabs.Content value="delivery" >
				<DeliveryTab prev={goToReceive} bind:city bind:street bind:household bind:index bind:building bind:flat bind:firstName bind:lastName bind:SurName/>
			 </Tabs.Content>
		</Card.Content>
	</Tabs.Root>
</Card.Root>
