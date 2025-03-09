<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		id?: string;
		class?: ClassValue;
		children?: Snippet<[]>;
	};

	const { id, class: className, children }: Props = $props();
</script>

<section
	{id}
	class={[
		'flex h-[300px] flex-col items-center \
	justify-center md:h-[500px] lg:h-[600px] xl:h-[700px]',
		className
	]}
>
	{#if children}
		{@render children()}
	{/if}
</section>
