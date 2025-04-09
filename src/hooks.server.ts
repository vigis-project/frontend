import { getMe } from '$lib/server/api';
import type { Handle, HandleFetch } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	let token: string | undefined;

	if ((token = event.cookies.get('token'))) {
		event.locals.userData = await getMe(token);
	}

	const response = await resolve(event);

	return response;
};
