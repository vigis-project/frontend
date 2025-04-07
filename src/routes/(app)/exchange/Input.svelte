<script lang="ts" generics="T">
	import type { FullAutoFill, HTMLInputAttributes } from 'svelte/elements';

	type Props<T> = {
		id: string;
		label: string;
		value: T;
		invalidMsg: string;
		pattern?: RegExp;
		formatter?: (value: T) => T; // Форматирование значения
		type: HTMLInputAttributes['type'];
		required?: boolean;
		placeholder?: string;
		autocomplete?: FullAutoFill;
		'data-valid'?: boolean;
		class?: string;
	};

	let input: HTMLInputElement;
	let valid = $state(true);

	function validate() {
		const isFilled = !!input.value.trim().length;
		const isPatternValid = pattern ? pattern.test(input.value) : true;
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
		class="peer mb-6 w-full rounded border p-2 data-[valid=false]:mb-0 data-[valid=false]:border-red-500 {props.class}"
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
