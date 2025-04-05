<script lang="ts">
	import Input from '../../exchange/Input.svelte';
  
	type Props = {
		city: string;
		street: string;
		household: string;
		flat: string;
		index: string;
	};

	let {
		city = $bindable(),
		street = $bindable(),
		household = $bindable(),
		
		flat = $bindable(),
		index = $bindable(),

	}: Props = $props();

	let cityValid = $state(true);
	let streetValid =$state(true);
	let householdValid =$state(true);
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


<div class=" w-full rounded-lg p-6 shadow bg-walnut-muted text-walnut-accent">
	<!-- Левая колонка -->
	<div class="w-full  flex flex-col items-center">
		<!-- Город -->
        <Input 	
 			class="w-full max-w-[400px] lg:w-[400px] bg-walnut-accent text-black "
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
		<!-- Улица -->
        <Input 
			class="w-full max-w-[400px] lg:w-[400px] bg-walnut-accent text-black"
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

		<Input 	
			class="w-full max-w-[400px] lg:w-[400px] bg-walnut-accent text-black"
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
		<Input 	
			class="w-full max-w-[400px] lg:w-[400px] bg-walnut-accent text-black"
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
		<Input
			class="w-full max-w-[400px] lg:w-[400px] bg-walnut-accent text-black"
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
</div>