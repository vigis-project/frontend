import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, cookies }) => {
	cookies.set('token', '', { path: '/', expires: new Date(Date.now() - 1) });

	locals.userData = undefined;
};
