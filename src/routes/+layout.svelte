<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
</script>

<div class="min-h-screen w-screen bg-background text-foreground">
	{@render children()}
</div>
<ModeWatcher modeStorageKey={'color-theme'} />
