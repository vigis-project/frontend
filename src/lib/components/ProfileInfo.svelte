<script lang="ts">
    let { user } =  $props();
</script>

<div class="flex flex-row">
    <img src={user.avatar} alt="Avatar" class="w-1/3 rounded-full mb-4" />
    <div class="flex flex-col ml-2">
        <h3 class="font-bold"><a href="/edit-profile" class="hover:underline hover:text-blue-700  sm:text-4xl text-walnut-accent">{user.username}</a></h3>
        <p class="mt-1text-walnut-accent">Рейтинг: {user.rating} ⭐️</p>
    </div>
</div>


