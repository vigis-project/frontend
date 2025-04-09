<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type Props = { value?: any; readOnly?: boolean } & HTMLInputAttributes;

	let { value = $bindable(), ...props }: Props = $props();
</script>

<input
	{...props}
	class={cn([
		'border-input placeholder:text-muted-foreground focus-visible:ring-ring \
	file:text-foreground flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base \
	shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm \
	file:font-medium focus-visible:ring-1 focus-visible:outline-none \
	disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
		props.class
	])}
	bind:value
/>
