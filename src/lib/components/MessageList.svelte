<script lang="ts">
    let {messages} = $props();
</script>

<h2>Сообщения</h2>
<table class="w-full border-collapse">
    <thead>
        <tr>
            <th class="border px-4 py-2">Отправитель</th>
            <th class="border px-4 py-2">Тема</th>
            <th class="border px-4 py-2">Дата</th>
        </tr>
    </thead>
    <tbody>
        {#each messages as message}
            <tr>
                <td class="border px-4 py-2">{message.sender}</td>
                <td class="border px-4 py-2">{message.subject}</td>
                <td class="border px-4 py-2">{new Date(message.timestamp).toLocaleDateString()}</td>
            </tr>
        {/each}
    </tbody>
</table>

