<script lang="ts">
	import { ChevronUp } from 'lucide-svelte';
	import Input from "./Input.svelte";
  
	type Props = {
		city: string;
		street: string;
		household: string;
		building: string;
		flat: string;
		index: string;
		lastName: string;
		firstName: string;
		SurName: string;
		onPrevTab: () => void;
	};

	let {
		city = $bindable(),
		street = $bindable(),
		household = $bindable(),
		building = $bindable(),
		flat = $bindable(),
		index = $bindable(),
		lastName = $bindable(),
		firstName = $bindable(),
		SurName = $bindable(),
		onPrevTab
	}: Props = $props();

	let cityValid = $state(true);
	let streetValid =$state(true);
	let lastNameValid =$state(true);
	let firstNameValid =$state(true);
	let buildingValid =$state(true);
	let householdValid =$state(true);
	let SurNameValid =$state(true);
	let flatValid =$state(true);
	let indexValid = $state(true);

	function formatISBN(value: string): string {
		value = value.replace(/\D/g, ""); 
	
		let formatted = "";
		if (value.length > 0) formatted += value.slice(0, 3);
		if (value.length > 3) formatted += "-" + value.slice(3, 4);
		if (value.length > 4) formatted += "-" + value.slice(4, 9);
		if (value.length > 9) formatted += "-" + value.slice(9, 12);
		if (value.length > 12) formatted += "-" + value.slice(12, 13);
		return formatted; 
	}


</script>

<div class="flex w-full rounded-lg bg-zinc-900 p-6 shadow">
	<!-- Левая колонка -->
	<div class="flex h-[400px] w-1/2 flex-col pr-4">
		<!-- Город -->
		<div>
            <Input 	
        		id="title" 
        		label="Город" 
        		bind:value={city}
        		pattern={/^[A-Za-zА-Яа-яЁё0-9\s"',.!?\-]{1,50}$/} 
        		type="text" 
        		invalidMsg="Некорректный формат." 
        		placeholder="Москва" 
        		required
        		data-valid={cityValid}
    		/>
		</div>
		<!-- Улица -->
		<div>
            <Input 
				
        		id="title" 
        		label="Улица" 
        		bind:value={street}
        		pattern={/^[A-Za-zА-Яа-яЁё0-9\s"',.!?\-]{1,50}$/} 
        		type="text" 
        		invalidMsg="Некорректный формат." 
        		placeholder="Название улицы" 
        		required
        		data-valid={streetValid}
    		/>
		</div>
		<!-- Номер строение, Номер Дом, Номер квартиры, Индекс -->
		<div class="flex">
			<div class="mr-2 w-1/3">
				<Input 	
        		id="building" 
        		label="Номер строения" 
        		bind:value={building}
        		pattern={/^[A-Za-zА-Яа-яЁё0-9\s"',.!?\-]{1,50}$/} 
        		type="text" 
        		invalidMsg="Некорректный формат." 
        		placeholder="номер" 
        		required
        		data-valid={buildingValid}
    		/>
			</div>

			<div class="mr-2 w-1/3" >
				<Input 	
        			id="household" 
        			label="Номер дома" 
        			bind:value={household}
        			pattern={/^[A-Za-zА-Яа-яЁё0-9\s"',.!?\-]{1,50}$/} 
        			type="text" 
        			invalidMsg="Некорректный формат." 
        			placeholder="дом" 
        			required
        			data-valid={householdValid}
    			/>				
			</div>

			<div class="mr-2 w-1/3" >
				<Input 	
        			id="flat" 
        			label="Квартира" 
        			bind:value={flat}
        			pattern={/^[A-Za-zА-Яа-яЁё0-9\s"',.!?\-]{1,50}$/} 
        			type="text" 
        			invalidMsg="Некорректный формат." 
        			placeholder="" 
        			required={false}
        			data-valid={flatValid}
    			/>
			</div>
		</div>

		<div>
				<Input
				id="index"
				label="Индекс"
				bind:value={index}
				pattern={/^\d{3}-\d-\d{5}-\d{3}-\d$/}
				type="text"
				invalidMsg="Некорректный формат Index."
				placeholder="XXXYYY"
				required
				formatter={formatISBN}
				data-valid={indexValid}
			/>
		</div>
		<p class="pt-5">
			<label for="default"
				><input id="default" type="checkbox" /> Сделать адресом по умолчанию</label
			>
		</p>
	</div>

	<!-- Правая колонка -->
	<div class="flex h-[400px] w-1/2 flex-col pl-4">
		<!-- Фамилия -->
		<div>
			<Input 
			id="lastName" 
			label="Фамилия" 
			bind:value={lastName}
			pattern={/^[A-Za-zА-Яа-яЁё]{2,50}$/} 
			type="text" 
			invalidMsg="Некорректный формат." 
			placeholder="Сорокин" 
			required
			data-valid={lastNameValid}
		/>

		<!-- Имя -->
		<div>
			<Input 
			id="firstName" 
			label="Имя" 
			bind:value={firstName}
			pattern={/^[A-Za-zА-Яа-яЁё]{2,25}$/} 
			type="text" 
			invalidMsg="Некорректный формат." 
			placeholder="Андрей" 
			required
			data-valid={firstNameValid}
		/>
		</div>

		<!-- Отчество -->
		<div>
			<Input 
			id="SurName" 
			label="Отчество" 
			bind:value={SurName}
			pattern={/^[A-Za-zА-Яа-яЁё]{2,25}$/} 
			type="text" 
			invalidMsg="Некорректный формат." 
			placeholder="Иванович" 
			required={false}
			data-valid={SurNameValid}
		/>
		</div>
		</div>
	</div>	
</div>

<!-- Кнопки -->
<div class="mt-4 flex justify-between">
	<button onclick={onPrevTab} class="rounded bg-gray-500 p-2 px-20 text-white">Назад</button>
	<button  class="rounded bg-blue-500 p-2 px-6 text-white"
		>Подтвердить данные</button
	>
</div>

<style>
	input {
		transition:
			border-color 0.3s ease,
			box-shadow 0.3s ease;
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
