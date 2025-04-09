<script lang="ts">
	import { ChevronUp } from 'lucide-svelte';
	import Input from './Input.svelte';

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
	let streetValid = $state(true);
	let lastNameValid = $state(true);
	let firstNameValid = $state(true);
	let buildingValid = $state(true);
	let householdValid = $state(true);
	let SurNameValid = $state(true);
	let flatValid = $state(true);
	let indexValid = $state(true);

	function formatISBN(value: string): string {
		value = value.replace(/\D/g, '');

		let formatted = '';
		if (value.length > 0) formatted += value.slice(0, 3);
		if (value.length > 3) formatted += '-' + value.slice(3, 4);
		if (value.length > 4) formatted += '-' + value.slice(4, 9);
		if (value.length > 9) formatted += '-' + value.slice(9, 12);
		if (value.length > 12) formatted += '-' + value.slice(12, 13);
		return formatted;
	}
</script>

<div class="bg-walnut-muted/80 flex w-full rounded-lg p-6 shadow">
	<!-- Левая колонка -->
	<div class="flex h-[400px] w-1/2 flex-col pr-4">
		<!-- Город -->
		<div>
			<Input
				class="bg-walnut-muted"
				id="title"
				label="Город"
				bind:value={city}
				pattern={/^[А-Яа-яЁё0-9\s"',.!?\-]{3,30}$/}
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
				class="bg-walnut-muted"
				id="title"
				label="Улица"
				bind:value={street}
				pattern={/^[А-Яа-яЁё0-9\s"',.!?\-]{3,25}$/}
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
					class="bg-walnut-muted"
					id="building"
					label="Номер строения"
					bind:value={building}
					pattern={/^[0-9А-Яа-яЁё]{0,3}$/}
					type="text"
					invalidMsg="Некорректный формат."
					placeholder="номер"
					required
					data-valid={buildingValid}
				/>
			</div>

			<div class="mr-2 w-1/3">
				<Input
					class="bg-walnut-muted"
					id="household"
					label="Номер дома"
					bind:value={household}
					pattern={/^(?=[0-9]*[А-Яа-яЁё]?[0-9]*$)[0-9А-Яа-яЁё]{1,5}$/}
					type="text"
					invalidMsg="Некорректный формат."
					placeholder="дом"
					required
					data-valid={householdValid}
				/>
			</div>

			<div class="mr-2 w-1/3">
				<Input
					class="bg-walnut-muted"
					id="flat"
					label="Квартира"
					bind:value={flat}
					pattern={/^(?=[0-9]*[А-Яа-яЁё]?[0-9]*$)[0-9А-Яа-яЁё]{0,5}$/}
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
				class="bg-walnut-muted"
				id="index"
				label="Индекс"
				bind:value={index}
				pattern={/^\d{6}$/}
				type="text"
				invalidMsg="Некорректный формат Index."
				placeholder="XXXYYY"
				required
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
				class="bg-walnut-muted"
				id="lastName"
				label="Фамилия"
				bind:value={lastName}
				pattern={/^[А-Яа-яЁё]{2,50}$/}
				type="text"
				invalidMsg="Некорректный формат."
				placeholder="Сорокин"
				required
				data-valid={lastNameValid}
			/>

			<!-- Имя -->
			<div>
				<Input
					class="bg-walnut-muted"
					id="firstName"
					label="Имя"
					bind:value={firstName}
					pattern={/^[А-Яа-яЁё]{2,25}$/}
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
					class="bg-walnut-muted"
					id="SurName"
					label="Отчество"
					bind:value={SurName}
					pattern={/^[А-Яа-яЁё]{0,25}$/}
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
	<button
		onclick={onPrevTab}
		class="hover:bg-walnut-light bg-walnut-accent active:bg-walnut-accent/80
		disabled:bg-walnut-muted/80 cursor-pointer rounded p-2 px-20
		text-black transition-colors disabled:cursor-default disabled:text-white"
		type="button"
	>
		Назад
	</button>
	<button
		class="hover:bg-walnut-light bg-walnut-accent active:bg-walnut-accent/80
		disabled:bg-walnut-muted/80 cursor-pointer rounded p-2 px-20
		text-black transition-colors disabled:cursor-default disabled:text-white"
		type="submit"
	>
		Подтвердить данные
	</button>
</div>
