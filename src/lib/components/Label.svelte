<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLLabelAttributes } from 'svelte/elements';

	type Props = {
		children: Snippet<[]>;
	} & HTMLLabelAttributes;

	let { children, ...props }: Props = $props();
</script>

<label
	class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed
    peer-disabled:opacity-70"
	{...props}
>
	{@render children()}
</label>
