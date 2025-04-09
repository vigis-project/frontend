import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		// process offer creation

		throw redirect(303, '/exchange/1');
	}
};
