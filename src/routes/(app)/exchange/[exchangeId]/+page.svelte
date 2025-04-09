<script lang="ts">
	import { page } from '$app/state';
	import * as Card from '$components/components-ui/Card';
	import { ArrowLeftRight, CheckCircle2, Clock, Package, Send, Truck } from 'lucide-svelte';
	import cover from '$lib/images/cover.jpg';
	import { AlertDialog, Dialog } from 'bits-ui';
	import Input from '$components/Input.svelte';

	const exchangeId = Number(page.params['exchangeId']);

	const statusMap = {
		pending: { label: 'Ожидает подтверждения', color: 'bg-yellow-500' },
		confirmed: { label: 'Подтверждено', color: 'bg-blue-500' },
		'in-transit': { label: 'В пути', color: 'bg-purple-500' },
		completed: { label: 'Завершено', color: 'bg-green-500' },
		cancelled: { label: 'Отменено', color: 'bg-red-500' }
	};

	const exchangeData = {
		id: exchangeId,
		receivingBook: {
			bookName: 'Мастер и Маргарита',
			author: 'Михаил Булгаков',
			note: '',
			// data: '1967',
			id: 1
		},
		givingBook: {
			bookName: 'Война и мир',
			author: 'Лев Толстой',
			note: '',
			// data: '1869',
			id: 2
		},
		givingUser: {
			id: 1,
			email: 'offer@example.com',
			username: 'offer_user',
			firstName: 'Иван',
			lastName: 'Иванов',
			secondName: 'Иванович',
			roles: []
			// avatar: '/path/to/avatar.jpg',
			// rating: 4.8,
			// city: 'Москва'
		},
		receivingUser: {
			id: 2,
			email: 'request@example.com',
			username: 'request_user',
			firstName: 'Мария',
			lastName: 'Петрова',
			secondName: 'Сергеевна',
			roles: []
		},
		status: 'in-transit',
		trackingCode: 'TRK-9876543210',
		dates: {
			created: '2025-04-01',
			confirmed: '2025-04-03',
			shipped: '2025-04-05',
			estimated: '2025-04-12'
		}
	};

	const currentStatus = statusMap[exchangeData.status as keyof typeof statusMap];

	let isShippingConfirmOpen = $state(false);
	let isReceivingConfirmOpen = $state(false);
</script>

<main class="bg-walnut-accent my-auto flex min-h-[800px] items-center justify-center">
	<div class="mx-auto w-full max-w-[1280px] px-4 py-8">
		<h1 class="mb-6 text-2xl font-bold">Детали обмена #{exchangeId}</h1>
		<Card.Root class="bg-walnut-muted mb-8 shadow-md shadow-black">
			<Card.Header class="pb-2">
				<div class="flex items-center justify-between">
					<Card.Title>Статус обмена</Card.Title>
					<span
						class="inline-flex items-center rounded-full px-2.5
                        py-0.5 text-xs font-semibold transition-all select-none
                        focus:outline-none {currentStatus.color} text-center
                        text-white hover:opacity-80">{currentStatus.label}</span
					>
				</div>
			</Card.Header>
			<Card.Content>
				<div class="flex flex-col justify-between gap-4 md:flex-row">
					<div class="flex items-center gap-2">
						<Clock class="text-muted-foreground h-5 w-5" />
						<div>
							<p class="text-muted-foreground text-sm">Создано</p>
							<p class="font-medium">{exchangeData.dates.created}</p>
						</div>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle2 class="text-muted-foreground h-5 w-5" />
						<div>
							<p class="text-muted-foreground text-sm">Подтверждено</p>
							<p class="font-medium">{exchangeData.dates.confirmed || '—'}</p>
						</div>
					</div>
					<div class="flex items-center gap-2">
						<Send class="text-muted-foreground h-5 w-5" />
						<div>
							<p class="text-muted-foreground text-sm">Отправлено</p>
							<p class="font-medium">{exchangeData.dates.shipped || '—'}</p>
						</div>
					</div>
					<div class="flex items-center gap-2">
						<Package class="text-muted-foreground h-5 w-5" />
						<div>
							<p class="text-muted-foreground text-sm">Ожидаемая доставка</p>
							<p class="font-medium">{exchangeData.dates.estimated || '—'}</p>
						</div>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
		<div class="mb-8 grid gap-8 md:grid-cols-2">
			<Card.Root class="bg-walnut-muted shadow-md shadow-black">
				<Card.Header>
					<Card.Title>Книга, которую вы получаете</Card.Title>
					<Card.Description
						>От пользователя {exchangeData.receivingUser.username}</Card.Description
					>
				</Card.Header>
				<Card.Content>
					<div class="flex gap-4">
						<img
							src={cover}
							alt={exchangeData.receivingBook.bookName}
							width="100"
							height="150"
							class="rounded-md object-cover"
						/>
						<div>
							<h3 class="text-lg font-bold">
								{exchangeData.receivingBook.bookName}
							</h3>
							<p class="text-muted-foreground">
								{exchangeData.receivingBook.author}
							</p>
							<p class="mt-2">
								<span class="text-muted-foreground text-sm">Состояние: </span>
								<!-- <span>{exchangeData.receivingBook.condition}</span> -->
								<span>Отличное</span>
							</p>
						</div>
					</div>
				</Card.Content>
				<Card.Footer>
					<Dialog.Root>
						<Dialog.Trigger
							class="bg-walnut-accent w-full cursor-pointer rounded-sm px-3 py-2 
							text-black disabled:cursor-auto disabled:opacity-80"
							disabled={exchangeData.status !== 'in-transit'}
						>
							Подтвердить получение
						</Dialog.Trigger>
						<Dialog.Portal>
							<Dialog.Overlay class="fixed inset-0 z-50 bg-black/80" />
							<Dialog.Content
								class="bg-walnut-accent shadow-popover fixed 
								top-[50%] left-[50%] z-50 w-full max-w-[calc(100%-2rem)] translate-x-[-50%] 
								translate-y-[-50%] rounded-lg
								p-5 text-black outline-hidden sm:max-w-[490px] md:w-full"
							>
								<div class="flex flex-col gap-2 text-center sm:text-left">
									<Dialog.Title class="text-lg leading-none font-semibold"
										>Подтверждение получения книги</Dialog.Title
									>
									<Dialog.Description class="text-walnut-muted text-sm">
										Подтвердите, что вы получили книгу "{exchangeData
											.receivingBook.bookName}" в ожидаемом состоянии.
									</Dialog.Description>
								</div>
								<div class="py-4">
									<p class="mb-2 font-medium">Состояние полученной книги</p>
									<div class="mb-4 flex gap-2">
										<button class="rounded-md bg-black px-2.5 py-1.5 text-white"
											>Отличное</button
										>
										<button class="rounded-md bg-black px-2.5 py-1.5 text-white"
											>Хорошее</button
										>
										<button class="rounded-md bg-black px-2.5 py-1.5 text-white"
											>Удовлетворительное</button
										>
										<button class="rounded-md bg-black px-2.5 py-1.5 text-white"
											>Плохое</button
										>
									</div>
								</div>
								<div class="flex w-full items-center justify-end gap-3">
									<Dialog.Close
										class="rounded-md bg-black px-2.5 py-1.5 text-white"
										>Отмена</Dialog.Close
									>
									<Dialog.Close
										class="rounded-md bg-black px-2.5 py-1.5 text-white"
										>Подтвердить</Dialog.Close
									>
								</div>
							</Dialog.Content>
						</Dialog.Portal>
					</Dialog.Root>
				</Card.Footer>
			</Card.Root>
			<Card.Root class="bg-walnut-muted shadow-md shadow-black">
				<Card.Header>
					<Card.Title>Книга, которую вы отдаёте</Card.Title>
					<Card.Description
						>Пользователю {exchangeData.receivingUser.username}</Card.Description
					>
				</Card.Header>
				<Card.Content>
					<div class="flex gap-4">
						<img
							src={cover}
							alt={exchangeData.givingBook.bookName}
							width="100"
							height="150"
							class="rounded-md object-cover"
						/>
						<div>
							<h3 class="text-lg font-bold">
								{exchangeData.givingBook.bookName}
							</h3>
							<p class="text-muted-foreground">
								{exchangeData.givingBook.author}
							</p>
							<p class="mt-2">
								<span class="text-muted-foreground text-sm">Состояние: </span>
								<!-- <span>{exchangeData.givingBook.condition}</span> -->
								<span>Отличное</span>
							</p>
						</div>
					</div>
				</Card.Content>
				<Card.Footer>
					<Dialog.Root>
						<Dialog.Trigger
							class="bg-walnut-accent w-full cursor-pointer rounded-sm px-3 py-2 
							text-black disabled:cursor-auto disabled:opacity-80"
							disabled={exchangeData.status !== 'confirmed'}
						>
							Подтвердить отправку
						</Dialog.Trigger>
						<Dialog.Portal>
							<Dialog.Overlay class="fixed inset-0 z-50 bg-black/80" />
							<Dialog.Content
								class="bg-walnut-accent shadow-popover fixed 
								top-[50%] left-[50%] z-50 w-full max-w-[calc(100%-2rem)] translate-x-[-50%] 
								translate-y-[-50%] rounded-lg
								p-5 text-black outline-hidden sm:max-w-[490px] md:w-full"
							>
								<div class="flex flex-col gap-2 text-center sm:text-left">
									<Dialog.Title class="text-lg leading-none font-semibold"
										>Подтверждение отправки книги</Dialog.Title
									>
									<Dialog.Description class="text-walnut-muted text-sm">
										Подтвердите, что вы отправили книгу "{exchangeData
											.givingBook.bookName}" пользователю
										{exchangeData.receivingUser.username}.
									</Dialog.Description>
								</div>
								<div class="py-4">
									<p class="mb-2 font-medium">Состояние полученной книги</p>
									<div class="mb-4 flex gap-2">
										<button class="rounded-md bg-black px-2.5 py-1.5 text-white"
											>Отличное</button
										>
										<button class="rounded-md bg-black px-2.5 py-1.5 text-white"
											>Хорошее</button
										>
										<button class="rounded-md bg-black px-2.5 py-1.5 text-white"
											>Удовлетворительное</button
										>
										<button class="rounded-md bg-black px-2.5 py-1.5 text-white"
											>Плохое</button
										>
									</div>
								</div>
								<div class="flex w-full items-center justify-end gap-3">
									<Dialog.Close
										class="rounded-md bg-black px-2.5 py-1.5 text-white"
										>Отмена</Dialog.Close
									>
									<Dialog.Close
										class="rounded-md bg-black px-2.5 py-1.5 text-white"
										>Подтвердить</Dialog.Close
									>
								</div>
							</Dialog.Content>
						</Dialog.Portal>
					</Dialog.Root>
				</Card.Footer>
			</Card.Root>
		</div>
		<Card.Root class="bg-walnut-muted mb-8 shadow-md shadow-black">
			<Card.Header>
				<Card.Title class="flex items-center gap-2">
					<Truck class="h-5 w-5" />
					Информация о доставке
				</Card.Title>
			</Card.Header>
			<Card.Content>
				<div class="mb-4">
					<p class="mb-1 text-sm text-white/80">Трекинг-код:</p>
					<div class="flex gap-2">
						<Input
							value={exchangeData.trackingCode}
							readOnly
							class="bg-walnut-dark/40 font-mono"
						/>
						<button
							onclick={() => {
								navigator.clipboard.writeText(exchangeData.trackingCode);
							}}
						>
							Копировать
						</button>
					</div>
				</div>

				<div
					class="border-walnut-accent bg-walnut-dark/60 relative
					w-full rounded-lg border p-4
					[&:has(svg)]:pl-11 [&>svg]:absolute [&>svg]:top-4
					[&>svg]:left-4 [&>svg]:text-white [&>svg+div]:translate-y-[-3px]"
				>
					<h5
						class="mb-1 flex items-center gap-2 leading-none font-medium tracking-tight"
					>
						<ArrowLeftRight class="h-4 w-4" />
						Статус доставки
					</h5>
					<div class="text-sm [&_p]:leading-relaxed">
						Книга в пути. Ожидаемая дата доставки: {exchangeData.dates.estimated}
					</div>
				</div>

				<div class="mt-4">
					<p class="mb-2 text-sm font-medium">История отслеживания:</p>
					<div class="space-y-3">
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-2">
								<div class="h-2 w-2 rounded-full bg-green-500"></div>
								<p>Принято в отделении</p>
							</div>
							<p class="text-sm text-white/80">05.04.2025, 14:32</p>
						</div>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-2">
								<div class="h-2 w-2 rounded-full bg-green-500"></div>
								<p>Отправлено из сортировочного центра</p>
							</div>
							<p class="text-sm text-white/80">06.04.2025, 09:15</p>
						</div>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-2">
								<div class="h-2 w-2 rounded-full bg-green-500"></div>
								<p>В пути</p>
							</div>
							<p class="text-sm text-white/80">07.04.2025, 11:45</p>
						</div>
					</div>
				</div>
			</Card.Content>
			<Card.Footer>
				<button class="bg-walnut-accent w-full rounded-md px-3 py-2 text-black">
					Отследить на сайте перевозчика
				</button>
			</Card.Footer>
		</Card.Root>
	</div>
</main>
