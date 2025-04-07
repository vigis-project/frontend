import { getMe } from '$lib/server/api';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies, locals }) => {
	let token: string | undefined;

	if ((token = cookies.get('token'))) {
		locals.userData = await getMe(token);
	}

	return { userData: locals.userData };
};
