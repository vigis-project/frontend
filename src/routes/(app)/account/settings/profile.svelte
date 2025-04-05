<script lang="ts">
    import AvatarSection from './AvatarSection.svelte';
    import DeliveryInfo from './DeliveryInfo.svelte';
    import GenrePreferences from './GenrePreferences.svelte';

    let title = $state('');
    let firstName = $state('');
    let lastName = $state('');
    let city = $state('');
    let street = $state('');
    let household = $state('');
    let flat = $state('');
    let index = $state('');
    let SurName = $state('');
    
</script>
<div class="mx-auto w-full max-w-4xl bg-zinc-900 rounded-lg p-6 text-white">
    <!-- Основной контейнер с grid-разметкой -->
    <div class="flex">
        <!-- Левый блок (Аватар + ФИО) - 40% ширины -->
        <div class="w-[40%] border-r border-gray-700 pr-6">
            <h1 class="text-2xl font-bold mb-6">Профиль</h1>
            <AvatarSection
                bind:firstName
                bind:lastName
                bind:SurName
            />
            <div class="flex justify-center">
                <button class="text-blue-400 hover:text-blue-300 text-sm px-4 py-2 border border-blue-400 rounded-md">
                    Редактировать
                </button>
            </div>
        </div>

        <!-- Правый блок (Адрес + Жанры) - 60% ширины -->
        <div class="w-[60%] pl-6">
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
            </div>

            <!-- Разделитель -->
            <hr class="border-gray-700 my-6" />

            <!-- Блок жанров -->
            <div>
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