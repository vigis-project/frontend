<script lang="ts">
	import { Switch, DatePicker } from 'bits-ui';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { CalendarBlank } from 'phosphor-svelte';

	type Props = {
		value: any;
		columnName: string;
		readOnly?: boolean;
	};

	let { value = $bindable(), columnName, readOnly = false }: Props = $props();

	const valueType = typeof value;
</script>

{#if valueType === 'string'}
	<textarea
		id={columnName}
		name={columnName}
		aria-label={columnName}
		class="border-walnut-muted bg-walnut-muted/80
		focus:bg-walnut-dark/80 rounded-md border px-3 py-1.5"
		bind:value
		disabled={readOnly}
	>
		{value}
	</textarea>
{:else if valueType === 'number'}
	<input
		class="bg-walnut-muted/80 border-walnut-muted
		focus:bg-walnut-dark/80 rounded-md border px-3
		py-1.5"
		bind:value
		type="number"
		disabled={readOnly}
	/>
{:else if valueType === 'boolean'}
	<Switch.Root
		id={columnName}
		name={columnName}
		bind:checked={value}
		class="focus-visible:ring-foreground focus-visible:ring-offset-background 
		data-[state=checked]:bg-walnut-dark/80 data-[state=unchecked]:bg-walnut-muted/80
		peer inline-flex h-[32px] min-h-[32px] w-[56px] shrink-0 cursor-pointer 
		items-center rounded-full px-[3px] transition-colors focus-visible:ring-2 
		focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed 
		disabled:opacity-50"
		disabled={readOnly}
	>
		<Switch.Thumb
			class="bg-walnut-accent data-[state=unchecked]:shadow-mini dark:border-background/30 
			dark:shadow-popover pointer-events-none block size-[26px] 
			shrink-0 rounded-full transition-transform data-[state=checked]:translate-x-6 
			data-[state=unchecked]:translate-x-0 dark:border dark:data-[state=unchecked]:border"
		/>
	</Switch.Root>
{:else}
	<!-- Date -->
	<DatePicker.Root
		bind:value
		weekdayFormat="short"
		locale="ru"
		fixedWeeks={true}
		disabled={readOnly}
	>
		<div class="flex w-full max-w-[232px] flex-col gap-1.5">
			<DatePicker.Input
				name={columnName}
				class="border-walnut-muted bg-walnut-muted/80 flex 
				w-full max-w-[232px] items-center rounded-md border 
				px-2 py-3 text-sm tracking-[0.01em] 
				text-white select-none focus-within:shadow-md"
			>
				{#snippet children({ segments })}
					{#each segments as { part, value }}
						<div class="inline-block select-none">
							{#if part === 'literal'}
								<DatePicker.Segment {part} class="text-walnut-accent/80 p-1">
									/
								</DatePicker.Segment>
							{:else}
								<DatePicker.Segment
									{part}
									class="rounded-5px hover:bg-walnut-dark/80 focus:bg-walnut-dark 
									text-walnut-accent aria-[valuetext=Empty]:text-walnut-accent/80 px-1
									py-1 focus:text-white focus-visible:ring-0! focus-visible:ring-offset-0!"
								>
									{value}
								</DatePicker.Segment>
							{/if}
						</div>
					{/each}
					<DatePicker.Trigger
						class="text-walnut-accent/60 hover:bg-walnut-accent/10 
						active:bg-walnut-accent/30 ml-auto inline-flex size-8 
						items-center justify-center rounded-md transition-all"
					>
						<CalendarBlank class="size-6" />
					</DatePicker.Trigger>
				{/snippet}
			</DatePicker.Input>
			<DatePicker.Content sideOffset={6} class="z-50">
				<DatePicker.Calendar
					class="border-walnut-dark/80 bg-walnut-light text-walnut-muted
					rounded-md border p-[22px] shadow shadow-black/30"
				>
					{#snippet children({ months, weekdays })}
						<DatePicker.Header class="flex items-center justify-between">
							<DatePicker.PrevButton
								class="bg-walnut-muted/80 hover:bg-walnut-dark/80 hover:text-walnut-accent 
								text-walnut-accent/80 inline-flex size-10 items-center justify-center
								rounded-lg transition-all active:scale-[0.98]"
							>
								<ChevronLeft class="size-6" />
							</DatePicker.PrevButton>
							<DatePicker.Heading class="text-[15px] font-medium" />
							<DatePicker.NextButton
								class="bg-walnut-muted/80 hover:bg-walnut-dark/80 hover:text-walnut-accent 
								text-walnut-accent/80 inline-flex size-10 items-center justify-center
								rounded-lg transition-all active:scale-[0.98]"
							>
								<ChevronRight class="size-6" />
							</DatePicker.NextButton>
						</DatePicker.Header>
						<div
							class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-y-0 sm:space-x-4"
						>
							{#each months as month}
								<DatePicker.Grid
									class="w-full border-collapse space-y-1 select-none"
								>
									<DatePicker.GridHead>
										<DatePicker.GridRow
											class="mb-1 flex w-full justify-between"
										>
											{#each weekdays as day}
												<DatePicker.HeadCell
													class="text-walnut-muted/80 w-10 rounded-md 
													text-xs font-normal!"
												>
													<div>{day.slice(0, 2)}</div>
												</DatePicker.HeadCell>
											{/each}
										</DatePicker.GridRow>
									</DatePicker.GridHead>
									<DatePicker.GridBody>
										{#each month.weeks as weekDates}
											<DatePicker.GridRow class="flex w-full">
												{#each weekDates as date}
													<DatePicker.Cell
														{date}
														month={month.value}
														class="relative size-10 p-0! text-center text-sm"
													>
														<DatePicker.Day
															class="text-walnut-muted/80
															data-selected:bg-walnut-dark/80 data-disabled:text-walnut-muted/30 
															data-selected:text-background data-unavailable:text-muted-foreground 
															group hover:bg-walnut-dark/30 relative inline-flex
															size-10 items-center justify-center rounded-xl border 
															border-transparent bg-transparent p-0 text-sm font-normal 
															whitespace-nowrap transition-all data-disabled:pointer-events-none 
															data-outside-month:pointer-events-none data-selected:font-medium 
															data-unavailable:line-through"
														>
															<div
																class="bg-walnut-dark group-data-selected:bg-walnut-accent
																absolute top-[5px] hidden size-1 rounded-full transition-all
																group-data-today:block"
															></div>
															{date.day}
														</DatePicker.Day>
													</DatePicker.Cell>
												{/each}
											</DatePicker.GridRow>
										{/each}
									</DatePicker.GridBody>
								</DatePicker.Grid>
							{/each}
						</div>
					{/snippet}
				</DatePicker.Calendar>
			</DatePicker.Content>
		</div>
	</DatePicker.Root>
{/if}
