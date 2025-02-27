<script lang="ts">
    import Sidebar from '$lib/components/Sidebar.svelte';
    import type { Proposal, Message, CompletedExchange, Tab } from '$lib/server/types';
    import ProfileInfo from '$lib/components/ProfileInfo.svelte';
    import ExchangeList from '$lib/components/ExchangeList.svelte';
    import MessageList from '$lib/components/MessageList.svelte';
    import ArchiveList from '$lib/components/ArchiveList.svelte';
    // import type { Tab } from '$lib/server/types'

    const tabs = [
        { title: 'Предложения для обмена', component: ExchangeList },
        { title: 'Хочу обменять', component: ExchangeList },
        { title: 'Хочу получить', component: ExchangeList },
        { title: 'Активные обмены', component: ExchangeList },
        { title: 'Отзывы на книги', component: null }, // Пока не реализовано
        { title: 'Личные данные', component: null },   // Пока не реализовано
        { title: 'Сообщения', component: MessageList },
        { title: 'Архив', component: ArchiveList },
        { title: 'Выйти', action: () => alert('Выход') }
    ];

    let activeTab = tabs[0];

    // function handleTabClick(tab: Tab) {
    //     activeTab = tab;
    // } 
    // on:click={handleTabClick}

</script>

<div class="container">
    <div class="sidebar">
        <Sidebar {tabs} {activeTab} />
    </div>
    <div class="content">
        {#if (activeTab.component)}
            <svelte:component this={activeTab.component} />
        {:else if (activeTab.action)}
            <button on:click={activeTab.action}>Выполнить</button>
        {:else}
            <h1>{activeTab.title}</h1>
        {/if}
    </div>
</div>

<style>
    .container {
        display: flex;
        height: 100vh;
    }
    .sidebar {
        width: 250px;
        background-color: #f0f0f0;
        padding: 20px;
    }
    .content {
        flex-grow: 1;
        padding: 20px;
    }
</style>