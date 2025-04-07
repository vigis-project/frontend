import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, cookies }) => {
	locals.userData = undefined;
	cookies.delete('token', { path: '/' });
};
