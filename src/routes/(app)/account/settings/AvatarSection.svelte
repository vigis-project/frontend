<script lang="ts">
	import Input from '../../exchange/new/Input.svelte';

	type Props = {
		lastName: string;
		firstName: string;
		SurName: string;
		Email: string;
		Password: string;
		ConfirmPassword: string;
	};

	let {
		lastName = $bindable(),
		firstName = $bindable(),
		SurName = $bindable(),
		Email = $bindable(),
		Password = $bindable(),
		ConfirmPassword = $bindable()
	}: Props = $props();

	let lastNameValid = $state(true);
	let firstNameValid = $state(true);
	let SurNameValid = $state(true);
	let EmailValid = $state(true);
	let PasswordValid = $state(true);
	let ConfirmPasswordValid = $state(true);
</script>

<div class="flex w-full flex-col items-center">
	<!-- Фамилия -->
	<Input
		class="bg-walnut-accent w-full  max-w-[400px] text-black lg:w-[400px]"
		id="lastName"
		label="Фамилия"
		bind:value={lastName}
		pattern={/^[А-Яа-яЁё]{2,50}$/}
		type="text"
		invalidMsg="Некорректный формат."
		placeholder="Сорокин"
		required={false}
		data-valid={lastNameValid}
	/>

	<!-- Имя -->
	<Input
		class="bg-walnut-accent w-full max-w-[400px] text-black lg:w-[400px]"
		id="firstName"
		label="Имя"
		bind:value={firstName}
		pattern={/^[А-Яа-яЁё]{2,25}$/}
		type="text"
		invalidMsg="Некорректный формат."
		placeholder="Андрей"
		required={false}
		data-valid={firstNameValid}
	/>

	<!-- Отчество -->
	<Input
		class="bg-walnut-accent w-full max-w-[400px] text-black lg:w-[400px]"
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
	<Input
		class="bg-walnut-accent w-full max-w-[400px] text-black lg:w-[400px]"
		id="email"
		label="Почта"
		bind:value={Email}
		pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{8,100}$/}
		type="text"
		invalidMsg="Некорректный формат."
		placeholder="Test@mail.ru"
		required={false}
		data-valid={EmailValid}
	/>
	<Input
		class="bg-walnut-accent w-full max-w-[400px] text-black lg:w-[400px]"
		id="password"
		label="Пароль"
		bind:value={Password}
		pattern={/^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)[\w!@#$%^&*()\-+=<>.,;:'"`~\[\]{}|\\\/]{8,50}$/}
		type="text"
		invalidMsg="Некорректный формат."
		placeholder=""
		required={false}
		data-valid={PasswordValid}
	/>
	<Input
		class="bg-walnut-accent w-full max-w-[400px] text-black lg:w-[400px]"
		id="ConfirmPassword"
		label="Подтвердите пароль"
		bind:value={ConfirmPassword}
		pattern={/^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)[\w!@#$%^&*()\-+=<>.,;:'"`~\[\]{}|\\\/]{8,50}$/}
		type="text"
		invalidMsg="Некорректный формат."
		placeholder=""
		required={false}
		data-valid={ConfirmPasswordValid}
	/>
</div>
