import { registerUser } from '$lib/server/api';
import type { CreateUserData } from '$lib/server/types';
import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();

		const data = formData.entries().reduce(
			(prev, cur) => {
				prev[cur[0]] = cur[1];

				return prev;
			},
			{} as Record<string, any>
		) as any as CreateUserData;

		const token = await registerUser(data);

		if (token) {
			cookies.set('token', token, { httpOnly: true, path: '/', sameSite: 'lax' });

			throw redirect(303, '/profile');
		} else {
			return fail(400, { message: 'Некорректные данные.' });
		}
	}
};
