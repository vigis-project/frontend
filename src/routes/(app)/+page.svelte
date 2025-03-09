<script lang="ts">
	import Section from '$components/Section.svelte';
	import { concurrent } from 'svelte-typewriter';
</script>

<div class="gap-13 pt-15 flex flex-col">
	<Section class="bg-primary-green p-3">
		<h1
			use:concurrent={{ cursor: true, interval: 50, keepCursorOnFinish: true }}
			class="my-auto flex w-full flex-col justify-center text-center text-3xl
			font-medium md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
		>
			Дай вторую жизнь бумажным книгам
		</h1>
	</Section>
	<Section class="bg-primary-whiteish mx-6 rounded-md p-3">
		<q
			class="my-auto flex w-[60%] flex-col items-center justify-center text-center
			text-2xl font-medium italic text-black md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
		>
			Буккроссинг - это свободный обмен бумажными книгами в любых удобных для Вас местах
		</q>
	</Section>
	<div class="gap-13 grid grid-cols-1 xl:grid-cols-2">
		<Section class="bg-primary-green mx-6 rounded-md p-3 lg:h-[650px]">
			<p
				class="my-auto h-fit w-[75%] text-center text-xl font-medium md:w-[50%] md:text-3xl lg:text-4xl"
			>
				Обмен книгами (буккроссинг) становится всё более популярен. Это даёт шанс бумажным
				книгам продлить свою жизнь, помогает владельцам книг делиться хорошими историями и
				получать новые впечатления.
			</p>
		</Section>
		<Section class="bg-primary-whiteish mx-6 h-[400px] rounded-md p-3 lg:h-[650px]">
			<p
				class="my-auto h-fit w-[75%] text-center text-xl font-medium text-black md:w-[50%] md:text-3xl"
			>
				Наш сайт предлагает совершить не просто обмен, а добавить к этому увлекательному
				процессу элемент сюрприза. Подбор книг для обмена будет выполнен по пожеланиям
				участников, но только при получении книги станет известно, какая именно книга будет
				радовать своего владельца
			</p>
		</Section>
	</div>
	<Section class="bg-primary-green mx-6 gap-6 rounded-md p-3 md:gap-12">
		<h2 class="w-full text-center text-3xl font-medium md:text-5xl lg:text-7xl">Интересно?</h2>
		<p
			class="h-fit w-[75%] text-center text-xl font-medium text-white md:w-[50%] md:text-3xl lg:text-5xl"
		>
			Тогда начинайте обмен и приглашайте своих друзей поучаствовать!
		</p>
		<a
			class="bg-primary-whiteish hover:bg-primary-whiteish/90 rounded-md px-4 py-3 text-xl
			 font-medium text-black transition-colors md:text-3xl lg:px-6 lg:py-5 lg:text-5xl"
			href="/sign-up">Начать обмен</a
		>
	</Section>
</div>
