<script lang="ts">
	import * as Card from '$components/components-ui/Card';
	import cover from '$lib/images/cover.jpg';
	import { ArrowLeftRight, CheckCircle, Clock, XCircle } from 'lucide-svelte';

	type Props = {
		exchanges: {
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
		}[];
	};

	const statusMap = {
		pending: { label: 'Ожидает подтверждения', color: 'bg-yellow-500', icon: Clock },
		confirmed: { label: 'Подтверждено', color: 'bg-blue-500', icon: ArrowLeftRight },
		'in-transit': { label: 'В пути', color: 'bg-purple-500', icon: ArrowLeftRight },
		completed: { label: 'Завершено', color: 'bg-green-500', icon: CheckCircle },
		cancelled: { label: 'Отменено', color: 'bg-red-500', icon: XCircle }
	};

	let { exchanges }: Props = $props();
</script>

{#if exchanges.length === 0}
	<div class="py-12 text-center">
		<p class="text-white/80">Нет обменов в этой категории</p>
	</div>
{:else}
	<div class="space-y-4">
		{#each exchanges as exchange}
			{@const currentStatus = statusMap[exchange.status]}
			{@const Icon = currentStatus.icon}
			<a href="/exchange/{exchange.id}" class="bg-walnut-muted block rounded-sm">
				<Card.Root class="hover:bg-walnut-dark/80 transition-colors">
					<Card.Content
						class="flex flex-col justify-between gap-2 p-4 md:flex-row lg:grid lg:grid-cols-[1fr_52px_1fr_170px]"
					>
						<div class="flex items-center gap-4">
							<div class="hidden flex-shrink-0 md:block">
								<div class="relative h-16 w-12">
									<img
										src={cover}
										alt={exchange.givingBook.title}
										class="rounded-sm object-cover"
									/>
								</div>
							</div>

							<div class="flex-1">
								<div class="mb-1 flex items-center gap-2">
									<span class="text-muted-foreground text-sm">Вы отдаёте:</span>
									<span class="truncate font-medium"
										>{exchange.givingBook.title}</span
									>
								</div>
								<div class="text-muted-foreground mb-2 text-xs">
									{exchange.givingBook.author}
								</div>

								<div class="mt-2 flex items-center gap-2 md:hidden">
									<span
										class="inline-flex items-center rounded-full px-2.5
                                            py-0.5 text-xs font-semibold transition-all select-none
                                            focus:outline-none {currentStatus.color} text-center
                                            text-white hover:opacity-80">{currentStatus.label}</span
									>
									<span class="text-muted-foreground text-xs"
										>{exchange.date}</span
									>
								</div>
							</div>
						</div>

						<div class="hidden items-center md:flex">
							<Icon class="text-muted-foreground mx-4 h-5 w-5" />
						</div>

						<div class="flex items-center gap-4">
							<div class="flex-1">
								<div class="mb-1 flex items-center gap-2">
									<span class="text-muted-foreground text-sm">Вы получаете:</span>
									<span class="truncate font-medium"
										>{exchange.receivingBook.title}</span
									>
								</div>
								<div class="text-muted-foreground mb-2 text-xs">
									{exchange.receivingBook.author}
								</div>

								<div class="flex items-center gap-2">
									<span class="text-muted-foreground text-xs"
										>От: {exchange.exchangePartner.name}</span
									>
									<span class="text-xs text-yellow-500">★</span>
									<span class="text-xs">{exchange.exchangePartner.rating}</span>
								</div>
							</div>

							<div class="hidden flex-shrink-0 md:block">
								<div class="relative h-16 w-12">
									<img
										src={cover}
										alt={exchange.receivingBook.title}
										class="rounded-sm object-cover"
									/>
								</div>
							</div>
						</div>

						<div class="hidden flex-col items-end justify-between md:flex">
							<span
								class="inline-flex items-center rounded-full px-2.5
                                    py-0.5 text-xs font-semibold transition-all select-none
                                    focus:outline-none {currentStatus.color} text-center
                                    text-white hover:opacity-80">{currentStatus.label}</span
							>
							<span class="text-muted-foreground text-xs">{exchange.date}</span>
						</div>
					</Card.Content>
				</Card.Root>
			</a>
		{/each}
	</div>
{/if}
