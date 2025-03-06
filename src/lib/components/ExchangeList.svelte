<script lang="ts">
    import type { Book } from '../server/types';

    // let { proposals } =  $props();
    let { data } =  $props();

    function formatBooks(books: Book[]) {
        return books.map((val: Book) => (`${val.author} - ${val.title}`)
    )}

</script>

<h2>Предложения для обмена</h2>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Предлагаемые книги</th>
            <th>Запрашиваемые книги</th>
            <th>Статус</th>
        </tr>
    </thead>
    <tbody>
        <!-- {#each proposals as proposal} -->
        {#each data as proposal}
            <tr>
                <td>{proposal.id}</td>
                <td>{formatBooks(proposal.booksOffered)}</td>
                <td>{formatBooks(proposal.booksRequested)}</td>
                <td>{proposal.status}</td>
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