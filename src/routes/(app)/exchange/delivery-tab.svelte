<script lang="ts">
    type Props = {
        city?: string;
        street?: string;
        household?: string;
        building?: string;
        flat?: string;
        index?: string;
        lastName?: string;
        firstName?: string;
        SurName?: string;
        prev: () => void;
    }
    
    let { 
        city = $bindable(""), 
        street = $bindable(""), 
        household= $bindable(""), 
        building= $bindable(""), 
        flat= $bindable(""), 
        index = $bindable(""),
        lastName = $bindable(""), 
        firstName = $bindable(""),
        SurName = $bindable(""),
        prev
    }: Props = $props();
    
    function formatindex(event: Event) {
        const input = (event.target as HTMLInputElement).value.replace(/\D/g, ""); 
        const maxLength = 6; 
        index = input.slice(0, maxLength);
    }
    
    
    let lastNameEmptyError = $state(false);
    let lastNameValidationError = $state(false);
    let cityEmptyError = $state(false);
    let cityValidationError = $state(false);    
    let streetError = $state(false);
    let buildingError = $state(false);
    let householdError = $state(false);
    let indexError = $state(false);
    let firstNameEmptyError = $state(false);
    let firstNameValidationError = $state(false);
    let surNameError = $state(false);
    
    
    function validateLastName(event: Event) {
        const input = (event.target as HTMLInputElement).value;
        const regex = /^[А-Яа-яЁё]{1,50}$/; 
    
        if (!regex.test(input)) {
            lastNameValidationError = true;
        } else {
            lastNameValidationError = false;
        }
    }
    
    
    function validateFirstName(event: Event) {
        const input = (event.target as HTMLInputElement).value;
        const regex = /^[А-Яа-яЁё]{1,25}$/; 
    
        if (!regex.test(input)) {
            firstNameValidationError = true;
        } else {
            firstNameValidationError = false;
        }
    }
    
    function validateCity(event: Event) {
        const input = (event.target as HTMLInputElement).value;
        const regex = /^[А-Яа-яЁё]{1,15}$/; 
    
        if (!regex.test(input)) {
            cityValidationError = true;
        } else {
            cityValidationError = false;
        }
    }

    function validateSurName(event: Event) {
        const input = (event.target as HTMLInputElement).value;
        const regex = /^[А-Яа-яЁё]{1,25}$/; 
    
        if (!regex.test(input)) {
            surNameError = true;
        } else {
            surNameError = false;
        }
    }

    function validateField(value: string) {
        return !value || value.trim() === "";
    }

    function validateAllFields() {
        cityEmptyError = validateField(city);
        streetError = validateField(street);
        buildingError = validateField(building);
        householdError = validateField(household);
        indexError = validateField(index);
        lastNameEmptyError = validateField(lastName);
        firstNameEmptyError = validateField(firstName);
    
        if (cityEmptyError || streetError || buildingError || householdError || indexError || lastNameEmptyError || firstNameEmptyError) {
            
            return false;
        }
    
        return true;
    }
    
    
    function confirmData() {
        if (validateAllFields()) {
            
        }
    }
    </script>
    
    <div class="p-6 bg-zinc-900 rounded-lg shadow w-full flex">
        <!-- Левая колонка -->
        <div class="w-1/2 pr-4 flex flex-col h-[400px]">
            <!-- Город -->
            <div class:mb-6={!cityEmptyError && !cityValidationError}>
                <span class="block text-sm font-medium">Город <span class="text-red-500 font-bold">*</span></span>
                <input
                    type="text"
                    placeholder="Москва"
                    aria-label="Москва"
                    bind:value={city}
                    onblur={(e) => {
                        cityEmptyError = validateField(city);
                        validateCity(e);
                    }}
                    class="border p-2 w-full rounded"
                    class:border-red-500={cityEmptyError || cityValidationError}
                />
                {#if cityEmptyError}
                    <span class="text-red-500 text-sm">Обязательно к заполнению.</span>
                {/if}
                {#if cityValidationError && !cityEmptyError}
                    <span class="text-red-500 text-sm">Некорректное имя. Только кириллица, до 25 символов.</span>
                {/if}
            </div>
    
            <!-- Улица -->
            <div class:mb-6={!streetError}>
                <span class="block text-sm font-medium">Улица <span class="text-red-500 font-bold">*</span></span>
                <input
                    type="text"
                    aria-label="Название Улицы"
                    placeholder="Название Улицы"
                    bind:value={street}
                    onblur={() => streetError = validateField(street)}
                    class="border p-2 w-full rounded"
                    class:border-red-500={streetError}
                />
                {#if streetError}
                    <span class="text-red-500 text-sm">Обязательно к заполнению.</span>
                {/if}
            </div>
    
            <!-- Строение, Дом, Индекс -->
            <div class="flex">
                <div class="w-1/3 mr-2 class:mb-6={!buildingError}">
                    <span class="block text-sm font-medium">Строение <span class="text-red-500 font-bold">*</span></span>
                    <input
                        type="text"
                        autocomplete="street-address"
                        aria-label="Строение"
                        placeholder="Строение"
                        bind:value={building}
                        onblur={() => buildingError = validateField(building)}
                        class="border p-2 w-full rounded"
                        class:border-red-500={buildingError}
                    />
                    {#if buildingError}
                        <span class="text-red-500 text-sm">Обязательно к заполнению.</span>
                    {/if}
                </div>
    
                <div class="w-1/3 mr-2 class:mb-6={!householdError}">
                    <span class="block text-sm font-medium">Дом <span class="text-red-500 font-bold">*</span></span>
                    <input
                        type="text"
                        autocomplete="street-address"
                        aria-label="Дом"
                        placeholder="Дом"
                        bind:value={household}
                        onblur={() => householdError = validateField(household)}
                        class="border p-2 w-full rounded"
                        class:border-red-500={householdError}
                    />
                    {#if householdError}
                        <span class="text-red-500 text-sm">Обязательно к заполнению.</span>
                    {/if}
                </div>

                <div class="w-1/3 ">
                    <span class="block text-sm font-medium">Квартира</span>
                    <input
                        type="text"
                        autocomplete="address-line1"
                        aria-label="Квартира"
                        placeholder="Квартира"
                        class="border p-2 w-full rounded"
                        bind:value={flat}
                    />
                </div>
            </div>
    
            <div class:mb-6={!indexError}>
                <span  class="block text-sm font-medium">Индекс <span class="text-red-500 font-bold">*</span></span>
                <input  
                type="text"
                aria-label="XXXYYY"
                placeholder="XXXYYY"
                bind:value={index}
                oninput={formatindex}
                onblur={() => indexError = validateField(index)}
                class="border p-2 w-full rounded"
                class:border-red-500={indexError}
                />
                {#if indexError}
                        <span class="text-red-500 text-sm"> Обязательно к заполнению.</span>
                {/if}
            </div>
            <p class="pt-5"><label for="default"><input id="default" type="checkbox"> Сделать адресом по умолчанию</label></p>
        </div>
    
        <!-- Правая колонка -->
        <div class="w-1/2 pl-4 flex flex-col h-[400px]">
            <!-- Фамилия -->
            <div class:mb-6={!lastNameEmptyError && !lastNameValidationError}>
                <span class="text-sm font-medium">Фамилия <span class="text-red-500 font-bold">*</span></span>
                <input
                    type="text"
                    autocomplete="family-name"
                    aria-label="Фамилия"
                    bind:value={lastName}
                    onblur={(e) => {
                        lastNameEmptyError = validateField(lastName);
                        validateLastName(e);
                    }}
                    oninput={(e) => validateLastName(e)}
                    placeholder="Фамилия"
                    class="border p-2 w-full rounded"
                    class:border-red-500={lastNameEmptyError || lastNameValidationError}
                />
                {#if lastNameEmptyError}
                    <span class="text-red-500 text-sm">Обязательно к заполнению.</span>
                {/if}
                {#if lastNameValidationError && !lastNameEmptyError}
                    <span class="text-red-500 text-sm">Некорректная фамилия. Только кириллица, до 50 символов.</span>
                {/if}
            </div>
    
            <!-- Имя -->
            <div class:mb-6={!firstNameEmptyError && !firstNameValidationError}>
                <span class="text-sm font-medium">Имя <span class="text-red-500 font-bold">*</span></span>
                <input
                    type="text"
                    autocomplete="name"
                    aria-label="Имя"
                    bind:value={firstName}
                    onblur={(e) => {
                        firstNameEmptyError = validateField(firstName);
                        validateFirstName(e);
                    }}
                    oninput={(e) => validateFirstName(e)}
                    placeholder="Имя"
                    class="border p-2 w-full rounded"
                    class:border-red-500={firstNameEmptyError || firstNameValidationError}
                />
                {#if firstNameEmptyError}
                    <span class="text-red-500 text-sm">Обязательно к заполнению.</span>
                {/if}
                {#if firstNameValidationError && !firstNameEmptyError}
                    <span class="text-red-500 text-sm">Некорректное имя. Только кириллица, до 25 символов.</span>
                {/if}
            </div>
    
            <!-- Отчество -->
            <div class:mb-6={!surNameError}>
                <span class="text-sm font-medium">Отчество</span>
                <input
                    type="text"
                    autocomplete="nickname"
                    aria-label="Отчество"
                    bind:value={SurName}
                    oninput={validateSurName}
                    onblur={validateSurName}
                    placeholder="Отчество"
                    class="border p-2 w-full rounded"
                    class:border-red-500={surNameError}
                />
                {#if surNameError}
                    <span class="text-red-500 text-sm">Некорректное отчество. Только кириллица, до 25 символов.</span>
                {/if}
            </div>
        </div>
    </div>
    
    <!-- Кнопки -->
    <div class="flex justify-between mt-4">	
        <button onclick={prev} class="bg-gray-500 text-white p-2 rounded px-20">Назад</button>
        <button onclick={confirmData} class="bg-blue-500 text-white p-2 rounded px-6">Подтвердить данные</button>
    </div>