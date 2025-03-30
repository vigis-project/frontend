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
    
    let lastNameEmptyError = $state(false);
    let lastNameValidationError = $state(false);
    let cityEmptyError = $state(false);
    let cityValidationError = $state(false);    
    let streetEmptyError = $state(false);
    let streetValidationError = $state(false);
    let buildingEmptyError = $state(false);
    let buildingValidationError = $state(false);
    let householdEmptyError = $state(false);
    let householdValidationError = $state(false);
    let indexEmptyError = $state(false);
    let indexValidationError = $state(false);
    let firstNameEmptyError = $state(false);
    let firstNameValidationError = $state(false);
    let flatEmptyError = $state(false);
    let flatValidationError = $state(false);
    let surNameError = $state(false);
    
    function validateLastName(event: Event) {
        const input = (event.target as HTMLInputElement).value;
        const regex = /^[А-Яа-яЁё]{2,50}$/; 
    
        if (!regex.test(input)) {
            lastNameValidationError = true;
        } else {
            lastNameValidationError = false;
        }
    }
    
    function formatindex(event: Event) {
        const input = (event.target as HTMLInputElement).value.replace(/\D/g, ""); 
        const maxLength = 6; 
        index = input.slice(0, maxLength);
    }

    function validateIndex(event: Event) {
        const input = (event.target as HTMLInputElement).value;
        if (input.trim() === "") {
            indexValidationError = false; 
            return;
        }
        const regex = /^\d{6}$/; 
        indexValidationError = !regex.test(input);
    }   
    
    function validateFirstName(event: Event) {
        const input = (event.target as HTMLInputElement).value;
        const regex = /^[А-Яа-яЁё]{2,25}$/; 
    
        if (!regex.test(input)) {
            firstNameValidationError = true;
        } else {
            firstNameValidationError = false;
        }
    }
    
    function validateCity(event: Event) {
        const input = (event.target as HTMLInputElement).value;
        const regex = /^[А-Яа-яЁё]{3,30}$/; 
    
        if (!regex.test(input)) {
            cityValidationError = true;
        } else {
            cityValidationError = false;
        }
    }
    
    function validateStreet(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    const regex = /^[А-Яа-яЁё0-9\-\s]{3,25}$/; 

    if (!regex.test(input)) {
        streetValidationError = true;
    } else {
        streetValidationError = false;
    }
}

    function validateHousehold(event: Event) {
        const input = (event.target as HTMLInputElement).value;
        const regex = /^[0-9А-Яа-яЁё]{1,5}$/;; 
    
        if (!regex.test(input)) {
            householdValidationError = true;
        } else {
            householdValidationError = false;
        }
    }

    function validateSurName(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    if (input.trim() === "") {
        surNameError = false;       
        return;
    }
    const regex = /^[А-Яа-яЁё]{0,25}$/; 
    surNameError = !regex.test(input);
}

    function validateFlat(event: Event) {
        const input = (event.target as HTMLInputElement).value;
        if (input.trim() === "") {
            flatValidationError = false; 
            return;
        }
        const regex = /^[0-9А-Яа-яЁё]{0,5}$/; 
        flatValidationError = !regex.test(input);
    }

    function validateBuilding(event: Event) {
        const input = (event.target as HTMLInputElement).value;
        const regex = /^[0-9А-Яа-яЁё]{1,5}$/; 

        if (!regex.test(input)) {
            buildingValidationError = true;
        } else {
            buildingValidationError = false;
        }
    }
    function validateField(value: string) {
        return !value || value.trim() === "";
    }

    function validateAllFields() {
    cityEmptyError = validateField(city);
    streetEmptyError = validateField(street);
    buildingEmptyError = validateField(building);
    householdEmptyError = validateField(household);
    indexEmptyError = validateField(index);
    lastNameEmptyError = validateField(lastName);
    firstNameEmptyError = validateField(firstName);

    if (
        cityEmptyError || cityValidationError ||
        streetEmptyError || streetValidationError ||
        buildingEmptyError || buildingValidationError ||
        householdEmptyError || householdValidationError ||
        indexEmptyError || indexValidationError ||
        lastNameEmptyError || lastNameValidationError ||
        firstNameEmptyError || firstNameValidationError
    ) {
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
                    oninput={(e) => validateCity(e)}
                    class="border p-2 w-full rounded"
                    class:border-red-500={cityEmptyError || cityValidationError}
                />
                {#if cityEmptyError}
                    <span class="text-red-500 text-sm">Обязательно к заполнению.</span>
                {/if}
                {#if cityValidationError && !cityEmptyError}
                    <span class="text-red-500 text-sm">Некорректное имя. Только кириллица, до 30 символов.</span>
                {/if}
            </div>
    
            <!-- Улица -->
            <div class:mb-6={!streetEmptyError && !streetValidationError}>
                <span class="block text-sm font-medium">Улица <span class="text-red-500 font-bold">*</span></span>
                <input
                    type="text"
                    aria-label="Название Улицы"
                    placeholder="Название Улицы"
                    bind:value={street}
                    onblur={(e) => {
                        streetEmptyError = validateField(street);
                        validateStreet(e);
                    }}
                    oninput={(e) => validateStreet(e)} 
                    class="border p-2 w-full rounded"
                    class:border-red-500={streetEmptyError || streetValidationError}
                />
                {#if streetEmptyError}
                    <span class="text-red-500 text-sm">Обязательно к заполнению.</span>
                {/if}
                {#if streetValidationError && !streetEmptyError}
                    <span class="text-red-500 text-sm">Некорректный формат.</span>
                {/if}
            </div>
    
            <!-- Номер строение, Номер Дом, Номер квартиры, Индекс -->
            <div class="flex">
                <div class="w-1/3 mr-2" class:mb-6={!buildingEmptyError && !buildingValidationError}>
                    <span class="block text-sm font-medium">Номер строение <span class="text-red-500 font-bold">*</span></span>
                    <input
                        type="text"
                        autocomplete="street-address"
                        aria-label="Строение"
                        placeholder="Строение"
                        bind:value={building}
                        onblur={(e) => {
                            buildingEmptyError = validateField(building);
                            validateBuilding(e);
                        }}
                        oninput={(e) => validateBuilding(e)}
                        class="border p-2 w-full rounded"
                        class:border-red-500={buildingEmptyError}
                    />
                    {#if buildingEmptyError}
                        <span class="text-red-500 text-sm">Обязательно к заполнению.</span>
                    {/if}
                    {#if buildingValidationError && !buildingEmptyError}
                        <span class="text-red-500 text-sm">Некорректный формат</span>
                    {/if}
                </div>
    
                <div class="w-1/3 mr-2" class:mb-6={!householdEmptyError && !householdValidationError}>
                    <span class="block text-sm font-medium">Номер дома <span class="text-red-500 font-bold">*</span></span>
                    <input
                        type="text"
                        autocomplete="street-address"
                        aria-label="Дом"
                        placeholder="Дом"
                        bind:value={household}
                        onblur={(e) => {
                            householdEmptyError = validateField(household);
                            validateHousehold(e);
                        }}
                        oninput={(e) => validateHousehold(e)}
                        class="border p-2 w-full rounded"
                        class:border-red-500={householdEmptyError}
                    />
                    {#if householdEmptyError}
                        <span class="text-red-500 text-sm">Обязательно к заполнению.</span>
                    {/if}
                    {#if householdValidationError && !householdEmptyError}
                        <span class="text-red-500 text-sm">Некорректный формат</span>
                    {/if}

                </div>

                <div class="w-1/3 mr-2" class:mb-6={!flatEmptyError && !flatValidationError}>
                    <span class="block text-sm font-medium">Квартира</span>
                    <input
                        type="text"
                        autocomplete="address-line1"
                        aria-label="Квартира"
                        placeholder="Квартира"
                        bind:value={flat}
                        onblur={(e) => validateFlat(e)}
                        oninput={(e) => validateFlat(e)}
                        class="border p-2 w-full rounded"
                    />
                    {#if flatValidationError && !flatEmptyError}
                        <span class="text-red-500 text-sm">Некорректный формат</span>
                    {/if}
                </div>
            </div>
    
            <div class:mb-6={!indexEmptyError && !indexValidationError}>
                <span class="block text-sm font-medium">Индекс <span class="text-red-500 font-bold">*</span></span>
                <input  
                    type="text"
                    aria-label="XXXYYY"
                    placeholder="XXXYYY"
                    bind:value={index}
                    oninput={(e) => {
                        formatindex(e); // Форматирование индекса
                        validateIndex(e); // Валидация индекса
                    }}
                    onblur={(e) => {
                        indexEmptyError = validateField(index);
                        validateIndex(e); // Валидация индекса при потере фокуса
                    }}
                    class="border p-2 w-full rounded"
                    class:border-red-500={indexEmptyError || indexValidationError}
                />
                {#if indexEmptyError}
                    <span class="text-red-500 text-sm">Обязательно к заполнению.</span>
                {/if}
                {#if indexValidationError && !indexEmptyError}
                    <span class="text-red-500 text-sm">Некорректный формат. Индекс должен состоять из 6 цифр.</span>
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

    
<style>
   

    input {
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
        border-radius: 0.375rem; 
    }

    input:focus {
        border-color: #3b82f6; 
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5); 
        outline: none; 
    }

    .border-red-500 {
        border-color: #ef4444; 
    }

    button {
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #3b82f6; 
    }
</style>