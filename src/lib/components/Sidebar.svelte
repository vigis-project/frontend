<script lang="ts">
	import type { Tab } from "$lib/server/types";

    type Props = {
        // tabs: Tab[];
        tabs: any[];
        activeTab: any;
    }

    let { tabs, activeTab }: Props = $props();
    let selectedTab = $state(activeTab ? activeTab : tabs[0]);

    function handleClick(tab: any) {
        selectedTab = tab;
        activeTab = tab;
    }
    
</script>

<div class="profile-info">
    <img src="/avatar.png" alt="Avatar" class="avatar" />
    <h3><a href="/edit-profile">John Doe</a></h3>
    <p>Рейтинг: (4.5) ⭐️</p>
</div>

<nav>
    <!-- svelte-ignore event_directive_deprecated -->
    {#each tabs as tab}
    <!-- on:click|preventDefault={handleClick(tab) -->
        <a href="#" class:active={tab === selectedTab}>
            {tab.title}
        </a>
    {/each}
</nav>

<style>
    .profile-info {
        text-align: center;
        margin-bottom: 20px;
    }
    .avatar {
        width: 50%;
        border-radius: 50%;
        margin-bottom: 10px;
    }
    nav a {
        display: block;
        padding: 10px;
        color: #333;
        text-decoration: none;
    }
    nav {
        font-weight: bold;
        background-color: #ddd;
    }
</style>

