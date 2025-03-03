<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<div class={["p-6", className]} {...$$restProps}>
	<slot />
</div>