<script lang="ts">
	import type { Message } from "../server/types";

    export let messages: Message[] = [];
</script>

<h2>Сообщения</h2>

<table>
    <thead>
        <tr>
            <th>Отправитель</th>
            <th>Тема</th>
            <th>Дата</th>
        </tr>
    </thead>
    <tbody>
        {#each messages as message}
            <tr>
                <td>{message.sender}</td>
                <td>{message.subject}</td>
                <td>{new Date(message.timestamp).toLocaleDateString()}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        padding: 10px;
        border: 1px solid #ccc;
    }
</style>