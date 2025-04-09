<script lang="ts">
	import type { ExchangeCard } from '$lib/server/types';
	import * as Tabs from '$components/components-ui/Tabs';
	import ExchangeList from './ExchangeList.svelte';

	type Exchange = {
		id: number;
		status: 'pending' | 'confirmed' | 'in-transit' | 'completed' | 'cancelled';
		date: string;
		receivingBook: {
			title: string;
			author: string;
			coverImage: string;
		};
		givingBook: {
			title: string;
			author: string;
			coverImage: string;
		};
		exchangePartner: {
			name: string;
			rating: number;
		};
	};

	const exchangeOffers: Exchange[] = $state([
		{
			id: 1,
			status: 'in-transit', // pending, confirmed, in-transit, completed, cancelled
			date: '05.04.2023',
			receivingBook: {
				title: 'Война и мир',
				author: 'Лев Толстой',
				coverImage: '/placeholder.svg?height=200&width=150'
			},
			givingBook: {
				title: 'Мастер и Маргарита',
				author: 'Михаил Булгаков',
				coverImage: '/placeholder.svg?height=200&width=150'
			},
			exchangePartner: {
				name: 'Анна К.',
				rating: 4.8
			}
		},
		{
			id: 2,
			status: 'completed',
			date: '28.03.2023',
			receivingBook: {
				title: 'Преступление и наказание',
				author: 'Фёдор Достоевский',
				coverImage: '/placeholder.svg?height=200&width=150'
			},
			givingBook: {
				title: 'Идиот',
				author: 'Фёдор Достоевский',
				coverImage: '/placeholder.svg?height=200&width=150'
			},
			exchangePartner: {
				name: 'Пётр С.',
				rating: 4.5
			}
		},
		{
			id: 3,
			status: 'confirmed',
			date: '10.04.2023',
			receivingBook: {
				title: 'Анна Каренина',
				author: 'Лев Толстой',
				coverImage: '/placeholder.svg?height=200&width=150'
			},
			givingBook: {
				title: 'Евгений Онегин',
				author: 'Александр Пушкин',
				coverImage: '/placeholder.svg?height=200&width=150'
			},
			exchangePartner: {
				name: 'Мария Д.',
				rating: 4.9
			}
		},
		{
			id: 4,
			status: 'cancelled',
			date: '01.04.2023',
			receivingBook: {
				title: 'Тихий Дон',
				author: 'Михаил Шолохов',
				coverImage: '/placeholder.svg?height=200&width=150'
			},
			givingBook: {
				title: 'Собачье сердце',
				author: 'Михаил Булгаков',
				coverImage: '/placeholder.svg?height=200&width=150'
			},
			exchangePartner: {
				name: 'Иван Т.',
				rating: 4.2
			}
		},
		{
			id: 5,
			status: 'pending',
			date: '12.04.2023',
			receivingBook: {
				title: 'Братья Карамазовы',
				author: 'Фёдор Достоевский',
				coverImage: '/placeholder.svg?height=200&width=150'
			},
			givingBook: {
				title: 'Отцы и дети',
				author: 'Иван Тургенев',
				coverImage: '/placeholder.svg?height=200&width=150'
			},
			exchangePartner: {
				name: 'Алексей Н.',
				rating: 4.7
			}
		}
	]);

	let activeTab = $state('all');

	const filteredExchanges = $derived(
		exchangeOffers.filter((exchange) => {
			if (activeTab === 'all') return true;
			if (activeTab === 'completed') return exchange.status === 'completed';
			if (activeTab === 'active')
				return ['pending', 'confirmed', 'in-transit'].includes(exchange.status);
			if (activeTab === 'cancelled') return exchange.status === 'cancelled';
			return true;
		})
	);
</script>

<div class="container mx-auto px-4 pb-8">
	<Tabs.Root bind:value={activeTab} class="w-full">
		<Tabs.List class="bg-walnut-muted mb-8 grid w-full grid-cols-4 md:gap-3">
			<Tabs.Trigger class="hover:bg-walnut-dark/80 cursor-pointer" value="all"
				>Все</Tabs.Trigger
			>
			<Tabs.Trigger class="hover:bg-walnut-dark/80 cursor-pointer" value="active"
				>Активные</Tabs.Trigger
			>
			<Tabs.Trigger class="hover:bg-walnut-dark/80 cursor-pointer" value="completed"
				>Завершённые</Tabs.Trigger
			>
			<Tabs.Trigger class="hover:bg-walnut-dark/80 cursor-pointer" value="cancelled"
				>Отменённые</Tabs.Trigger
			>
		</Tabs.List>
		<ExchangeList exchanges={filteredExchanges} />
	</Tabs.Root>
</div>

<!-- <ActiveExchange ExchangeCard={exampleExchangeCard} /> -->
