<script lang="ts">
	import ProposalBlock from '$components/Profile/Exchanges/ProposalBlock.svelte';

	import type { User, Exchange, Book } from '$lib/server/types';

	const books: Book[] = [
		{ id: 1, author: 'Анна Ахматова', title: 'Реквием', data: '...' },
		{ id: 2, author: 'Лев Толстой', title: 'Война и мир', data: '...' },
		{ id: 3, author: 'Федор Достоевский', title: 'Преступление и наказание', data: '...' },
		{ id: 4, author: 'Антон Чехов', title: 'Палата №6', data: '...' },
		{ id: 5, author: 'Александр Пушкин', title: 'Евгений Онегин', data: '...' },
		{ id: 6, author: 'Михаил Булгаков', title: 'Мастер и Маргарита', data: '...' },
	];

	const users: User[] = [
		{
			id: 1,
			email: 'ivanov@example.com',
			username: 'Ivanov',
			firstName: 'Иван',
			lastName: 'Иванов',
			secondName: 'Иванович',
			avatar: '/avatars/ivanov.jpg',
			city: 'Москва',
			rating: 4.8
		},
		{
			id: 2,
			email: 'petrov@example.com',
			username: 'Petrov',
			firstName: 'Петр',
			lastName: 'Петров',
			secondName: 'Петрович',
			avatar: '/avatars/petrov.jpg',
			city: 'Санкт-Петербург',
			rating: 4.7
		},
		{
			id: 3,
			email: 'sidorov@example.com',
			username: 'Sidorov',
			firstName: 'Семён',
			lastName: 'Сидоров',
			secondName: 'Семёнович',
			avatar: '/avatars/sidorov.jpg',
			city: 'Тверь',
			rating: 4.5
		},
		{
			id: 4,
			email: 'sidorov@example.com',
			username: 'Sidorov',
			firstName: 'Александр',
			lastName: 'Александров',
			secondName: 'Александрович',
			avatar: '/avatars/sidorov.jpg',
			city: 'Тверь',
			rating: 4.5
		}
	];

	const Exchanges: Exchange[] = [
		{
			bookOffer: books[1],
			bookRequest: books[0],
			userOffer: users[0],
			userRequest: users[0]
		},
		{
			bookOffer: books[2],
			bookRequest: books[5],
			userOffer: users[0],
			userRequest: users[1]
		},
		{
			bookOffer: books[3],
			bookRequest: books[0],
			userOffer: users[0],
			userRequest: users[2]
		}
	];
</script>

<ProposalBlock Proposals={Exchanges} ButtonText="Подробнее" />

<!-- Каждая строка в вариантах для обмена состоит из надписи “Книга” и номер книги в БД,
наименования города владельца книги и указания рейтинга этого участника. Также в правой части
строки отображаются данные по книге пользователя, на которую предлагается совершить обмен:
ФИО автора книги и название. При выборе варианта для обмена пользователь может просмотреть
более подробную информацию по варианту (возможно на раскрывающейся панели) : характеристики
книги, предлагаемой другим участником для обмена. Там же на раскрывающейся панели
расположена кнопка «Меняюсь» (варианты названий «Подтвердить участие», «Согласен
обменяться»). -->
