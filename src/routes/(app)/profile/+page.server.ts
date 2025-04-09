import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getMe } from '$lib/server/api';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.userData) {
		throw redirect(303, `/profile/${locals.userData.id}`);
	} else {
		throw error(403, { message: 'У вас нет доступа к данной странице.' });
	}
};
