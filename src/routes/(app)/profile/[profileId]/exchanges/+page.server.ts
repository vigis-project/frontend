import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	if (!locals.userData || locals.userData.id !== Number(params['profileId']))
		throw error(403, { message: 'У вас нет доступа к данной странице.' });
};
