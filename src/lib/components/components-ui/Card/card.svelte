<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<div
	class={["bg-card text-card-foreground rounded-lg border shadow-sm", className]}
	{...$$restProps}
>
	<slot />
</div>