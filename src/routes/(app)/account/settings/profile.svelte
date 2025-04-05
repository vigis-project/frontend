<script lang="ts">
    import AvatarSection from './AvatarSection.svelte';
    import DeliveryInfo from './DeliveryInfo.svelte';
    import GenrePreferences from './GenrePreferences.svelte';

    let firstName = $state('');
    let lastName = $state('');
    let city = $state('');
    let street = $state('');
    let household = $state('');
    let flat = $state('');
    let index = $state('');
    let SurName = $state('');
    let Email = $state('');
    let Password = $state('');
    let ConfirmPassword = $state('');

</script>
<div class="mx-auto w-full max-w-4xl bg-zinc-900 rounded-lg p-6 text-white">
    <!-- Основной контейнер с grid-разметкой -->
    <div class="flex">

        <!-- Правый блок (Адрес + Жанры) - 60% ширины -->
        <div class="w-full ">
            <div >
                <h1 class="text-2xl font-bold mb-6">Профиль</h1>
                <AvatarSection
                    bind:firstName
                    bind:lastName
                    bind:SurName
                    bind:Password
                    bind:ConfirmPassword
                    bind:Email
                />
                <div class="flex justify-center">
                    <button class="text-blue-400 hover:text-blue-300 text-sm px-4 py-2 border border-blue-400 rounded-md">
                        Сохранить
                    </button>
                </div>
            </div>

            <hr class="border-gray-700 my-6" />
            <!-- Блок адреса -->

            <div class="mb-8">
                <h2 class="text-xl font-semibold mb-4">Город</h2>
                <DeliveryInfo 
                    bind:city
                    bind:street
                    bind:household
                    bind:index
                    bind:flat
                />
                <div class="flex justify-center">
                    <button class="text-blue-400 hover:text-blue-300 text-sm px-4 py-2 border border-blue-400 rounded-md">
                        Сохранить
                    </button>
                </div>
            </div>

            <!-- Разделитель -->
            <hr class="border-gray-700 my-6" />

            <!-- Блок жанров -->
            <div class="flex flex-col items-center">
                <h2 class="text-xl font-semibold mb-4">Предпочитаемый жанр</h2>
                <GenrePreferences />
            </div>
        </div>
    </div>
</div>
<style>
    .profile-container {
        max-width: 56rem; /* вместо max-w-4xl */
    }
    .left-column {
        width: 40%;
        border-right: 1px solid #374151; /* вместо border-gray-700 */
        padding-right: 1.5rem; /* вместо pr-6 */
    }
    .right-column {
        width: 60%;
        padding-left: 1.5rem; /* вместо pl-6 */
    }
</style>