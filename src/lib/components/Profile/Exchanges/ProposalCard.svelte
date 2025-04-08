<script lang="ts">
    let { Offer, ButtonText } =  $props();
</script>

<div class="border p-4 w-full  bg-walnut-dark flex flex-row gap-2 mb-2 last:border-none rounded-sm"> 
    <span class="font-semibold text-walnut-accent text-base">Книга: {Offer.bookOffer.id}</span> 
    <span class="font-semibold text-walnut-accent text-base">{Offer.bookOffer.title}</span> 
    <span class="ml-1 text-walnut-accent text-base">{Offer.UserOffer.city}</span> 
    <span class="text-walnut-accent text-base">Рейтинг: {Offer.UserOffer.rating} ⭐️</span> 
    <div class="ml-auto">
        <span class="mr-2 font-semibold text-walnut-accent text-base">{Offer.bookRequest.author}</span> 
        <span class="mr-2 font-semibold text-walnut-accent text-base">{Offer.bookRequest.title}</span> 
        <button class="bg-walnut-accent font-semibold text-walnut-dark p-1 rounded-xs">
            {ButtonText}
        </button>
    </div>
</div>





<!-- <div class="border p-4 w-full bg-walnut-dark flex flex-row gap-2 mb-2 last:border-none rounded-sm">
    <div class="flex flex-col items-start gap-1">
        <div class="flex flex-row">
            <span class="font-semibold text-walnut-accent text-base">Книга: {Offer.bookOffer.id} -</span>
            <span class="ml-1 text-walnut-accent text-base">{Offer.bookOffer.title}</span>
        </div>
        <div class="flex flex-row">
            <span class="font-semibold text-walnut-accent text-base">Город:</span>
            <span class="ml-1 text-walnut-accent text-base">{Offer.UserOffer.city} ⭐️</span>
        </div>
        <div class="flex flex-row">
            <span class="font-semibold text-walnut-accent text-base">Рейтинг:</span>
            <span class="ml-1 text-walnut-accent text-base">{Offer.UserOffer.rating} ⭐️</span>
        </div>
    </div>
    <div class="ml-auto flex flex-col items-end justify-center gap-1">
        <span class="mr-2 font-semibold text-walnut-accent text-base">{Offer.bookRequest.author}</span>
        <span class="mr-2 font-semibold text-walnut-accent text-base">{Offer.bookRequest.title}</span>
        <button class="bg-walnut-accent font-semibold text-walnut-dark p-1 rounded-xs w-max">
            {ButtonText}
        </button>
    </div>
</div> -->


