<script lang="ts">
    // let {exchanges} = $props();
    let {data} = $props();
</script>

<h2>Архив обменов</h2>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Обменянные книги</th>
            <th>Дата обмена</th>
        </tr>
    </thead>
    <tbody>
        <!-- {#each exchanges as exchange} -->
        {#each data as exchange}
            <tr>
                <td>{exchange.id}</td>
                <td>{exchange.booksExchanged}</td>
                <td>{new Date(exchange.exchangedAt).toLocaleDateString()}</td>
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