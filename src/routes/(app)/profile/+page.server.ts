import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getMe } from '$lib/server/api';

export const load: PageServerLoad = async ({ locals, cookies }) => {
	if (locals.userData) {
		throw redirect(303, `/profile/${locals.userData.id}`);
	} else {
		let token: string | undefined;

		if ((token = cookies.get('token'))) {
			const userData = await getMe(token);

			if (userData) {
				locals.userData = userData;

				throw redirect(303, `/profile/${locals.userData.id}`);
			}
		}
	}

	throw error(403, { message: 'У вас нет доступа к данной странице.' });
};
