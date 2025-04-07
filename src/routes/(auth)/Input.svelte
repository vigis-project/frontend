<script lang="ts" generics="T">
	import type { FullAutoFill, HTMLInputAttributes } from 'svelte/elements';

	type Props<T> = {
		id?: string;
		label?: string;
		name?: string;
		value?: T;
		invalidMsg?: string;
		pattern?: RegExp;
		formatter?: (value: T) => T; // Форматирование значения
		type?: HTMLInputAttributes['type'];
		required?: boolean;
		placeholder?: string;
		autocomplete?: FullAutoFill;
		class?: string;
	};

	let input = $state<HTMLInputElement>();
	let valid = $state(true);

	function validate() {
		const isFilled = !!input!.value.trim().length;
		const isPatternValid = pattern ? pattern.test(input!.value) : true;
		valid = isFilled && isPatternValid;
	}

	let {
		id,
		label,
		value = $bindable(),
		formatter,
		pattern,
		invalidMsg,
		...props
	}: Props<T> = $props();

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		if (formatter) {
			value = formatter(target.value as T);
		}
		validate();
	}
</script>

<div class="flex flex-col">
	<label class="" for={id}>
		{label}
		{#if props.required}<span class="text-red-500">*</span>{/if}
	</label>
	<input
		{...props}
		class="peer border-input placeholder:text-muted-foreground focus-visible:ring-ring file:text-foreground mb-6
            flex h-9 w-full rounded-md border bg-transparent p-2 px-3 py-1
            text-base shadow-sm transition-colors file:border-0 file:bg-transparent
            file:text-sm file:font-medium focus-visible:ring-1
            focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[valid=false]:mb-0
            data-[valid=false]:border-red-500 md:text-sm {props.class}"
		bind:this={input}
		bind:value
		{id}
		pattern={pattern?.source}
		onblur={validate}
		oninput={handleInput}
		data-valid={valid}
	/>
	{#if !valid}
		<span class="h-6 text-sm text-red-500">
			{!input.value.trim().length ? 'Обязательно к заполнению.' : invalidMsg}
		</span>
	{/if}
</div>
