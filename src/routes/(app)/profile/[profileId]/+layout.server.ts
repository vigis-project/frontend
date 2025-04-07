import { getUserData } from '$lib/server/api';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params, cookies }) => {
	let token: string | undefined;

	if ((token = cookies.get('token'))) {
		console.log(token);

		const user = await getUserData(token, Number(params['profileId']));

		if (user) {
			return { user };
		} else {
			error(404, { message: 'Данного пользователя не существует.' });
		}
	}

	throw error(403, { message: 'У вас нет доступа к данной странице.' });
};
