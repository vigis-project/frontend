<script lang="ts">
    let {ExchangeCard} =  $props();

    let isConfirmed = $state(false);
    let requestConfirmed = $state(false);
    let ONumber = $state();

    function Confirm() {
        isConfirmed = true;
    }

</script>

<div>
    <div class="p-2 w-full bg-walnut-dark flex flex-row items-center justify-center rounded-md h-95">
        <div class="flex flex-col items-center justify-center w-60 h-70">
            <h1 class="text-walnut-accent">Отдаю</h1>
            <h1>{ExchangeCard.exchange.bookOffer.author}</h1>
            <h1>{ExchangeCard.exchange.bookOffer.title}</h1>
            <h1>{ExchangeCard.exchange.bookOffer.data}</h1> 
            <h1>{ExchangeCard.OfferStatus}</h1>
        </div>
        <div class="flex flex-col items-center justify-top ml-4 mr-4 w-60 h-80">
            <div class="bg-walnut-accent mb-5 w-0.5 h-65"></div>
            {#if isConfirmed == false}
                <button onclick={Confirm} class="bg-walnut-accent font-semibold text-walnut-dark p-1 rounded-xs">Подтвердить обмен</button>
            {:else}
                <h1 class="font-medium transition-colors">{ExchangeCard.OfferStatus}</h1>
            {/if}
        </div>
        <div class="flex flex-col items-center justify-center w-60 h-70">
            <h1 class="text-walnut-accent">Получаю</h1>
            <h1>{ExchangeCard.exchange.bookRequest.author}</h1>
            <h1>{ExchangeCard.exchange.bookRequest.title}</h1>
            <h1>{ExchangeCard.exchange.bookRequest.data}</h1>  
            <h1>{ExchangeCard.RequestStatus}</h1>
        </div>
    </div>

    {#if isConfirmed == true}
    <div class="flex flex-row mt-3">
        <div class="w-full bg-walnut-dark flex flex-col items-center justify-center rounded-md mr-4">
            <h1 class="mt-2 text-walnut-accent">Номер отправления</h1>
            {#if requestConfirmed == false}
                <input 
                class="mt-2 bg-walnut-accent rounded-sm text-walnut-dark"        
                type="number" 
                bind:value={ONumber}>
            {:else}
                <h1 class="font-medium transition-colors">{ExchangeCard.offerNumber}</h1>
            {/if}
            <button class="mt-2 bg-walnut-accent font-semibold text-walnut-dark p-1 rounded-xs">Отправил</button>
        </div>
        <div class="p-2 w-full bg-walnut-dark flex flex-col items-center justify-center rounded-md ml-3">
            <h1 class="mt-2 text-walnut-accent">Номер отправления</h1>
            <h1 class="mt-2">{ExchangeCard.requestNumber}</h1>
            <button class="mt-2 bg-walnut-accent font-semibold text-walnut-dark p-1 rounded-xs">Получил</button>
        </div>
    </div>
    {/if}
</div>

