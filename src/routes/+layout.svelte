<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
</script>

<div class="bg-walnut-accent text-white">
	{@render children()}
</div>
<ModeWatcher modeStorageKey={'color-theme'} />
