<script lang="ts">
    let { user } =  $props();
</script>

<div class="flex flex-col items-center mb-6">
    <img src={user.avatar} alt="Avatar" class="w-1/2 rounded-full mb-4" />
    <h3 class="font-bold"><a href="/edit-profile" class="hover:underline hover:text-blue-700 700 text-black">{user.username}</a></h3>
    <p class="mt-1 text-black">Рейтинг: {user.rating} ⭐️</p>
</div>


